import React, {Component} from "react"

import BookFeed from "../../Components/BookFeed/BookFeed"

export default class BookFeedContainer extends Component {

    navigateToNewBook = () => {
        console.log(this.props.navigation.navigate("NewBookContainer"))
    }

    render(){
        return(
            <BookFeed
                navigateToNewBook={this.navigateToNewBook}
            />
        )
    }
}
