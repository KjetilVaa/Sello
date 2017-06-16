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
import NewBookContainer from "../NewBookContainer/NewBookContainer"

//Stacks

//BookFeedStack
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
    },
    NewBookContainer: {
        screen: NewBookContainer,
        navigationOptions: {
            title: "NewBook",
            header: null,
        },
    }
},
{
    initialRouteName: "BookFeedContainer",
})
