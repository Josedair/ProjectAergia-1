import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Image, Text, Alert, AppRegistry, TouchableOpacity, Button } from 'react-native';
// import { Button } from 'react-native-elements';



const Buttons2 = ({
    onPress,
    onPress2,
    title1,
    title2,
    buttonType,
    buttonColor,
    ...props
}) => {

    return (

        <View style=
        {
            {
                // flex: 1,
                //flex row displays items in a row
                flexDirection: 'row',
                // marginHorizontal: 20,
                marginTop: 30,
            }
        }
        >
            <View 
                style=
                {
                    {
                        //padding horizontal is the spacing in the horizontal space?
                        paddingHorizontal: 10,
                        //width is the size of the button pretty much
                        // width: "50%",
                        width: 175,
                        // marginTop: 150,
                    }
                }
            >
                <Button //this is the log in button
                    onPress={onPress}
                    //onPress = {this:onPress}

                    title={title1}
                    //this is close to the grey color the school uses
                    color='#006EC7'
                />
                {/* </Button> */}

            </View>

            <View style={{
                paddingHorizontal: 10,
                width: 175,
                // marginTop: 150,
            }}>
                <Button // this is the sign up button 
                    onPress={onPress2}
                    title={title2}
                    //this is the school's blue
                    color='#808284'
                />

                {/* </Button> */}
            </View>


        </View>

    );
};

Buttons2.propTypes = {
    onPress: PropTypes.func,
    onPress2: PropTypes.func,
    title1: PropTypes.string,
    title2: PropTypes.string,
};

export default Buttons2;






















// import PropTypes from 'prop-types';
// import React, { Component } from 'react';
// import { View, Image, Text, Alert, AppRegistry, TouchableOpacity } from 'react-native';
// import { Button } from 'react-native-elements';



// const Buttons2 = ({
//     onPress,
//     onPress2,
//     title1,
//     title2,
//     buttonType,
//     buttonColor,
//     ...rest
// }) => {

//     return (

//         <View style=
//         {
//             {
//                 // flex: 1,
//                 //flex row displays items in a row
//                 flexDirection: 'row',
//                 // marginHorizontal: 20,
//                 marginTop: 30,
//             }
//         }
//         >
//             <View 
//                 style=
//                 {
//                     {
//                         //padding horizontal is the spacing in the horizontal space?
//                         paddingHorizontal: 10,
//                         //width is the size of the button pretty much
//                         // width: "50%",
//                         width: 175,
//                         // marginTop: 150,
//                     }
//                 }
//             >
//                 <Button //this is the log in button
//                     {...rest}
//                     onPress={onPress}
//                     //onPress = {this:onPress}

//                     title={title1}
//                     //this is close to the grey color the school uses
//                     // color='#006EC7'
//                     type={buttonType}
//                     // title={title}
//                     buttonStyle=
//                     {
//                         { 
//                             borderColor: buttonColor,
//                             borderRadius: 20
//                         }
//                     }
//                     titleStyle=
//                     {
//                         {
//                             color: buttonColor
//                         }
//                     }
//                 />
//                 {/* </Button> */}

//             </View>

//             <View style={{
//                 paddingHorizontal: 10,
//                 width: 175,
//                 // marginTop: 150,
//             }}>
//                 <Button // this is the sign up button 
//                     {...rest}
//                     onPress={onPress2}
//                     title={title2}
//                     //this is the school's blue
//                     // color='#808284'
//                     // borderColor='#808284'
//                     type={buttonType}
//                     // title={title}
//                     buttonStyle=
//                     {
//                         { 
//                             borderColor: buttonColor,
//                             borderRadius: 20
//                         }
//                     }
//                     titleStyle=
//                     {
//                         {
//                             color: buttonColor
//                         }
//                     }
//                 />

//                 {/* </Button> */}
//             </View>


//         </View>

//     );
// };

// Buttons2.propTypes = {
//     onPress: PropTypes.func,
//     onPress2: PropTypes.func,
//     title1: PropTypes.string,
//     title2: PropTypes.string,
// };

// export default Buttons2;