import React, {Component} from "react"
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from "react-native"

import {colors} from "../../Styles/Colors"
import {FontAwesome} from "@expo/vector-icons"


export default class BookPreview extends Component{

    constructor(props){
        super(props)
        console.log("HAHAHAHHAHAHAH", this.props.data.photoURL)
    }

    priceStyle(){
        if(this.props.data.used === "Barely Used"){
            return {
                backgroundColor: colors.dark,
            }
        }
        else if(this.props.data.used === "Used"){
            return {
                backgroundColor: colors.yellow,
            }
        }
        else if(this.props.data.used === "Very Used"){
            return {
                backgroundColor: colors.danger
            }
        }
        else{
            return {
                backgroundColor: colors.primary
            }
        }
    }

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
                <View style={styles.usedAndPriceContainer}>
                    <Text style={styles.price}>
                        Price: {this.props.data.price}
                    </Text>
                    <View style={[styles.usedContainer, this.priceStyle()]}>
                        <Text style={styles.used}>
                            {this.props.data.used}
                        </Text>
                    </View>
                </View>
                <View style={styles.middleContainer}>
                    <Text style={styles.postedBy}>
                        Owner:
                    </Text>
                    <View style={styles.userInfoContainer}>
                        <Image style={styles.image} source={require("../../Assets/Pictures/fb.jpg")} />
                        <Text style={styles.displayName}>
                            {this.props.data.displayName}
                        </Text>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>
                            Contact
                        </Text>
                    </TouchableOpacity>
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
    usedAndPriceContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 10,
    },
    price: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    usedContainer: {
        padding: 5,
        borderRadius: 10,
    },
    used: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
    middleContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    postedBy: {
        color: "white",
        fontSize: 18,
        marginRight: 10,
    },
    userInfoContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        marginRight: 10,
    },
    displayName: {
        color: "white",
        fontSize: 18,
    },
    bottomContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch"
    },
    buttonContainer: {
        padding: 10,
        backgroundColor: colors.dark,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    }
})
