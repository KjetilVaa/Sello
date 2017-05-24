import React, {Component} from "react"
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from "react-native"

import {colors} from "../../Styles/Colors"


export default function Login(props){
    return(
        <View style={styles.background}>
            <View style={styles.upperContainer}>
                <Text style={styles.title}>
                    Sello
                </Text>
                <Text style={styles.underTitle}>
                    Making student´s life cheaper
                </Text>
            </View>
            <View style={styles.middleContainer}>

            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.fbLoginButton}>
                    <Text style={styles.fbLoginButtonText} onPress={props.handleFBLogin}>
                        Login with Facebook
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    upperContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontSize: 60,
    },
    underTitle: {
        color: colors.dark,
        fontSize: 20,
        marginTop: 5,
    },
    middleContainer: {
        flex: 1,
    },
    bottomContainer: {
        flex: 1,
    },
    fbLoginButton: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginRight: 15,
        marginLeft: 15,
        backgroundColor: colors.facebook,
    },
    fbLoginButtonText: {
        color: "white",
        fontSize: 17,
        fontWeight: "bold",
        margin: 7,
    }
})
