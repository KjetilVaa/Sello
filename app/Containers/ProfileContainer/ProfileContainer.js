import React, {Component} from "react"
import {connect} from "react-redux"


import Profile from "../../Components/Profile/Profile"
import {logout} from "../../API/Auth"

class ProfileContainer extends Component {

    handleLogout = () => {
        logout()
    }

    render(){
        return(
            <Profile
                displayName={this.props.displayName}
                photoURL={this.props.photoURL}
                handleLogout={this.handleLogout}
                city={this.props.city}
                country={this.props.country}
            />
        )
    }
}

function mapStateToProps({UserInfo, Location}){
    return {
        displayName: UserInfo.displayName,
        photoURL: UserInfo.photoURL,
        city: Location.city,
        country: Location.country,
    }
}

export default connect(
    mapStateToProps
)(ProfileContainer)
