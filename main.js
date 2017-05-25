import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import App from "./app/App";

//Redux and store imports
import {createStore, applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import * as reducers from "./app/Redux/index";
import {composeWithDevTools} from "remote-redux-devtools"

const store = createStore(
	combineReducers(reducers), composeWithDevTools(
		applyMiddleware(thunk)
	)
)

class Main extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
  }
}
Expo.registerRootComponent(Main);
