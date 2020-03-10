import propTypes from 'prop-types';
import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from './styles';


const ListItem = ({ text, onPress, selected, data, ...props }) => (
    <TouchableHighlight onPress={onPress} underlayColor={'#0B1'}>
        <View style={styles.row}>
            <Text style={styles.text}> {text}  </Text>
            {selected ? <Text> Selected</Text> : null}
        </View>
        
    </TouchableHighlight>
);


ListItem.propTypes = {
    text: propTypes.string,
    onPress: propTypes.func,
    selected: propTypes.bool,
    data: propTypes.string,
};

export default ListItem;