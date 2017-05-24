import React, {Component} from "react"
import Expo from "expo"
import {connect} from "react-redux"
import {
    View,
    Text,
    Alert,
} from "react-native"

import Login from "../../Components/Login/Login.js"
import {handleAuthWithFirebase} from "../../Redux/Modules/Authentication"

class LoginContainer extends Component{

    handleFBLogin = () => {
        this.props.dispatch(handleAuthWithFirebase())
    }


    render(){
        return(
            <Login
                handleFBLogin={this.handleFBLogin}
            />
        )
    }
}

export default connect()(LoginContainer)
