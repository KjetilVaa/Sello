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
            />
        )
    }
}

function mapStateToProps({UserInfo}){
    return {
        displayName: UserInfo.displayName,
        photoURL: UserInfo.photoURL,
    }
}

export default connect(
    mapStateToProps
)(ProfileContainer)
