// @flow

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    departureListHeader: {
        alignItems: 'center',
        flex: 1,
        height: 50,
        justifyContent: 'center',
        marginBottom: 5,
        marginTop: 20,
    },
    departureListHeaderText: {
        color: 'white',
        fontSize: 24,
    },
});


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
