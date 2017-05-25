import React, {Component} from "react"
import {connect} from "react-redux"
import {
    View,
    Text
} from "react-native"

import LoginContainer from "./Containers/LoginContainer/LoginContainer"
import RootNavigator from "./Containers/NavigationContainer/RootNavigator"
import FlashNotification from "./Components/Animations/flashAnimation"
import PreSplash from "./Components/Animations/PreSplash"
import {firebaseAuth} from "./Config/Constants"
import {onAuthChanged} from "./Redux/Modules/Authentication"
import {hideFlashNotification} from "./Redux/Modules/FlashNotification"
import {Tabs} from "./Containers/NavigationContainer/RootNavigator"


class App extends Component {

    componentDidMount(){
        firebaseAuth.onAuthStateChanged((user) => this.props.dispatch(onAuthChanged(user)))
    }

    handleHideNotification = () => {
        this.props.dispatch(hideFlashNotification)
    }

    render(){
        return (
            <View style={{flex: 1}}>
                {this.props.isAuthenticating === true
                    ? <PreSplash />
                    : <Tabs />
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
