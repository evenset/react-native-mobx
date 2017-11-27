// @flow

import React from 'react';

import type { NAVIGATION_PROP_TYPE } from './constants';
import DepartureList from './departure_list';


function MainScreen(props: MainScreenPropTypes): DepartureList {
    return (
        <DepartureList navigation={props.navigation} />
    );
}
type MainScreenPropTypes = {
    navigation: NAVIGATION_PROP_TYPE,
};
MainScreen.defaultProps = {
    navigation: {},
};


export default MainScreen;
