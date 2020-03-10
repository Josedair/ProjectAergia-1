// Project Aergia


import { createStackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
import { React } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableWithoutFeedback } from 'react-native';
// import { Button } from 'react';
import { Button } from 'react-native';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Planner from '../screens/Planner';
import Month from '../screens/Month';
import Account from '../screens/Account';

// We create a new StackNavigator for the Home screen stack
const HomeStack = createStackNavigator
(
    {
        Home:
        {
            screen: Home,
            navigationOptions:
            {
                header: () => null,
            },
        },
        Options:
        {
            screen: Options,
            navigationOptions:
            {
                headerTitle: 'Options',
            }
        },
        Themes:
        {
            screen: Themes,
            // This allows us to put a header title to a screen
            navigationOptions:
            {
                headerTitle: 'Themes',
            },
        },
        Account:
        {
            screen: Account,
            // This allows us to put a header title to a screen
            navigationOptions:
            {
                headerTitle: 'Account',
                // headerStyle: {
                //     backgroundColor: '#006EC7',
                //     // height: 20,
                // },
                // // headerTitleStyle:
                // // {
                // //     marginTop: -20,
                // //     fontWeight: 'bold',
                // // },
                // headerRight: () => (
                //     <Button
                //       onPress={() => alert('This is a button!')}
                //       title="Info"
                //       color="#fff"
                //     />
                // ),
            },
        },
    },
    {
        // This is the Android version. The navigation bar comes and goes with the screen
        // rather than being continuous on the screen
        headerMode: 'screen',
    }
);

const LoginStack = createStackNavigator
(
    {
        Login:
        {
            screen: Login,
            navigationOptions:
            {
                header: () => null,
            },
        }
    }
)

const SignUpStack = createStackNavigator
(
    {
        SignUp:
        {
            screen: SignUp,
            navigationOptions:
            {
                header: () => null,
            },
        }
    }
)

const MonthStack = createStackNavigator
(
    {
        Month:
        {
            screen: Month,
            navigationOptions:
            {
                header: () => null,
            }
        },
        Planner:
        {
            screen: Planner,
            navigationOptions:
            {
                header: () => null,
            }
        },
    }
)

export default createStackNavigator
(
    {
        Home:
        {
            // We are rendering the HomeStack here so it includes
            // all the other screens that come along with the home screen
            screen: HomeStack,
        },
        Login:
        {
            screen: LoginStack,
        },
        SignUp:
        {
            screen: SignUpStack,
        },
        Month:
        {
            screen: MonthStack,
        },
    },
    {
        mode: 'modal',
        // cardStyle: { paddingTop: StatusBar.currentHeight },

        // Don't render a header for this StackNavigator. This helps to remove
        // the double header problem
        headerMode: 'none',
    }
);