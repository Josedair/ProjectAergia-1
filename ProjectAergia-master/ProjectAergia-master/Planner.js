import React, { Component } from 'react';
import Time from '../Planner/Time';
import Listitem from '../Planner/Listitem'
import Seperator from '../Planner/Seperator'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    FlatList,

    
} from 'react-native';

const temp_Time = '6am'

class Planner extends Component {
    componentDidMount() {
        StatusBar.setHidden(true);
    };

    handlePress = () => {
        console.log('row press');
    };

    render() {
        
       
        return (
            
            <View style={styles.container}>
                
                <View style={styles.header}>
                    <Text style={styles.headertxt}> Day View </Text>
                </View>
                
                
                <FlatList
                    data={Time}
                    renderItem={({ item }) =>
                        (<Listitem
                            text={item}
                            onPress={this.handlePress}
                            //selected={item === temp_Time}
                        />)
                    }
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Seperator}
                />
               
                

                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addButtontxt}> + </Text>
                </TouchableOpacity>
            </View>
            );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    header: {
        backgroundColor: '#006EC7',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 10,
        borderBottomWidth: 5,
        borderBottomColor: "#006EC7",
        elevation: 8,
    },
    headertxt: {
        color: 'white',
        fontSize: 36,
        padding: 10
    },
    scrollCont: {
        flex: 1,
        marginBottom: 100,
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 45,
        backgroundColor: '#808284',
        width: 55,
        height: 55,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,

    },
    addButtontxt: {
        color: 'white',
        fontSize: 55,
    },
});
export default Planner;

