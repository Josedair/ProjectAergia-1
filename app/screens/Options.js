// Project Aergia


import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Platform api is used for when you want something specific to a platform
// In this case, it's the icons for both iPhone and Android devices
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connectAlert } from '../components/Alert';

import { ListItem, Separator } from '../components/List';

// md is the prefix for the Android icons in the Ionicons package
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component 
{
    // We want to let this component know about our navigation prop.
    // This way we can navigate between screens.
    static propTypes =
    {
        navigation: PropTypes.object,
        // This property is a function that we can call when an error occurs
        alertWithType: PropTypes.func,
    };

    // This will help us change to a different screen when we press
    // the Themes butt
    handleThemesPress = () => 
    {
        console.log('press themes');
        // This command allows us to navigate to the determined screen
        // that is given within the parantheses. It must align with the screens
        // that we have in the routes.js file in the StackNavigator
        this.props.navigation.navigate('Themes');
    };

    handleSitePress = () => 
    {
        console.log('press site');
        // Linking allows us to open other applications/webpages from our application
        // Catch allows us to catch any errors that may occur with trying to open the URL. Such as a malformed url
        // and the app doesn't know how to handle it. Alert is a function that allows us to alert an error.
        Linking.openURL('https://www.tacobell.com').catch(() => alert('An error occurred.'));

        // The first parameter to AlertWithType will specify what type error we should display in. It gives it a red error occured kind of thing
        // The second parameter will be a title to be rendered
        // Third parameter will be a message that gives a bit more context to the error
        // Linking.openURL('https://youtu.be/dQw4w9WgXcQ').catch(() => this.props.alertWithType('error', 'Sorry!', "This website can't be opened right now."));
    };

    // This will help us change to a different screen when we press
    // the Themes butt
    handleAccountPress = () => 
    {
        console.log('press account');
        // This command allows us to navigate to the determined screen
        // that is given within the parantheses. It must align with the screens
        // that we have in the routes.js file in the StackNavigator
        this.props.navigation.navigate('Account');
    };

    render() 
    {
        return (
            <ScrollView>
                <StatusBar translucent={false} barStyle="default" />
                <ListItem 
                    text="Themes"
                    onPress={this.handleThemesPress}
                    customIcon=
                    {
                        <Ionicons 
                            name={`${ICON_PREFIX}-arrow-forward`} 
                            color={ICON_COLOR}
                            size={ICON_SIZE} 
                        />
                    }
                />
                <Separator />
                <ListItem 
                    text="Tacos!"
                    onPress={this.handleSitePress}
                    customIcon=
                    {
                        <Ionicons
                            name={`${ICON_PREFIX}-link`}
                            color={ICON_COLOR}
                            size={ICON_SIZE}
                        />
                    }
                />
                <Separator />
                <ListItem 
                    text="Account"
                    onPress={this.handleAccountPress}
                    customIcon=
                    {
                        <Ionicons
                            name={`${ICON_PREFIX}-person`}
                            color={ICON_COLOR}
                            size={ICON_SIZE}
                        />
                    }
                />
                <Separator />
            </ScrollView>
        )
    }
}

export default connectAlert(Options);