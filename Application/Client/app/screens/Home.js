// import React, { Component } from 'react';
// import { StatusBar, KeyboardAvoidingView } from 'react-native';
// import PropTypes from 'prop-types';

// import { Container } from '../components/Container';
// import { Logo } from '../components/Logo';
// import { InputWithButton } from '../components/TextInput';
// import { ClearButton } from '../components/Buttons';
// import { LastConverted } from '../components/Text';
// import { Header } from '../components/Header';
// import { Buttons } from '../components/Homebuttons';

// import { swapCurrency } from '../actions/currencies';

// const TEMP_BASE_CURRENCY = 'USD';
// const TEMP_QUOTE_CURRENCY = 'GBP';
// const TEMP_BASE_PRICE = '100';
// const TEMP_QUOTE_PRICE = '79.74';
// const TEMP_CONVERSION_RATE = 0.7974;
// const TEMP_CONVERSION_DATE = new Date();

// class Home extends Component {
//     static propTypes = {
//         navigation: PropTypes.object,
//     };

//     handlePressBaseCurrency = () => {
//         console.log('press base');
//         this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
//     };

//     handlePressQuoteCurrency = () => {
//         console.log('press quote');
//         this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
//     };

//     handleTextChange = (text) => {
//         console.log('change text', text);
//     };

//     handleSwapCurrency = () => {
//         // dispatch is used to pass an action to our Redux store
//         console.log(swapCurrency());
//     };

//     handleOptionsPress = () => {
//         console.log('handle options press');
//         this.props.navigation.navigate('Options');
//     }

//     render() {
//         return (
//             <Container>
//                 <StatusBar translucent={false} barStyle="light-content" />
//                 <Header 
//                     onPress={this.handleOptionsPress}
//                 />
//                 <KeyboardAvoidingView behavior="padding">
//                     <Logo />
//                     <InputWithButton
//                         buttonText={TEMP_BASE_CURRENCY}
//                         onPress={this.handlePressBaseCurrency}
//                         defaultValue={TEMP_BASE_PRICE}
//                         keyboardType="numeric"
//                         onChangeText={this.handleTextChange}
//                     />
//                     <InputWithButton
//                         buttonText={TEMP_QUOTE_CURRENCY}
//                         onPress={this.handlePressQuoteCurrency}
//                         editable={false}
//                         value={TEMP_QUOTE_PRICE}
//                     />
//                     <LastConverted
//                         base={TEMP_BASE_CURRENCY}
//                         quote={TEMP_QUOTE_CURRENCY}
//                         date={TEMP_CONVERSION_DATE}
//                         conversionRate={TEMP_CONVERSION_RATE}
//                     />
//                     <ClearButton
//                         text="Reverse Currencies"
//                         onPress={this.handleSwapCurrency}
//                     />
//                 </KeyboardAvoidingView>
//                 {/* <Buttons/> */}
//             </Container>
//         );
//     }
// }

// export default Home;









// Project Aergia

// import React, { Component } from 'react';
// import { StatusBar, KeyboardAvoidingView } from 'react-native';
// import PropTypes from 'prop-types';

// import { Container } from '../components/Container';
// import { Logo } from '../components/Logo';
// import { InputWithButton } from '../components/TextInput';
// import { ClearButton } from '../components/Buttons';
// import { LastConverted } from '../components/Text';
// import { Header } from '../components/Header';
// import { Buttons2 } from '../components/LoginButtons';

// const TEMP_BASE_CURRENCY = 'E-mail';
// const TEMP_QUOTE_CURRENCY = 'Password';
// const TEMP_BASE_PRICE = '000000000@coyote.csusb.edu';
// const TEMP_QUOTE_PRICE = '';
// const TEMP_CONVERSION_RATE = 0.7974;
// const TEMP_CONVERSION_DATE = new Date();

// class Home extends Component {
//     static propTypes = {
//         navigation: PropTypes.object,
//     };

//     handlePressBaseCurrency = () => {
//         console.log('press base');
//         this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
//     };

//     handlePressQuoteCurrency = () => {
//         console.log('press quote');
//         this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
//     };

//     handleTextChange = (text) => {
//         console.log('change text', text);
//     };

//     handleSwapCurrency = () => {
//         console.log('press swap currency');
//     };

//     handleOptionsPress = () => {
//         console.log('handle options press');
//     }

//     render() {
//         return (
//             <Container>
//                 <StatusBar translucent={false} barStyle="light-content" />
//                 <Header 
//                     onPress={this.handleOptionsPress}
//                 />
//                 <KeyboardAvoidingView behavior="padding">
//                 <Logo />
//                 <InputWithButton
//                     buttonText={TEMP_BASE_CURRENCY}
//                     onPress={this.handlePressBaseCurrency}
//                     // defaultValue={TEMP_BASE_PRICE}
//                     placeholder="000000000@coyote.csusb.edu"
//                     onChangeText={this.handleTextChange}
//                 />
//                 <InputWithButton
//                     buttonText={TEMP_QUOTE_CURRENCY}
//                     onPress={this.handlePressQuoteCurrency}
//                     onChangeText={this.handleTextChange}
//                     secureTextEntry
//                 />
//                 <ClearButton
//                     text="Forgot Password?"
//                     onPress={this.handleSwapCurrency}
//                 />
//                 <Buttons2 
//                     title1={"Log in"}
//                     title2={"Cancel"}
//                 />
//                 {/* <ClearButton
//                     text="Let's get physical!"
//                 /> */}
//                 </KeyboardAvoidingView>
//             </Container>
//         );
//     }
// }

// export default Home;





// Project Aergia 2.0

import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Buttons';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';
import { Buttons2 } from '../components/LoginButtons';

class Home extends Component {
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

    loginButtonPress = () => {
        console.log('handle login press');
        this.props.navigation.navigate('Login');
    }

    signUpButtonPress = () => {
        console.log('handle signup press');
        this.props.navigation.navigate('SignUp');
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

export default Home;