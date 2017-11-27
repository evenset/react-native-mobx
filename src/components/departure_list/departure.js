// @flow

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    departure: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 10,
        marginRight: 10,
    },
    departureText: {
        color: 'black',
    },
    departureTextTime: {
        fontWeight: 'bold',
        marginRight: 20,
    },
});


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
