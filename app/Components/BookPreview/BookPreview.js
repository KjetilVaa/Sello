import React, {Component} from "react"
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from "react-native"

import {colors} from "../../Styles/Colors"
import {FontAwesome} from "@expo/vector-icons"


export default class BookPreview extends Component{
    render(){
        return(
            <View style={styles.background}>
                <TouchableOpacity
                    style={styles.closeIconContainer}
                    onPress={this.props.navigateBack}
                    >
                    <FontAwesome name={"angle-left"} size={32} color={"white"} />
                </TouchableOpacity>
                <View style={styles.upperContainer}>
                    <Text style={styles.title}>
                        {this.props.data.title}
                    </Text>
                    <Text style={styles.author}>
                        {this.props.data.author}
                    </Text>
                    <Text style={styles.year}>
                        {this.props.data.year}
                    </Text>
                </View>
                <View style={styles.pictures}>
                    <Text>
                        Todo: Add Pictures
                    </Text>
                </View>
                <View style={styles.middleContainer}>
                    <Text>
                        Hey
                    </Text>
                </View>
                <View style={styles.bottomContainer}>
                    <Text>
                        Heyo
                    </Text>
                </View>
            </View>
        )
    }
}

styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.primary
    },
    closeIconContainer: {
        marginLeft: 5,
        marginTop: 20,
    },
    upperContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
    },
    author: {
        color: "white",
        fontSize: 20,
    },
    year: {
        color: "white",
        fontSize: 20,
    },
    pictures: {
        flex: 0.5,
        backgroundColor: colors.dark,
        marginLeft: 10,
        marginRight: 10,
    },
    middleContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    bottomContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
