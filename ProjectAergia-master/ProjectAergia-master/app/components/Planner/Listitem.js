import propTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';


const Listitem = ({ text, onPress, selected, ...props }) => (
    <TouchableHighlight onPress={onPress} underlayColor={'#808284'}>
        <View style={styles.row}>
            <Text style={styles.text}> {text} </Text>
            {selected ? <Text> Selected</Text> : null}
        </View>
    </TouchableHighlight>
);





Listitem.propTypes = {
    text: propTypes.string,
    onPress: propTypes.func,
    selected: propTypes.bool,
};

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 16,

    },
    seperator: {
        marginLeft: 20,
        flex: 1, 
        height: StyleSheet.hairlineWidth,
    },
});
export default Listitem;
