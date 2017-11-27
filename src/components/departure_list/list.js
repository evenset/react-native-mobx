// @flow

import React from 'react';
import { Button, SectionList, View } from 'react-native';
import { observer } from 'mobx-react';

import type { NAVIGATION_PROP_TYPE } from '../constants';
import Departure from './departure';
import Header from './header';
import styles from '../../styles';
import { store } from '../../store/schedule';


function renderHeader(data: Object): * {
    return <Header color={data.section.routeColor} title={data.section.title} />;
}


function renderDeparture(data: Object): * {
    return <Departure data={data} />;
}


class DepartureList extends React.Component<DepartureListPropTypes> {
    constructor(props: DepartureListPropTypes) {
        super(props);
        this.handleAboutClick = this.handleAboutClick.bind(this);
    }

    handleAboutClick: Function

    handleAboutClick() {
        this.props.navigation.navigate('AboutApp');
    }

    render(): View {
        return (
            <View style={styles.departureList}>
                <View style={styles.rowOfButtons}>
                    <Button
                        onPress={store.refresh}
                        title="Reload Departures"
                    />
                </View>
                <SectionList
                    renderItem={renderDeparture}
                    renderSectionHeader={renderHeader}
                    sections={store.departureData}
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
type DepartureListPropTypes = {
    navigation: NAVIGATION_PROP_TYPE,
};


export default observer(DepartureList);
