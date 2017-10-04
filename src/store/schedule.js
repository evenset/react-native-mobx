// @flow

import { observable, action, computed } from 'mobx';

// the url for fetching trips
const url = 'https://transit.land/api/v1/schedule_stop_pairs?operator_onestop_id=o-dpz-gotransit' +
            '&date=theDate&origin_departure_between=startTime,endTime&origin_onestop_id=' +
            's-dpz839kujp-unionstation%3Cun';

const parseScheduleStopPair = (pair): * => {
    const date = pair.service_start_date;
    const time = pair.origin_departure_time;
    const timezone = new Date().getTimezoneOffset() / 60;
    return {
        route: pair.route_onestop_id,
        key: pair.trip,
        time: new Date(date + 'T' + time + 'Z'),
        name: pair.trip_headsign,
    };
};

const parseRoute = (route): object => {
    return {
        id: route.onestop_id,
        color: '#' + route.tags.route_color,
        name: route.tags.route_long_name,
    };
};

class scheduleStore {
    @observable departures = [];
    @observable routes = new Map();
    @observable loadingRoutes = false;
    @observable loadingDepartures = false;
    @observable currentTime = new Date();
    @observable debug = []

    @action.bound refreshRoutes(): null {
        this.routes.clear();
        this.loadingRoutes = true;
        this.debug = [];
        fetch('https://transit.land/api/v1/routes?origin_onestop_id=s-dpz839kujp-unionstation%3Cun&operated_by=o-dpz-gotransit&vehicle_type=rail')
            .then((response): * =>{
                return response.json();
            })
            .then((rJSON): * => rJSON.routes.map(parseRoute))
            .then((routes): * => {
                routes.forEach((route): null => { this.routes.set(route.id, route); });
            })
            .finally((): null => this.loadingRoutes = false);
    }

    @action.bound refreshDepartures(): * {
        this.loadingDepartures = true;
        // assume the timezone is correct
        const dateString = this.currentTime.toISOString().substr(0, 10);
        const startTimeString = this.currentTime.toTimeString().substr(0, 8);
        const endTimeString = new Date(this.currentTime.getTime() + (1000 * 60 * 30)).toTimeString().substr(0, 8);
        const formattedUrl = url.replace(
            'theDate', dateString
        ).replace(
            'startTime', startTimeString
        ).replace(
            'endTime', endTimeString
        );
        fetch(formattedUrl)
            .then((response): * => {
                return response.json();
            })
            .then((rJSON): * => {
                return rJSON.schedule_stop_pairs.map(parseScheduleStopPair);
            })
            .then((pairs): * => {
                this.departures = pairs.sort((first, second): * =>
                    first.time.getTime() - second.time.getTime()
                );
            })
            .finally((): null => { this.loadingDepartures = false; });
    }

    @action.bound refresh(): *  {
        this.refreshDepartures();
        this.refreshRoutes();
    }

    @computed get nextDeparture(): * {
        if (this.departures.length) {
            return this.departures[0];
        }
    }

    @computed get millisUntilDeparture(): * {
        if (!this.nextDeparture) {
            return -1;
        }
        return Math.max(
            this.nextDeparture.time.getTime() -
            this.currentTime.getTime() +
            (this.currentTime.getTimezoneOffset() * 60 * 1000), 0);
    }

    @computed get departureData(): object {
        const results = [];
        this.routes.forEach((route) => {
            const tripsForRoute = this.departures
                .filter((departure): boolean => departure.route === route.id);
            tripsForRoute.forEach(
                ((trip): null => {
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

    @computed get loading(): * {
        return this.loadingDepartures || this.loadingRoutes;
    }

    timeUpdater = setInterval(() => { this.currentTime = new Date(); }, 100);
}

export const store = new scheduleStore();