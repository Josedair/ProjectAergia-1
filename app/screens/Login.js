// import React, { Component } from 'react';
// import { StatusBar, KeyboardAvoidingView } from 'react-native';
// import PropTypes from 'prop-types';
// import { Ionicons } from '@expo/vector-icons';

// import { Container } from '../components/Container';
// import { Logo } from '../components/Logo';
// import { InputWithButton } from '../components/TextInput';
// import { ClearButton } from '../components/Buttons';
// import { Header } from '../components/Header';
// import { Buttons2 } from '../components/LoginButtons';

// const TEMP_BASE_CURRENCY = 'E-mail';
// const TEMP_QUOTE_CURRENCY = 'Password';
// const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
// const ICON_COLOR = '#868686';
// const ICON_SIZE = 23;

// class Login extends Component {
//     static propTypes = 
//     {
//         navigation: PropTypes.object,
//     };

//     state = 
//     {
//         email: '',
//         password: '',
//     }

//     handleEmail = (text) => 
//     {
//         this.setState({ email: text })
//     }

//     handlePassword = (text) => 
//     {
//         this.setState({ password: text })
//     }

//     handleTextChange = (text) => 
//     {
//         console.log('change text', text);
//     };

//     handleForgotPassword = () => 
//     {
//         console.log('press forgot password');
//     };

//     handleOptionsPress = () => 
//     {
//         console.log('handle options press');
//         this.props.navigation.navigate('Options');
//     }

//     cancelButtonPress = () => 
//     {
//         console.log('handle cancel press');
//         this.props.navigation.navigate('Home');
//     }

//     logInButtonPress = (email, password) => {
//         console.log('handle logIn press');

//         if(email === 'test@test.com' && password === '123')
//         {
//             this.props.navigation.navigate('Month');
//         }
//         else
//         {
//             alert("Email or password don't match");
//         }
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

//                 {/* E-mail input */}
//                 <InputWithButton
//                     buttonText={TEMP_BASE_CURRENCY}
//                     onPress={this.handlePressBaseCurrency}
//                     placeholder="000000000@coyote.csusb.edu"
//                     // onChangeText={this.handleTextChange}
//                     // value={this.state.email}
//                     // onSubmitEditing
//                     onChangeText={this.handleEmail}
//                     autoCapitalize='none'
//                     keyboardType='email-address'
//     //                 leftIcon={<Ionicons name={`${ICON_PREFIX}-arrow-forward`}  size={28} color={'#FFF'} />}

//     // //   leftIconContainerStyle={styles.iconStyle}
                    
//                 />

//                 {/* Password input */}
//                 <InputWithButton
//                     buttonText={TEMP_QUOTE_CURRENCY}
//                     onPress={this.handlePressQuoteCurrency}
//                     // onChangeText={this.handleTextChange}
//                     secureTextEntry
//                     // value={this.state.password}
//                     autoCapitalize='none'
//                     onChangeText={this.handlePassword}
//                 />

//                 <ClearButton
//                     text="Forgot Password?"
//                     onPress={this.handleForgotPassword}
//                 />

//                 <Buttons2 
//                     title1={"Log in"}
//                     title2={"Cancel"}
//                     onPress2={this.cancelButtonPress}
//                     onPress={() => this.logInButtonPress(this.state.email, this.state.password)}
//                 />

//                 </KeyboardAvoidingView>

//             </Container>
//         );
//     }
// }

// export default Login;







import React, { Component, Fragment } from 'react';
import { StatusBar, KeyboardAvoidingView, View, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Ionicons } from '@expo/vector-icons';
import { rightIcon, CheckBox } from 'react-native-elements';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

import { Container, styles } from '../components/Container';
import { Logo } from '../components/Logo';
import { ClearButton } from '../components/Buttons';
// import { Header } from '../components/Header';
import { Buttons2 } from '../components/LoginButtons';
import { FormButton, FormInput } from '../components/FormButton';
import ErrorMessage from '../components/ErrorMessage';

// This will allow us to verify the information
const validationSchema = Yup.object().shape
(
    {
        email: Yup.string()
            .label('Email')
            .email('Enter a valid email')
            .required('Please enter a registered email'),

        password: Yup.string()
            .label('Password')
            .required()
            .min(3, 'Password must have at least 3 characters '),
        // check: Yup.boolean().oneOf([true], 'Please check the box')
    }
)

class Login extends Component {
    static propTypes = 
    {
        navigation: PropTypes.object,
    };

    state = {
        // This helps track the current icon being shown and visibility of password
        passwordVisibility: true,
        rightIcon: `${ICON_PREFIX}-eye`
    };

