import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

// import Home from './screens/Home';
// import Options from './screens/Options';
// import CurrencyList from './screens/CurrencyList';
// import Themes from './screens/Themes';
import Navigator from './config/routes';
import { AlertProvider } from './components/Alert';
import { Provider } from 'react-redux';
import store from './config/store';

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $primaryOrange: '#D57A66',
    $primaryGreen: '#00BD9D',
    $primaryPurple: '#9E768F',

    $white: '#FFFFFF',
    $black: '#000000',
    $border: '#E2E2E2',
    $inputText: '#797979',
    $lightGray: '#F0F0F0',
    $darkText: '#343434',


    $schoolBlue: '#006EC7',
    $red: '#FF0000',

    // $outline: 1,
});

// export default () => <Home />;
// export default () => <Options />;
// export default () => <CurrencyList />;
// export default () => <Themes />;
export default () =>
(
    // Thanks to this, our components now have access to this.props.dispatch
    <Provider store={store}>
        <AlertProvider>
            {/* This makes it so we no longer see navigation state changes */}
            <Navigator onNavigationStateChange={null} />
        </AlertProvider>
    </Provider>
);