// import { createStackNavigator } from 'react-navigation';
// import { StatusBar } from 'react-native';

// import Home from '../screens/Home';
// import CurrencyList from '../screens/CurrencyList';
// import Options from '../screens/Options';
// import Themes from '../screens/Themes';

// // We create a new StackNavigator for the Home screen stack
// const HomeStack = createStackNavigator
// (
//     {
//         Home:
//         {
//             screen: Home,
//             navigationOptions:
//             {
//                 header: () => null,
//             },
//         },
//         Options:
//         {
//             screen: Options,
//             navigationOptions:
//             {
//                 headerTitle: 'Options',
//             }
//         },
//         Themes:
//         {
//             screen: Themes,
//             // This allows us to put a header title to a screen
//             navigationOptions:
//             {
//                 headerTitle: 'Themes',
//             },
//         },
//     },
//     {
//         // This is the Android version. The navigation bar comes and goes with the screen
//         // rather than being continuous on the screen
//         headerMode: 'screen',
//     }
// );

// const CurrencyListStack = createStackNavigator
// (
//     {
//         CurrencyList:
//         {
//             screen: CurrencyList,
//             navigationOptions: ({ navigation }) => 
//             ({
//                 headerTitle: navigation.state.params.title,
//             }),
//         }
//     }
// )

// export default createStackNavigator
// (
//     {
//         Home:
//         {
//             // We are rendering the HomeStack here so it includes
//             // all the other screens that come along with the home screen
//             screen: HomeStack,
//         },
//         CurrencyList:
//         {
//             screen: CurrencyListStack,
//         },
//     },
//     {
//         mode: 'modal',
//         cardStyle: { paddingTop: StatusBar.currentHeight },

//         // Don't render a header for this StackNavigator. This helps to remove
//         // the double header problem
//         headerMode: 'none',
//     }
// );




// Project Aergia


import { createStackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';

import Home from '../screens/Home';
import CurrencyList from '../screens/CurrencyList';
import Options from '../screens/Options';
import Themes from '../screens/Themes';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import Planner from '../screens/Planner';

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

const PlannerStack = createStackNavigator
(
    {
        Planner:
        {
            screen: Planner,
            navigationOptions:
            {
                header: () => null,
            },
        }
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
        Planner:
        {
            screen: PlannerStack,
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