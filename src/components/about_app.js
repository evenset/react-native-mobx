// @flow

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    aboutApp: {
        marginLeft: 10,
        marginRight: 10,
    },
});

function AboutApp(): * {
    return (
        <View style={styles.aboutApp}>
            <Text>
                {'This app was built by Evenset as a starting point for a project.'}
            </Text>
            <Text>
                {'Check out our website! evenset.com'}
            </Text>
        </View>
    );
}
AboutApp.navigationOptions = {
    title: 'About This App',
};


export default AboutApp;
