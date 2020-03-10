import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

import styles from './styles';

const Container = ({ children, backgroundColor }) => 
{
    const containerStyles = [styles.container];

    // If backgroundColor is being passed, we can pass an object to the styles array
    if (backgroundColor)
    {
        containerStyles.push({ backgroundColor });
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={containerStyles}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    );
};

Container.propTypes = {
    children: PropTypes.any,
    backgroundColor: PropTypes.string,
};

export default Container;