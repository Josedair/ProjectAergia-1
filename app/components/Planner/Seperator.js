import React from 'react';
import { View, StyleSheet } from 'react-native';

const Seperator = () => <View style={styles.seperator} />;


const styles = StyleSheet.create({
    
    seperator: {
        marginLeft: 20,
        flex: 1,
        backgroundColor: '#808284',
        height: StyleSheet.hairlineWidth,
    },
});
export default Seperator;