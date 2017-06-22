import React, {Component} from "react"

import BookFeed from "../../Components/BookFeed/BookFeed"
import {setAndFetchGeoFireQuery} from "../../Redux/Modules/Books"
import {connect} from "react-redux"


class BookFeedContainer extends Component {

    componentDidMount(){
        this.props.dispatch(setAndFetchGeoFireQuery([this.props.lat, this.props.long], this.props.radius))
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.bookList !== this.props.bookList){
            this.props.bookList = nextProps.bookList
        }
    }

    navigateToNewBook = () => {
    this.props.navigation.navigate("NewBookContainer")
    }

    render(){
        return(
            <BookFeed
                navigateToNewBook={this.navigateToNewBook}
                bookList={this.props.bookList}
                initFinished={this.props.initFinished}
            />
        )
    }
}

function mapStateToProps({Location, Books}){
    return {
        lat: Location.lat,
        long: Location.long,
        radius: Location.radius,
        bookList: Books.books,
        initFinished: Books.initFinished
    }
}

export default connect(
    mapStateToProps
)
(BookFeedContainer)
