// @flow

import { StyleSheet } from 'react-native';

import { GO_TRANSIT_GREEN } from '../components/constants';


const styles: StyleSheet = StyleSheet.create({
    aboutApp: {
        marginLeft: 10,
        marginRight: 10,
    },
    appHeader: {
        backgroundColor: GO_TRANSIT_GREEN,
        marginBottom: 10,
    },
    appHeaderTitle: {
        color: 'white',
    },
    departure: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 10,
        marginRight: 10,
    },
    departureText: {
        color: 'black',
    },
    departureTextTime: {
        fontWeight: 'bold',
        marginRight: 20,
    },
    departureList: {
        flex: 1,
    },
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
    rowOfButtonsWithMargins: {
        marginBottom: 20,
        marginTop: 10,
    },
    rowOfButtons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginLeft: 10,
        marginRight: 10,
    },
});


export default styles;
