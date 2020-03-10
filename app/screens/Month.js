import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, StatusBar, FlatList } from 'react-native';

import Days from '../components/monthView/Days';
import ListItem from '../components/monthView/listItem';
import Seperator from '../components/monthView/Seperator';

const temp_Time = '6am'

class Planner extends Component {
    static propTypes = {
        navigation: PropTypes.object,
    };

    componentDidMount() {
        StatusBar.setHidden(true);
    };

    handlePress = () => {
        console.log('day press');
        var Daytext;
        this.props.navigation.navigate('Planner');
    };
    
    render() {


        return (

            <View style={styles.container}>
                {/* <Header 
                    onPress={this.handleOptionsPress}
                /> */}

                <View style={styles.header}>
                    <Text style={styles.headertxt}> March </Text>
                </View>

                <FlatList
                    data={Days}
                    renderItem={({ item }) =>
                        (<ListItem
                            text={item}
                            //onPress={item.Daytext}
                            data={item}
                            // onPress={this.handlePress(item.Daytext)}
                            onPress={this.handlePress}

                        //selected={item === temp_Time}
                        />)
                    }
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Seperator}
                    numColumns={7}
                />



                
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

