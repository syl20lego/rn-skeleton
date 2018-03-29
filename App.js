import React, {Component} from 'react';
import {ActivityIndicator} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react'
import Store from './src/store';
import Application from './src';

export default class App extends Component {
    render() {
        const {persistor, store} = Store;
        const onBeforeLift = () => {
            // take some action before the gate lifts
        };
        persistor.purge();
        return (
            <Provider store={store}>
                <PersistGate
                    loading={<ActivityIndicator/>}
                    onBeforeLift={onBeforeLift}
                    persistor={persistor}>
                    <Application/>
                </PersistGate>
            </Provider>
        );
    }
}