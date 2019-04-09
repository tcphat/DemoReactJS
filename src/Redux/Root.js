import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../Redux/Store/configureStore';
import { BrowserRouter  } from 'react-router-dom';
import Routes from '../Route/index';

const store = configureStore();
export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
            </Provider>
        )
    }
}