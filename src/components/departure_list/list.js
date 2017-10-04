// @flow

import React from 'react';
import { Button, SectionList, View } from 'react-native';

import { NAVIGATION_PROP_TYPE } from '../constants';
import Departure from './departure';
import Header from './header';
import styles from '../../styles';


// NOTE: this is temporary data until MobX is hooked up
const SECTIONS = [
    {
        data: [
            { key: 'something', time: '12:34', name: 'Union 12:34 - Georgetown 13:33' },
            { key: 'somethign', time: '12:34', name: 'Union 12:34 - Georgetown 13:33' },
        ],
        routeColor: '#0000BB',
        title: 'Kitchener',
    },
    {
        data: [
            { key: 'somethgin', time: '12:34', name: 'Union 12:34 - Milton 13:33' },
            { key: 'sometghin', time: '12:34', name: 'Union 12:34 - Milton 13:33' },
        ],
        routeColor: '#FF0000',
        title: 'Milton',
    },
];


function renderHeader(data: Object): * {
    return <Header color={data.section.routeColor} title={data.section.title} />;
}


function renderDeparture(data: Object): * {
    return <Departure data={data} />;
}


class DepartureList extends React.Component {
    constructor(props: Object) {
        super(props);
        this.handleAboutClick = this.handleAboutClick.bind(this);
        this.handleReloadDepartures = this.handleReloadDepartures.bind(this);
    }

    handleAboutClick() {
        this.props.navigation.navigate('AboutApp');
    }

    handleReloadDepartures() {
        // TODO
    }

    render(): * {
        return (
            <View style={styles.departureList}>
                <View style={styles.rowOfButtons}>
                    <Button
                        onPress={this.handleReloadDepartures}
                        title="Reload Departures"
                    />
                </View>
                <SectionList
                    renderItem={renderDeparture}
                    renderSectionHeader={renderHeader}
                    sections={SECTIONS}
                />
                <View style={[styles.rowOfButtons, styles.rowOfButtonsWithMargins]}>
                    <Button
                        onPress={this.handleAboutClick}
                        title="About App"
                    />
                </View>
            </View>
        );
    }
}
DepartureList.propTypes = {
    navigation: NAVIGATION_PROP_TYPE,
};
DepartureList.defaultProps = {
    navigation: {},
};


export default DepartureList;
