// @flow

import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

import styles from '../../styles';


function Header(props: Object): * {
    return (
        <View style={[styles.departureListHeader, { backgroundColor: props.color }]}>
            <Text style={styles.departureListHeaderText}>
                {props.title}
            </Text>
        </View>
    );
}
Header.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string.isRequired,
};
Header.defaultProps = {
    color: 'dimgrey',
    title: '',
};


export default Header;
