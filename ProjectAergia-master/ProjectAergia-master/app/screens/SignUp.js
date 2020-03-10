import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { Header } from '../components/Header';
import { Buttons2 } from '../components/LoginButtons';

const TEMP_BASE_CURRENCY = 'E-mail';
const TEMP_QUOTE_CURRENCY = 'Password';
const TEMP_SIGNUP = 'Re-Type Password';

class SignUp extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    };

    handleTextChange = (text) => {
        console.log('change text', text);
    };

    handleSwapCurrency = () => {
        console.log('press swap currency');
    };

    handleOptionsPress = () => {
        console.log('handle options press');
        this.props.navigation.navigate('Options');
    }

    cancelButtonPress = () => {
        console.log('handle cancel press');
        this.props.navigation.navigate('Home');
    }

    signUpButtonPress = () => {
        console.log('handle logIn press');
        alert("An email has been sent with a code.");
    }



    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Header 
                    onPress={this.handleOptionsPress}
                />
                <KeyboardAvoidingView behavior="padding">
                <Logo />
                <InputWithButton
                    buttonText={TEMP_BASE_CURRENCY}
                    onPress={this.handlePressBaseCurrency}
                    // defaultValue={TEMP_BASE_PRICE}
                    placeholder="000000000@coyote.csusb.edu"
                    onChangeText={this.handleTextChange}
                />
                <InputWithButton
                    buttonText={TEMP_QUOTE_CURRENCY}
                    onPress={this.handlePressQuoteCurrency}
                    onChangeText={this.handleTextChange}
                    secureTextEntry
                />
                <InputWithButton
                    buttonText={TEMP_SIGNUP}
                    onPress={this.handlePressQuoteCurrency}
                    onChangeText={this.handleTextChange}
                    secureTextEntry
                />
                {/* <ClearButton
                    text="Forgot Password?"
                    onPress={this.handleSwapCurrency}
                /> */}
                <Buttons2 
                    title1={"Sign Up"}
                    title2={"Cancel"}
                    onPress2={this.cancelButtonPress}
                    onPress={this.signUpPress}
                />
                </KeyboardAvoidingView>
            </Container>
        );
    }
}

export default SignUp;