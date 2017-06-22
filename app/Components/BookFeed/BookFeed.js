import React from "react"
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from "react-native"
import NavigationBar from "react-native-navbar"
import {colors} from "../../Styles/Colors"
import SearchBar from "../SearchBar/SearchBar"
import FeedListItem from "./FeedListItem"

export default function BookFeed(props){
    return (
        <View style={styles.background}>
            <View style={styles.upperContainer}>
                <SearchBar />
            </View>
            <View style={styles.middleContainer}>
                <FlatList
                    data={props.bookList}
                    renderItem={({item}) =>
                    <FeedListItem
                        data={item}
                    />}
                    keyExtractor={(item, index) => (item, index)}
                />
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity
                    style={styles.newBookButton}
                    onPress={props.navigateToNewBook}
                    >
                    <Text style={styles.newBookButtonText}>
                        New Book
                    </Text>
                </TouchableOpacity>
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
    bottomContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    newBookButton: {
        backgroundColor: colors.primary,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    newBookButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    }
})
