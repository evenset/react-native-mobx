// @flow

import React from 'react';
import { Text, View } from 'react-native';

import styles from '../../styles';


function Header(props: HeaderPropTypes): View {
    return (
        <View style={[styles.departureListHeader, { backgroundColor: props.color }]}>
            <Text style={styles.departureListHeaderText}>
                {props.title}
            </Text>
        </View>
    );
}
type HeaderPropTypes = {
    color: string,
    title: ?string,
};
Header.defaultProps = {
    color: 'dimgrey',
    title: '',
};


export default Header;
