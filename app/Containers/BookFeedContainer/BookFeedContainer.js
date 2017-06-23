import React, {Component} from "react"

import BookFeed from "../../Components/BookFeed/BookFeed"
import {setAndFetchGeoFireQuery, clearBooks, initNotFinished} from "../../Redux/Modules/Books"
import {connect} from "react-redux"


class BookFeedContainer extends Component {

    componentDidMount(){
        this.props.dispatch(setAndFetchGeoFireQuery([this.props.lat, this.props.long], this.props.radius, false))
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.bookList !== this.props.bookList){
            this.props.bookList = nextProps.bookList
        }
        if(nextProps.radius !== this.props.radius){
            this.props.dispatch(clearBooks())
            this.props.dispatch(initNotFinished())
            this.props.geoQuery.updateCriteria({
                center: [this.props.lat, this.props.long],
                radius: nextProps.radius
            })
        }
    }

    navigateToNewBook = () => {
        this.props.navigation.navigate("NewBookContainer")
    }

    navigateToBookPreview = (book) => {
        console.log("kjører")
        console.log(this.props.navigation)
        this.props.navigation.navigate("BookPreviewContainer", {book})    }

    render(){
        return(
            <BookFeed
                navigateToNewBook={this.navigateToNewBook}
                bookList={this.props.bookList}
                initFinished={this.props.initFinished}
                navigateToBookPreview={this.navigateToBookPreview}
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
        initFinished: Books.initFinished,
        geoQuery: Books.geoquery
    }
}

export default connect(
    mapStateToProps
)
(BookFeedContainer)
