import React, {Component} from "react"

import BookPreview from "../../Components/BookPreview/BookPreview"
import {connect} from "react-redux"
import {registerNewChat} from "../../API/ChatsAPI"


class BookPreviewContainer extends Component {

    navigateBack = () => {
        this.props.navigation.goBack()
    }

    handleContactPressed(otherUserUid){
    
    }

    render(){
        return(
            <BookPreview
                data={this.props.navigation.state.params.book.data}
                photoURL={this.props.navigation.state.params.book.photoURL}
                navigateBack={this.navigateBack}
            />
        )
    }
}

function mapStateToProps({UserChats}){
    return {
        userChats: UserChats.userChats
    }
}

export default connect(
    mapStateToProps
)(BookPreviewContainer)
