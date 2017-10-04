// @flow

import { StackNavigator } from 'react-navigation';

import AboutApp from './about_app';
import { APP_NAME } from './constants';
import MainScreen from './main_screen';
import styles from '../styles';


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
