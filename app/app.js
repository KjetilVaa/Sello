import React, {Component} from "react"
import {connect} from "react-redux"
import {
    View,
    Text,
    Platform,
    Alert,
} from "react-native"

import RootNavigator from "./Containers/NavigationContainer/RootNavigator"
import FlashNotification from "./Components/Animations/flashAnimation"
import PreSplash from "./Components/Animations/PreSplash"
import LoginContainer from "./Containers/LoginContainer/LoginContainer"
import {firebaseAuth} from "./Config/Constants"
import {onAuthChanged} from "./Redux/Modules/Authentication"
import {hideFlashNotification} from "./Redux/Modules/FlashNotification"
import {Tabs} from "./Containers/NavigationContainer/RootNavigator"
import {getLocation} from "./API/LocationAPI"
import {setLocation} from "./Redux/Modules/Location"



class App extends Component {

    componentDidMount(){
        getLocation().then((location) => {
            firebaseAuth.onAuthStateChanged((user) => this.props.dispatch(onAuthChanged(user)))
            this.props.dispatch(setLocation(location))
        }).catch((error) => {
            Alert.alert("Something went wrong while getting position")
            console.log(error.message)
        })
    }

    handleHideNotification = () => {
        this.props.dispatch(hideFlashNotification())
    }

    render(){
        return (
            <View style={{flex: 1}}>
                {this.props.isAuthenticating === true
                    ? <PreSplash />
                    : this.props.isAuth === true
                        ? <Tabs />
                        : <LoginContainer />
                }
                {this.props.showFlashNotification === true
                    ? <FlashNotification
                        permanent={this.props.flashNotificationPermanent}
                        location={this.props.flashNotificationLocation}
                        text={this.props.flashNotificationText}
                        onHideNotification={this.handleHideNotification}
                    />
                    : null
                }
            </View>
        )
    }
}

function mapStateToProps({Authentication, FlashNotification}){
    return {
        isAuthenticating: Authentication.isAuthenticating,
        isAuth: Authentication.isAuth,
        showFlashNotification: FlashNotification.showFlashNotification,
        flashNotificationText: FlashNotification.text,
        flashNotificationPermanent: FlashNotification.permanent,
        flashNotificationLocation: FlashNotification.location,
    }
}

export default connect(
    mapStateToProps
)(App)
