import React from "react"
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from "react-native"
import NavigationBar from "react-native-navbar"
import {colors} from "../../Styles/Colors"
import SearchBar from "../SearchBar/SearchBar"

export default function BookFeed(props){
    return (
        <View style={styles.background}>
            <View style={styles.upperContainer}>
                <SearchBar />
            </View>
            <View style={styles.middleContainer}>
                <Text>
                    Hey
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "white",
    },
    upperContainer: {
        flex: 2,
        backgroundColor: colors.primary,
        justifyContent: "center",
    },
    middleContainer: {
        flex: 10,
    },
})
