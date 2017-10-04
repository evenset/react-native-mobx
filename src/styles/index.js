// @flow

import { StyleSheet } from 'react-native';


const styles: StyleSheet = StyleSheet.create({
    appHeader: {
        backgroundColor: '#00AB66',
        color: 'white',
        fontSize: 32,
        height: 50,
        marginBottom: 10,
        textAlign: 'center',
        width: '100%',
    },
    appContainer: {
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flex: 1,
        justifyContent: 'space-between',
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
        width: '100%',
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
    innerAppContainer: {
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flex: 1,
        width: '100%',
    },
    reloadDepartures: {
        width: 'unset',
    },
});


export default styles;
