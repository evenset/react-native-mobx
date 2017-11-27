// @flow

import React from 'react';
import { Text, View } from 'react-native';

import styles from '../../styles';


function Departure(props: DeparturePropTypes): View {
    const data: Object = props.data.item;

    return (
        <View style={styles.departure}>
            <Text style={[styles.departureText, styles.departureTextTime]}>
                {data.time}
            </Text>
            <Text style={styles.departureText}>
                {data.name}
            </Text>
        </View>
    );
}

type DeparturePropTypes = {
    data: {
        item: {
            name: string,
            time: string,
        },
    }
}

Departure.defaultProps = {
    data: { item: { color: '#FFFFFF', name: '', time: '' } },
};


export default Departure;
