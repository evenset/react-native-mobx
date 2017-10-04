// @flow

import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles';


function AppContainer(props: Object): * {
    return (
        <View style={styles.appContainer}>
            <Text style={styles.appHeader}>
                {'Toronto Union Station GO Train Departures'}
            </Text>
            <View style={styles.innerAppContainer}>
                {props.children}
            </View>
        </View>
    );
}
AppContainer.propTypes = {
    children: PropTypes.node,
};
AppContainer.defaultProps = {
    children: null,
};


export default AppContainer;
