// @flow

import { observable, action, computed } from 'mobx';

import { ROUTES_URL, TIME_WINDOW, TRIPS_URL } from '../components/constants';

type scheduleStopPair = {
    service_start_date: string,
    origin_departure_time: string,
    route: string,
    route_onestop_id: string,
    time: Date,
    trip: string,
    trip_headsign: string,
};

export type departureListItem = {
    route: string,
    key: string,
    time: Date,
    name: string,
};

export type routeListItem = {
    id: string,
    color: string,
    name: string,
};

const parseScheduleStopPair = (pair: scheduleStopPair): departureListItem => {
    const date = pair.service_start_date;
    const time = pair.origin_departure_time;
    return {
        route: pair.route_onestop_id,
        key: pair.trip,
        time: new Date(`${date}T${time}Z`),
        name: pair.trip_headsign,
    };
};

const parseRoute = (route): routeListItem => ({
    id: route.onestop_id,
    color: `#${route.tags.route_color}`,
    name: route.tags.route_long_name,
});

class scheduleStore {
    @observable departures = [];
    @observable routes = new Map();
    @observable loadingRoutes = false;
    @observable loadingDepartures = false;
    @observable currentTime = new Date();

    @action.bound refreshRoutes() {
        this.routes.clear();
        this.loadingRoutes = true;
        fetch(ROUTES_URL)
            .then((response): object => response.json())
            .then((rJSON): Array<routeListItem> => rJSON.routes.map(parseRoute))
            .then((routes: Array<routeListItem>) => {
                routes.forEach((route: routeListItem) => { this.routes.set(route.id, route); });
            })
            .finally(() => { this.loadingRoutes = false; });
    }

    @action.bound refreshDepartures() {
        this.loadingDepartures = true;
        // assume the timezone is correct
        const dateString = this.currentTime.toISOString().substr(0, 10);
        const startTimeString = this.currentTime.toTimeString().substr(0, 8);
        const endTimeString = new Date(this.currentTime.getTime() + TIME_WINDOW).toTimeString().substr(0, 8);
        const formattedUrl = TRIPS_URL.replace(
            'theDate', dateString
        ).replace(
            'startTime', startTimeString
        ).replace(
            'endTime', endTimeString
        );
        fetch(formattedUrl)
            .then((response): object => response.json())
            .then((rJSON): Array<scheduleStopPair> =>
                rJSON.schedule_stop_pairs.map(parseScheduleStopPair)
            )
            .then((pairs: Array<scheduleStopPair>) => {
                this.departures = pairs.sort((first, second): number =>
                    first.time.getTime() - second.time.getTime()
                );
            })
            .finally(() => { this.loadingDepartures = false; });
    }

    @action.bound refresh() {
        this.refreshDepartures();
        this.refreshRoutes();
    }

    @computed get nextDeparture(): ?scheduleStopPair {
        if (this.departures.length) {
            return this.departures[0];
        }
        return null;
    }

    @computed get millisUntilDeparture(): number {
        if (!this.nextDeparture) {
            return -1;
        }
        return Math.max(
            this.nextDeparture.time.getTime() -
            this.currentTime.getTime() +
            (this.currentTime.getTimezoneOffset() * 60 * 1000), 0);
    }

    @computed get departureData(): Array<{data: scheduleStopPair, routeColor: string, title: string}> {
        const results = [];
        this.routes.forEach((route: routeListItem) => {
            const tripsForRoute = this.departures
                .filter((departure): boolean => departure.route === route.id);
            tripsForRoute.forEach(
                ((trip) => {
                    if (trip.time && trip.time.getTime) {
                        const offset = this.currentTime.getTimezoneOffset() * 60 * 1000;
                        const newTime = new Date(trip.time.getTime() + offset);
                        trip.time = newTime.toLocaleTimeString();
                    }
                })
            );
            results.push({
                data: tripsForRoute,
                routeColor: route.color,
                title: route.name,
            });
        });
        return results
            .sort((first, second): number => first.title.localeCompare(second.title))
            .filter((route): number => route.data.length);
    }

    @computed get loading(): boolean {
        return this.loadingDepartures || this.loadingRoutes;
    }

    timeUpdater = setInterval(() => { this.currentTime = new Date(); }, 100);
}

export const store = new scheduleStore();
