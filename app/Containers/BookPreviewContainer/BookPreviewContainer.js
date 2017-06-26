import React, {Component} from "react"

import BookPreview from "../../Components/BookPreview/BookPreview"

export default class BookPreviewContainer extends Component {

    navigateBack = () => {
        this.props.navigation.goBack()
    }

    render(){
        return(
            <BookPreview
                data={this.props.navigation.state.params.book.data}
                navigateBack={this.navigateBack}
            />
        )
    }
}
