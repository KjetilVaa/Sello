import React, {Component} from "react"
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
} from "react-native"

import {colors} from "../../Styles/Colors"
import {getProfilePicture} from "../../API/Auth"

export default class FeedListItem extends Component{

    constructor(props){
        super(props)
        this.state = {
            url: ""
        }
    }

    componentDidMount(){
        getProfilePicture(this.props.data.uid)
        .then((url) => {
            this.setState({url: url.val()})
        })
    }

    priceStyle(){
        if(this.props.data.used === "Barely Used"){
            return {
                backgroundColor: colors.primary,
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

    preparePropsForNavigation = () => {
        book = {
            data: this.props.data,
            photoURL: this.state.url
        }
        this.props.navigateToBookPreview(book)

    }

    render(){
        return(
            <TouchableOpacity onPress={this.preparePropsForNavigation}>
                <View style={styles.background}>
                    <View style={styles.upperContainer}>
                        {this.state.url === "" ? null
                        : <Image style={styles.image} source={require("../../Assets/Pictures/fb.jpg")} />
                        }
                        <Text style={styles.displayNameText}>
                            {this.props.data.displayName}
                        </Text>
                    </View>
                    <View style={styles.middleContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>
                                {this.props.data.title}
                            </Text>
                        </View>
                        <Text style={styles.author}>
                            {this.props.data.author}
                        </Text>
                        <Text style={styles.year}>
                            {this.props.data.year}
                        </Text>
                    </View>
                    <View style={styles.bottomContainer}>
                        <Text style={styles.price}>
                            Price: {this.props.data.price}
                        </Text>
                        <View style={[styles.usedContainer, this.priceStyle()]}>
                            <Text style={styles.used}>
                                {this.props.data.used}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        height: 120,
        backgroundColor: "white",
        marginBottom: 6,
        marginRight: 4,
        marginLeft: 4,
        borderBottomWidth: 4,
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: "lightgrey",
        borderRadius: 10,
    },
    upperContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 2,
    },
    image: {
        height: 86,
        width: 86,
        borderRadius: 43,
    },
    displayNameText: {
        fontSize: 14,
        color: "black",
        opacity: 0.7,
        marginTop: 2,
    },
    middleContainer: {
        flex: 2,
        justifyContent: "space-around",
        alignItems: "center"
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        opacity: 0.9,
    },
    titleContainer: {
        borderBottomWidth: 2,
        borderColor: colors.primary
    },
    author: {
        fontSize: 14,
        opacity: 0.8,
    },
    year: {
        fontSize: 14,
        opacity: 0.8,
    },
    bottomContainer: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        marginRight: 2,
    },
    price: {
        fontSize: 14,
        opacity: 1,
    },
    used: {
        fontSize: 14,
        opacity: 1,
        color: "white"
    },
    usedContainer: {
        padding: 5,
        borderRadius: 10,
    }
})
