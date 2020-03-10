// Project Aergia


import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
    $buttonBackgroundColorBase: '$white',
    $buttonBackgroundColorModifier: 0.1,


    container: {
        backgroundColor: '$lightGray',
        width: '90%',
        height: INPUT_HEIGHT,
        borderRadius: BORDER_RADIUS,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    containerDisabled: {
        backgroundColor: '$lightGray',
    },
    buttonContainer: {
        height: INPUT_HEIGHT,
        width: 113,
        // alignItems: 'center',
        // Aligns items vertically
        justifyContent: 'center',
        backgroundColor: '$schoolBlue',
        borderTopLeftRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS,
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 18,
        paddingHorizontal: 16,
        color: '$white',
    },
    input: {
        height: INPUT_HEIGHT,
        flex: 1,
        fontSize: 17,
        paddingHorizontal: 8,
        color: '$inputText',
        borderTopRightRadius: BORDER_RADIUS,
    },
    separator: {
        height: INPUT_HEIGHT,
        width: StyleSheet.hairlineWidth,
        backgroundColor: '$border',
    },
});