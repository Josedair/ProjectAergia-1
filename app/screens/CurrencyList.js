import React, { Component } from 'react';
import { FlatList, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { ListItem, Separator } from '../components/List';
import currencies from '../data/currencies';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
    static propTypes = 
    {
        navigation: PropTypes.object,
        dispatch: PropTypes.func,
        baseCurrency: PropTypes.string,
        quoteCurrency: PropTypes.string,
        primaryColor: PropTypes.string,
    }
    handlePress = (currency) => {
        // We can access the type through the navigation params. This will pull the type
        // from the Home screen to this CurrencyList screen
        const { type } = this.props.navigation.state.params;
        if (type === 'base')
        {
            this.props.dispatch(changeBaseCurrency(currency));
        }
        else if (type === 'quote')
        {
            this.props.dispatch(changeQuoteCurrency(currency));
        }
        this.props.navigation.goBack(null);
    };

    render() {
        let comparisonCurrency = this.props.baseCurrency;
        if (this.props.navigation.state.params.type === 'quote')
        {
            comparisonCurrency = this.props.quoteCurrency;
        }


        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="default" translucent={false} />
                <FlatList
                    data={currencies}
                    renderItem={({ item }) => (
                        <ListItem
                            text={item}
                            selected={item === comparisonCurrency}
                            // Item is the actual currency that has been selected. We create a function so that when onpress
                            // is pressed we call this function and we pass the item parameter to it
                            onPress={() => this.handlePress(item)}
                            // This is a color that we can pass in so we can change the color of the checkmark
                            iconBackground={this.props.primaryColor}
                        />
                    )}
                    keyExtractor={item => item}
                    ItemSeparatorComponent={Separator}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) =>
{
    return {
        baseCurrency: state.currencies.baseCurrency,
        quoteCurrency: state.currencies.quoteCurrency,
        primaryColor: state.theme.primaryColor,
    }
}

export default connect(mapStateToProps)(CurrencyList);