// @flow

import React from 'react';
import { Text, View } from 'react-native';

import styles from '../styles';


function Contents(): * {
    return (
        <View>
            <Text style={styles.welcome}>
                {'React Native MobX Starter Kit (September 2017)'}
            </Text>
            <Text style={styles.instructions}>
                {'This will do something eventually.'}
            </Text>
            <Text style={styles.instructions}>
                {'But for now it does nothing'}
            </Text>
        </View>
    );
}


export default Contents;