    handlePasswordVisibility = () =>
    {
        this.setState(previousState => 
        (
            {
                rightIcon: previousState.rightIcon === `${ICON_PREFIX}-eye` ? `${ICON_PREFIX}-eye-off` : `${ICON_PREFIX}-eye`,
                passwordVisibility: !previousState.passwordVisibility
            }
        ))
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

    handleForgotPassword = () => 
    {
        console.log('press forgot password');
    };

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

    // logInButtonPress = (email, password) => 
    // {
    //     console.log('handle logIn press');

    //     if(email === 'test@test.com' && password === '123')
    //     {
    //         this.props.navigation.navigate('Month');
    //     }
    //     else
    //     {
    //         alert("Email or password don't match");
    //     }
    // };

    handleSubmit = values =>
    {
        if (values.email.length > 0 && values.password.length > 0)
        {
            if(values.email === 'test@test.com' && values.password === '123')
            {
                this.props.navigation.navigate('Month');
            }
            else
            {
                alert("Email or password don't match");
            }
        }
    }



    render() {
        // const { email, password } = this.state;
        const { passwordVisibility, rightIcon } = this.state

        return (
            <Container>

                <KeyboardAvoidingView behavior="padding">

                <Formik
                    initialValues={{ email: '', password: '', check: false }}
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
                                <Ionicons name={rightIcon} size={28} color='grey' />
                            </TouchableOpacity>
                        }
                        onChangeText={handleChange('password')}
                        iconName={`${ICON_PREFIX}-lock`}
                        iconColor='#2C384A'
                        onBlur={handleBlur('password')}
                    />
                    <ErrorMessage errorValue={touched.password && errors.password} />

                    <CheckBox
                        containerStyle={styles.checkBoxContainer}
                        checkedIcon='check-box'
                        iconType='material'
                        uncheckedIcon='check-box-outline-blank'
                        title='Remember me'
                        checkedTitle='You will not be forgotten, my child'
                        checked={values.check}
                        onPress={() => setFieldValue('check', !values.check)}
                    />

                    <ClearButton
                        text="Forgot Password?"
                        onPress={this.handleForgotPassword}
                    />

                    <View>
                        <FormButton style={styles.buttonContainer}
                            buttonType='outline'
                            onPress={handleSubmit}
                            title='LOG IN'
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
                        title1={"Log in"}
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
//             backgroundColor: '#fff'
//         },
//         buttonContainer:
//         {
//             margin: 25,
//             flex: 1,
//             width: "90%"
//         },
//         inputContainer:
//         {
//             flex: 1
//         }
//     }
// );

export default Login;














// import React, { Component, Fragment } from 'react'
// import { StyleSheet, SafeAreaView, View, TouchableOpacity } from 'react-native'
// import { Button } from 'react-native-elements'
// import { Ionicons } from '@expo/vector-icons'
// import { Formik } from 'formik'
// import * as Yup from 'yup'
// // import { HideWithKeyboard } from 'react-native-hide-with-keyboard'
// import { FormButton, FormInput } from '../components/FormButton';
// import ErrorMessage from '../components/ErrorMessage'
// // import AppLogo from '../components/AppLogo'

// const validationSchema = Yup.object().shape({
//   email: Yup.string()
//     .label('Email')
//     .email('Enter a valid email')
//     .required('Please enter a registered email'),
//   password: Yup.string()
//     .label('Password')
//     .required()
//     .min(4, 'Password must have more than 4 characters ')
// })

// export default class Login extends Component {
//   state = {
//     passwordVisibility: true,
//     rightIcon: 'ios-eye'
//   }

//   goToSignup = () => this.props.navigation.navigate('Signup')

//   handleSubmit = values => {
//     if (values.email.length > 0 && values.password.length > 0) {
//       setTimeout(() => {
//         this.props.navigation.navigate('App')
//       }, 3000)
//     }
//   }

//   handlePasswordVisibility = () => {
//     this.setState(prevState => ({
//       rightIcon: prevState.rightIcon === 'ios-eye' ? 'ios-eye-off' : 'ios-eye',
//       passwordVisibility: !prevState.passwordVisibility
//     }))
//   }

//   render() {
//     const { passwordVisibility, rightIcon } = this.state
//     return (
//       <SafeAreaView style={styles.container}>
//         {/* <HideWithKeyboard style={styles.logoContainer}>
//           <AppLogo />
//         </HideWithKeyboard> */}
//         <Formik
//           initialValues={{ email: '', password: '' }}
//           onSubmit={values => {
//             this.handleSubmit(values)
//           }}
//           validationSchema={validationSchema}>
//           {({
//             handleChange,
//             values,
//             handleSubmit,
//             errors,
//             isValid,
//             touched,
//             handleBlur,
//             isSubmitting
//           }) => (
//             <Fragment>
//               <FormInput
//                 name='email'
//                 value={values.email}
//                 onChangeText={handleChange('email')}
//                 placeholder='Enter email'
//                 autoCapitalize='none'
//                 iconName='ios-mail'
//                 iconColor='#2C384A'
//                 onBlur={handleBlur('email')}
//               />
//               <ErrorMessage errorValue={touched.email && errors.email} />
//               <FormInput
//                 name='password'
//                 value={values.password}
//                 onChangeText={handleChange('password')}
//                 placeholder='Enter password'
//                 secureTextEntry={passwordVisibility}
//                 iconName='ios-lock'
//                 iconColor='#2C384A'
//                 onBlur={handleBlur('password')}
//                 rightIcon={
//                   <TouchableOpacity onPress={this.handlePasswordVisibility}>
//                     <Ionicons name={rightIcon} size={28} color='grey' />
//                   </TouchableOpacity>
//                 }
//               />
//               <ErrorMessage errorValue={touched.password && errors.password} />
//               <View style={styles.buttonContainer}>
//                 <FormButton
//                   buttonType='outline'
//                   onPress={handleSubmit}
//                   title='LOGIN'
//                   buttonColor='#039BE5'
//                   disabled={!isValid || isSubmitting}
//                   loading={isSubmitting}
//                 />
//               </View>
//             </Fragment>
//           )}
//         </Formik>
//         <Button
//           title="Don't have an account? Sign Up"
//           onPress={this.goToSignup}
//           titleStyle={{
//             color: '#F57C00'
//           }}
//           type='clear'
//         />
//       </SafeAreaView>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     marginTop: 50
//   },
//   logoContainer: {
//     marginBottom: 15,
//     alignItems: 'center'
//   },
//   buttonContainer: {
//     margin: 25
//   }
// })
