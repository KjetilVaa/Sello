import React, {Component} from "react"
import {
    View,
    Text
} from "react-native"

import LoginContainer from "./Containers/LoginContainer/LoginContainer"


export default class App extends Component {

    componentDidMount(){

    }


    render(){
        return (
            <View style={{flex: 1}}>
                <LoginContainer />
            </View>
        )
    }
}
