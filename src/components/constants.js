// Constants shared between several components.
// @flow

import PropTypes from 'prop-types';


export const APP_NAME = 'Union GO Train Departures';
export const GO_TRANSIT_GREEN = '#00AB66';

export const NAVIGATION_PROP_TYPE = PropTypes.shape({
    navigate: PropTypes.func,
});

export const TRIPS_URL = 'https://transit.land/api/v1/schedule_stop_pairs?' +
                        'operator_onestop_id=o-dpz-gotransit&date=theDate' +
                        '&origin_departure_between=startTime,endTime&' +
                        'origin_onestop_id=s-dpz839kujp-unionstation%3Cun';
export const ROUTES_URL = 'https://transit.land/api/v1/routes?origin_onestop_id=' +
                          's-dpz839kujp-unionstation%3Cun&operated_by=o-dpz-gotransit&vehicle_type=rail';

export const TIME_WINDOW = 1000 * 60 * 30;
