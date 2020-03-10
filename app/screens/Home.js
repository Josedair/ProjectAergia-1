import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { Buttons2 } from '../components/LoginButtons';

import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';

class Home extends Component {
    static propTypes = {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        amount: PropTypes.number,
        conversionRate: PropTypes.number,
        isFetching: PropTypes.bool,
        LastConvertedDate: PropTypes.object,
        primaryColor: PropTypes.string,
    };

    handleOptionsPress = () => 
    {
        console.log('handle options press');
        this.props.navigation.navigate('Options');
    }

    loginButtonPress = () => 
    {
        console.log('handle login press');
        this.props.navigation.navigate('Login');
    }

    signUpButtonPress = () => 
    {
        console.log('handle signup press');
        this.props.navigation.navigate('SignUp');
    }

    render() {
        return (
            <Container backgroundColor={this.props.primaryColor}>
                <StatusBar translucent={false} barStyle="light-content" />
                <Header 
                    onPress={this.handleOptionsPress}
                />
                <KeyboardAvoidingView behavior="padding">
                    <Logo />
                    <Buttons2 
                        title1={"Sign Up"}
                        title2={"Log in"}
                        onPress={this.signUpButtonPress}
                        onPress2={this.loginButtonPress}
                    />
                    {/* <ClearButton
                        text="Let's get physical!"
                    /> */}
                </KeyboardAvoidingView>
            </Container>
        );
    }
}

// It takes the redux state and maps it to the components' props.
// To use it, we pass it as the first parameter of connect.
// This connect function allows us to access components from our reducers
const mapStateToProps = (state) =>
{
    // state is our redux state
    const baseCurrency = state.currencies.baseCurrency;
    const quoteCurrency = state.currencies.quoteCurrency;
    // This will attempt to select anything on state.currencies.conversions related to our baseCurrency
    // We are able to pass a variable as a property on an object by using the brackets. We are interested in baseCurrency conversion
    const conversionSelector = state.currencies.conversions[baseCurrency] || {};
    const rates = conversionSelector.rates || {};
    // Returns an object. Anything returned in this object will be available to Home component
    // via this.props
    return {
        baseCurrency,
        quoteCurrency,
        amount: state.currencies.amount,
        // We have our rate information from our baseCurrency and we're interested in accessing that piece related to our quoteCurrency
        conversionRate: rates[quoteCurrency] || 0,
        isFetching: conversionSelector.isFetching,
        // We first check for existence of conversion date. If it exists, we create a new object based off of that. Otherwise, we say it's the current date
        LastConvertedDate: conversionSelector.date ? new Date(conversionSelector.date) : new Date(),
        primaryColor: state.theme.primaryColor,
    };
};

export default connect(mapStateToProps)(Home);