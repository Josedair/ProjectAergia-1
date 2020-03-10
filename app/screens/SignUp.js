// import React, { Component } from 'react';
// import { StatusBar, KeyboardAvoidingView } from 'react-native';
// import PropTypes from 'prop-types';

// import { Container } from '../components/Container';
// import { Logo } from '../components/Logo';
// import { InputWithButton } from '../components/TextInput';
// import { ClearButton } from '../components/Buttons';
// import { Header } from '../components/Header';
// import { Buttons2 } from '../components/LoginButtons';

// const TEMP_BASE_CURRENCY = 'E-mail';
// const TEMP_QUOTE_CURRENCY = 'Password';
// const TEMP_SIGNUP = 'Re-Type Password';

// class SignUp extends Component {
//     static propTypes = {
//         navigation: PropTypes.object,
//     };

//     handleTextChange = (text) => {
//         console.log('change text', text);
//     };

//     handleSwapCurrency = () => {
//         console.log('press swap currency');
//     };

//     handleOptionsPress = () => {
//         console.log('handle options press');
//         this.props.navigation.navigate('Options');
//     }

//     cancelButtonPress = () => {
//         console.log('handle cancel press');
//         this.props.navigation.navigate('Home');
//     }

//     signUpButtonPress = () => {
//         console.log('handle logIn press');
//         alert("An email has been sent with a code.");
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
//                 <InputWithButton
//                     buttonText={TEMP_SIGNUP}
//                     onPress={this.handlePressQuoteCurrency}
//                     onChangeText={this.handleTextChange}
//                     secureTextEntry
//                 />
//                 {/* <ClearButton
//                     text="Forgot Password?"
//                     onPress={this.handleSwapCurrency}
//                 /> */}
//                 <Buttons2 
//                     title1={"Sign Up"}
//                     title2={"Cancel"}
//                     onPress2={this.cancelButtonPress}
//                     onPress={this.signUpPress}
//                 />
//                 </KeyboardAvoidingView>
//             </Container>
//         );
//     }
// }

// export default SignUp;





















