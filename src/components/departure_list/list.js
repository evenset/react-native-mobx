// @flow

import React from 'react';
import { Button, SectionList, View } from 'react-native';
import { observer } from 'mobx-react';
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

function DepartureList(): * {
    return (
        <View style={styles.departureList}>
            <Button
                style={styles.reloadDepartures}
                title="Reload Departures"
                onPress={store.refresh}
            />
            <SectionList
                renderItem={renderDeparture}
                renderSectionHeader={renderHeader}
                sections={store.departureData}
            />
        </View>
    );
}


export default observer(DepartureList);
