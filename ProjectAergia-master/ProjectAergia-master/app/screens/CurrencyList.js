import React, { Component } from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
    static propTypes = 
    {
        navigation: PropTypes.object,
    }
    handlePress = () => {
        this.props.navigation.goBack(null);
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="default" translucent={false} />
                <FlatList
                    data={currencies}
                    renderItem={({ item }) => (
                        <ListItem
                            text={item}
                            selected={item === TEMP_CURRENT_CURRENCY}
                            onPress={this.handlePress}
                        />
                    )}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        );
    }
}

export default CurrencyList;




// import React, { Component } from 'react';
// import { View, Image, Text, Alert, AppRegistry, Button, } from 'react-native';
// import styles from '../components/Logo/styles';

// const CurrencyList = () => (
//     <View style={styles.container}>
//         <Image resizeMode = "contain" style={styles.containerImage}  source={require('../components/Logo/images/logon.png')} />

//         <Text style={styles.text}>Welcome to Project Aergia</Text>

//         <View style={{
//             flex: 1,
//             //flex row displays items in a row
//             flexDirection: 'row',
//             marginHorizontal: 20,
//             marginTop: 50,
            
//         }}>

//             <View style={{
//                 //padding horizontal is the spacing in the horizontal space?
//                 paddingHorizontal: 10,
//                 //width is the size of the button pretty much
//                 width: "50%",

//             }}>
//                 <Button onPress={() => {
//                     Alert.alert("Logging in")
//                 }}
//                     title="Log in"
//                     //this is close to the grey color the school uses
//                     color='#808284'
//             >

//                 </Button>
//             </View>

//             <View style={{
//                 paddingHorizontal: 10,
//                 width: "50%",
//             }}>
//                 <Button onPress={() => {
//                     Alert.alert("Logging in")
//                 }}
//                     title=" Sign up "
//                     //this is the schools blue
//                     color='#006EC7'   
//                 >

//                 </Button>
//             </View>

            
//         </View>
//     </View>
//     );

// export default CurrencyList;











// import React, { Component } from 'react';
// import { View, Image, Text, Alert, AppRegistry, Button, TouchableOpacity } from 'react-native';
// import styles from '../components/Logo/styles';
 

// const CurrencyList = () => (
    
//     <View style={styles.container}>
//         <Image resizeMode = "contain" style={styles.containerImage}  source={require('../components/Logo/images/logon.png')} />

//         <Text style={styles.text}>  Let's Get it Done! </Text>

        

        
//     </View>
//     );

// export default CurrencyList;