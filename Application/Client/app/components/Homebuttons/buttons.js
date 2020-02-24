import React, { Component } from 'react';
import { View, Image, Text, Alert, AppRegistry, Button, TouchableOpacity } from 'react-native';

const Buttons = () => {


    <View style={{
        flex: 1,
        //flex row displays items in a row
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 50,

    }}>

        <View style={{
            //padding horizontal is the spacing in the horizontal space?
            paddingHorizontal: 10,
            //width is the size of the button pretty much
            width: "50%",

        }}>
            <Button onPress={() => {
                Alert.alert("Logging in")
                //onPress = {this:onPress}
            }}
                title="Log in"
                //this is close to the grey color the school uses
                color='#808284'
            >

            </Button>

        </View>

        <View style={{
            paddingHorizontal: 10,
            width: "50%",
        }}>
            <Button onPress={() => {
                Alert.alert("Logging in")
            }}
                title=" Sign up "
                //this i
                color='#006EC7'
            >

            </Button>
        </View>


    </View>
};

export default Buttons;