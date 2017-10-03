// @flow

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View } from 'react-native';

import styles from '../styles';


function AppContainer(props: Object): * {
    return (
        <View style={styles.container}>
            {props.children}
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
