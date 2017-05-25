import React, {Component} from "react"
import {
    View,
    Text,
} from "react-native"

import {TabNavigator, StackNavigator} from "react-navigation"
import {FontAwesome} from "@expo/vector-icons"
import {colors} from "../../Styles/Colors"

//All screen-containers
import BookFeedContainer from "../BookFeedContainer/BookFeedContainer"
import ChatContainer from "../ChatContainer/ChatContainer"
import ProfileContainer from "../ProfileContainer/ProfileContainer"
//Stacks
import {BookFeedStack} from "./StackNavigator"



export const Tabs = TabNavigator({
    ProfileContainer: {
        screen: ProfileContainer,
        navigationOptions: {
            tabBarLabel: "Profile",
            tabBarIcon: ({tintColor}) => <FontAwesome name={"user"} size={32} color={colors.dark}/>,
        }
    },
    BookFeedContainer:{
        screen: BookFeedStack,
        navigationOptions: {
            tabBarLabel: "Feed",
            tabBarIcon: ({tintColor}) => <FontAwesome name={"book"} size={32} color={colors.dark}/>
        }
    },
    ChatContainer:{
        screen: ChatContainer,
        navigationOptions: {
            tabBarLabel: "Chats",
            tabBarIcon: ({tintColor}) => <FontAwesome name={"comment"} size={32} color={colors.dark}/>
        }
    }
},{
    tabBarOptions:{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.dark,
        inactiveBackgroundColor: "white",
        activeBackgrounColor: "white",
        showIcon: true,
        showLabel: false,
    },
    initialRouteName: "BookFeedContainer",
    tabBarPosition: "bottom",
    animationEnabled: false,
    swipeEnable: true,
})
