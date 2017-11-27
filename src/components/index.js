// @flow

import { StackNavigator } from 'react-navigation';
import { StyleSheet } from 'react-native';

import AboutApp from './about_app';
import { APP_NAME } from './constants';
import { GO_TRANSIT_GREEN } from './constants';
import MainScreen from './main_screen';

const styles = StyleSheet.create({
    appHeader: {
        backgroundColor: GO_TRANSIT_GREEN,
        marginBottom: 10,
    },
    appHeaderTitle: {
        color: 'white',
    },
});


const ReactNativeMobx = StackNavigator({
    // first screen will be the first "page" shown
    MainScreen: { screen: MainScreen },
    AboutApp: { screen: AboutApp },
}, {
    navigationOptions: {
        headerStyle: styles.appHeader,
        headerTitleStyle: styles.appHeaderTitle,
        title: APP_NAME,
    },
});


export default ReactNativeMobx;
