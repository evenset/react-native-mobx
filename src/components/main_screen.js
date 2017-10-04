// @flow

import React from 'react';

import { NAVIGATION_PROP_TYPE } from './constants';
import DepartureList from './departure_list';


function MainScreen(props: Object): * {
    return (
        <DepartureList navigation={props.navigation} />
    );
}
MainScreen.propTypes = {
    navigation: NAVIGATION_PROP_TYPE,
};
MainScreen.defaultProps = {
    navigation: {},
};


export default MainScreen;
