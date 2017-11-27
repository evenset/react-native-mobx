// @flow

import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles';


function AboutApp(): View {
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