import React, { Component, Fragment } from 'react';
import { StatusBar, KeyboardAvoidingView, View, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { CheckBox, rightIcon } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

import { Container, styles } from '../components/Container';
// import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { ClearButton } from '../components/Buttons';
import { Header } from '../components/Header';
import { Buttons2 } from '../components/LoginButtons';
import { FormButton, FormInput } from '../components/FormButton';
import ErrorMessage from '../components/ErrorMessage';

// This will allow us to verify the information
const validationSchema = Yup.object().shape
(
    {
        name: Yup.string()
            .label('Name')
            .required()
            .min(2, 'Must have at least 2 characters'),
        email: Yup.string()
            .label('Email')
            .email('Enter a valid email')
            // .required('Please enter a registered email'),
            .required(),
        password: Yup.string()
            .label('Password')
            .required()
            .min(3, 'Password must have at least 3 characters '),
        confirmPassword: Yup.string()
            .label('Confirm Password')
            .oneOf([Yup.ref('password')], 'Confirm Password must match Password')
            .required()
            .min(3, 'Password must have at least 3 characters '),
        check: Yup.boolean().oneOf([true], 'Please check the box')
    }
)

class SignUp extends Component {
    static propTypes = 
    {
        navigation: PropTypes.object,
    };

    state = {
        // This helps track the current icon being shown and visibility of password
        passwordVisibility: true,
        passwordIcon: `${ICON_PREFIX}-eye`,
        confirmPasswordVisibility: true,
        confirmPasswordIcon: `${ICON_PREFIX}-eye`
    };


    // onLogin = async () =>
    // {
    //     const { email, password } = this.state

    //     try
    //     {
    //         // Only allow navigation to next page as long as email
    //         // and password both have a value
    //         if (email.length > 0 && password.length > 0)
    //         {
    //             this.props.navigation.navigate('Month');
    //         }
    //     }
    //     catch (error)
    //     {
    //         alert(error);
    //     }
    // };

    // handleOptionsPress = () => 
    // {
    //     console.log('handle options press');
    //     this.props.navigation.navigate('Options');
    // };

    cancelButtonPress = () => 
    {
        console.log('handle cancel press');
        this.props.navigation.navigate('Home');
    };

    handleSubmit = values =>
    {
        if (values.name.length > 0 && values.email.length > 0 && values.password.length > 0 && values.confirmPassword.length > 0)
        {
            // if(values.email === 'test@test.com' && values.password === '123')
            if (values.email > 0)
            {
                this.props.navigation.navigate('Login');
            }
            else
            {
                alert("Please complete the form");
            }
        }
    }

    handlePasswordVisibility = () =>
    {
        this.setState(previousState => 
        (
            {
                passwordIcon: previousState.passwordIcon === `${ICON_PREFIX}-eye` ? `${ICON_PREFIX}-eye-off` : `${ICON_PREFIX}-eye`,
                passwordVisibility: !previousState.passwordVisibility
            }
        ))
    };

    handleConfirmPasswordVisibility = () =>
    {
        this.setState(previousState => 
        (
            {
                confirmPasswordIcon: previousState.confirmPasswordIcon === `${ICON_PREFIX}-eye` ? `${ICON_PREFIX}-eye-off` : `${ICON_PREFIX}-eye`,
                confirmPasswordVisibility: !previousState.confirmPasswordVisibility
            }
        ))
    };


    render() {
        const { passwordVisibility, passwordIcon, confirmPasswordVisibility, confirmPasswordIcon } = this.state;

        return (
            <Container style={styles.container}>

                <KeyboardAvoidingView behavior="padding">

                <Formik
                    initialValues={{ email: '', password: '', name: '', confirmPassword: '', check: false }}
                    onSubmit={values => {this.handleSubmit(values)}}
                    validationSchema={validationSchema}
                >
                
                {({ handleChange, values, handleSubmit, errors, isValid, isSubmitting, touched, handleBlur, setFieldValue }) => (
                    <Fragment>

                    <StatusBar translucent={false} barStyle="light-content" />

                    {/* <Header 
                        onPress={this.handleOptionsPress}
                    /> */}

                    <Logo />

                    <FormInput
                        name='name'
                        value={values.name}
                        placeholder='Enter your name'
                        // autoCapitalize='none'
                        onChangeText={handleChange('name')}
                        iconName={`${ICON_PREFIX}-contact`}
                        iconColor='#2C384A'
                        onBlur={handleBlur('name')}
                    />
                    <ErrorMessage errorValue={touched.name && errors.name} />

                    {/* E-mail input */}
                    <FormInput
                        name='email'
                        value={values.email}
                        placeholder='Enter email'
                        autoCapitalize='none'
                        keyboardType='email-address'
                        onChangeText={handleChange('email')}
                        iconName={`${ICON_PREFIX}-mail`}
                        iconColor='#2C384A'
                        onBlur={handleBlur('email')}
                    />
                    <ErrorMessage errorValue={touched.email && errors.email} />

                    {/* Password input */}
                    <FormInput
                        name='password'
                        value={values.password}
                        placeholder='Enter password'
                        autoCapitalize='none'
                        secureTextEntry={passwordVisibility}
                        rightIcon=
                        {
                            <TouchableOpacity onPress={this.handlePasswordVisibility}>
                                <Ionicons name={passwordIcon} size={28} color='grey' />
                            </TouchableOpacity>
                        }
                        onChangeText={handleChange('password')}
                        iconName={`${ICON_PREFIX}-lock`}
                        iconColor='#2C384A'
                        onBlur={handleBlur('password')}
                    />
                    <ErrorMessage errorValue={touched.password && errors.password} />

                    <FormInput
                        name='confirmPassword'
                        value={values.confirmPassword}
                        placeholder='Confirm password'
                        autoCapitalize='none'
                        secureTextEntry={confirmPasswordVisibility}
                        rightIcon=
                        {
                            <TouchableOpacity onPress={this.handleConfirmPasswordVisibility}>
                                <Ionicons name={confirmPasswordIcon} size={28} color='grey' />
                            </TouchableOpacity>
                        }
                        onChangeText={handleChange('confirmPassword')}
                        iconName={`${ICON_PREFIX}-lock`}
                        iconColor='#2C384A'
                        onBlur={handleBlur('confirmPassword')}
                    />
                    <ErrorMessage errorValue={touched.confirmPassword && errors.confirmPassword} />

                    <CheckBox
                        containerStyle={styles.checkBoxContainer}
                        checkedIcon='check-box'
                        iconType='material'
                        uncheckedIcon='check-box-outline-blank'
                        title='I agree'
                        checkedTitle='You have agreed to sell us your soul'
                        checked={values.check}
                        // onPress={() => setFieldValue('check', values.check)}
                        onPress={() => setFieldValue('check', true)}
                    />

                    <View>
                        <FormButton style={styles.buttonContainer}
                            buttonType='outline'
                            onPress={handleSubmit}
                            title='SIGN UP'
                            buttonColor='#006EC7'
                            disabled={!isValid || isSubmitting}
                            loading={isSubmitting}
                        />
                    </View>

                    <View style={{marginTop: 20}}>
                        <FormButton
                            buttonType='outline'
                            onPress={this.cancelButtonPress}
                            title='CANCEL'
                            buttonColor='red'
                        />
                    </View>

                    {/* <Buttons2 
                        title1={"Sign Up"}
                        title2={"Cancel"}
                        onPress2={this.cancelButtonPress}
                        onPress={handleSubmit}
                    /> */}

                    </Fragment>
                )}

                </Formik>


                </KeyboardAvoidingView>  

            </Container>

        );
        
    }
}

// const styles = StyleSheet.create
// (
//     {
//         container:
//         {
//             flex: 1,
//             backgroundColor: '#fff',
//             width: "100%",
//             height: "100%"
//         },
//         buttonContainer:
//         {
//             margin: 25,
//             width: "90%"
//         },
//     }
// );

export default SignUp;