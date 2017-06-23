import React, {Component} from "react"

import BookPreview from "../../Components/BookPreview/BookPreview"

export default class BookPreviewContainer extends Component {

    constructor(props){
        super(props)
        console.log("her",this.props.navigation.state.params.book.data)
    }

    render(){
        return(
            <BookPreview

            />
        )
    }
}
