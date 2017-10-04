// @flow

import React from 'react';
import { Button, SectionList, View, Text } from 'react-native';
import { observer } from 'mobx-react';
import Departure from './departure';
import Header from './header';
import styles from '../../styles';
import { store } from '../../store/schedule.js';


// NOTE: this is temporary data until MobX is hooked up
// const SECTIONS = [
//     {
//         data: [
//             { key: 'something', time: '12:34', name: 'Union 12:34 - Georgetown 13:33' },
//             { key: 'somethign', time: '12:34', name: 'Union 12:34 - Georgetown 13:33' },
//         ],
//         routeColor: '#0000BB',
//         title: 'Kitchener',
//     },
//     {
//         data: [
//             { key: 'somethgin', time: '12:34', name: 'Union 12:34 - Milton 13:33' },
//             { key: 'sometghin', time: '12:34', name: 'Union 12:34 - Milton 13:33' },
//         ],
//         routeColor: '#FF0000',
//         title: 'Milton',
//     },
// ];


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
