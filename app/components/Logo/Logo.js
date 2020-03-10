import React, { Component } from 'react';
import { View, Text, Keyboard, Animated, Platform, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
    static propTypes = {
        tintColor: PropTypes.string,
    };

    constructor(props) {
        super(props);

        this.state = {
            containerImageWidth: new Animated.Value(styles.$largeContainerSize),
            imageWidth: new Animated.Value(styles.$largeImageSize),
        };
    }

    componentDidMount() {
        const name = Platform.OS === 'ios' ? 'Will' : 'Did';
        this.keyboardDidShowListener = Keyboard.addListener(
            `keyboard${name}Show`,
            this.keyboardWillShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            `keyboard${name}Hide`,
            this.keyboardWillHide,
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    };

    // keyboardWillShow = () => {
    //     const { containerImageWidth, imageWidth } = this.state;

    //     Animated.parallel([
    //         Animated.timing(containerImageWidth, {
    //             toValue: styles.$smallContainerSize,
    //             duration: ANIMATION_DURATION,
    //         }),
    
    //         Animated.timing(imageWidth, {
    //             toValue: styles.$smallImageSize,
    //             duration: ANIMATION_DURATION,
    //         }),
    //     ]).start();
    // };

    // keyboardWillHide = () => {
    //     const { containerImageWidth, imageWidth } = this.state;

    //     Animated.parallel([
    //         Animated.timing(containerImageWidth, {
    //             toValue: styles.$largeContainerSize,
    //             duration: ANIMATION_DURATION,
    //         }),
    
    //         Animated.timing(imageWidth, {
    //             toValue: styles.$largeImageSize,
    //             duration: ANIMATION_DURATION,
    //         }),
    //     ]).start();
    // };

    render() {
        const containerImageStyles = 
        [
            styles.containerImage,
            { 
                width: this.state.containerImageWidth, 
                height: this.state.containerImageWidth 
            },

        ];

        const imageStyles = [
            styles.logo,
            { width: this.state.imageWidth },
            this.props.tintColor ? { tintColor: this.props.tintColor } : null,
        ];
 
        return (
            <View style={styles.container}>
                <Animated.View style={containerImageStyles}>
                    {/* <Animated.Image 
                        resizeMode="contain" 
                        style={[StyleSheet.absoluteFill, containerImageStyles]} 
                        source={require('./images/background.png')}
                    /> */}
                    <Animated.Image
                        resizeMode="contain"
                        style={imageStyles}
                        source={require('./images/logon.png')}
                    />
                </Animated.View>
                    {/* <Text style={styles.text2}>Login</Text> */}
            </View>
        );
    }
}

export default Logo;