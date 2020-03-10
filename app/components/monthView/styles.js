import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet, Dimensions } from 'react-native';

const entireScreenWidth = Dimensions.get('window').width;
// EStyleSheet.build({$rem: entireScreenWidth / 380});

export default EStyleSheet.create({
    $rem: entireScreenWidth / 380,

    row: {
        paddingHorizontal: 12,
        //paddingVertical: 49,
        flexDirection: 'column',
        justifyContent: 'space-between',
        //alignItems: 'flex-start',
        backgroundColor: 'white',
        //flexWrap: 'wrap',
        //margin: 1,
        borderRightWidth: StyleSheet.hairlineWidth,
        width: '55rem',
        height: '123rem',
    },
    text: {
        fontSize: '15rem',
        // fontSize: 15,
        marginLeft: -13,
        // alignItems: 'flex-end',
        //marginBottom: -100,

    },
    seperator: {
        
        flex: 1,
        height: StyleSheet.hairlineWidth,
        width: StyleSheet.hairlineWidth,
    },
    separator: {
        //marginLeft: 20,
        flex: 1,
        backgroundColor: '#808284',
        height: 0.5,
        //margin: 1,
    },
});