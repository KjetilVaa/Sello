import React, {Component} from "react"

import NewBook from "../../Components/NewBook/NewBook"

export default class NewBookContainer extends Component{

    navigateBack = () => {
        console.log(this.props)
        this.props.navigation.goBack()
    }

    render(){
        return(
            <NewBook
                navigateBack={this.navigateBack}
            />
        )
    }
}
