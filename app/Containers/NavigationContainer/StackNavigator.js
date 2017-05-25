import React, {Component} from "react"
import {
    TextInput
} from "react-native"

import {StackNavigator} from "react-navigation"
import {colors} from "../../Styles/Colors"

//All screen-containers
import BookFeedContainer from "../BookFeedContainer/BookFeedContainer"
import ChatContainer from "../ChatContainer/ChatContainer"
import ProfileContainer from "../ProfileContainer/ProfileContainer"

//Stacks
export const BookFeedStack = StackNavigator({
    BookFeedContainer: {
        screen: BookFeedContainer,
        navigationOptions: {
            title: "Feed",
            headerStyle: {
                backgroundColor: colors.primary
            },
            header: null,
        }
    }
},{
    initialRouteName: "BookFeedContainer",
})
