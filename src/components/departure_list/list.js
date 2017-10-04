// @flow

import React from 'react';
import { Button, SectionList, View } from 'react-native';
import { observer } from 'mobx-react';

import { NAVIGATION_PROP_TYPE } from '../constants';
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


class DepartureList extends React.Component {
    constructor(props: Object) {
        super(props);
        this.handleAboutClick = this.handleAboutClick.bind(this);
    }

    handleAboutClick() {
        this.props.navigation.navigate('AboutApp');
    }

    render(): * {
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
DepartureList.propTypes = {
    navigation: NAVIGATION_PROP_TYPE,
};
DepartureList.defaultProps = {
    navigation: {},
};


export default observer(DepartureList);
