// @flow

import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

import styles from '../../styles';


function Departure(props: Object): * {
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
Departure.propTypes = {
    data: PropTypes.shape({
        item: PropTypes.shape({
            name: PropTypes.string,
            time: PropTypes.string,
        }),
    }),
};
Departure.defaultProps = {
    data: { item: { color: '#FFFFFF', name: '', time: '' } },
};


export default Departure;
