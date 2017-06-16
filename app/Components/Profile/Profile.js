import React from "react"
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from "react-native"

import {colors} from "../../Styles/Colors"



export default function Profile(props){
    return(
        <View style={styles.background}>
            <View style={styles.upperContainer}>
                <Text>
                    Hey
                </Text>
            </View>
            <View style={styles.middleContainer}>
                <Image source={{uri: props.photoURL}} style={styles.image}/>
                <Text style={styles.displayNameText}>
                    {props.displayName}
                </Text>
                <Text style={styles.locationText}>
                    {props.city}, {props.country}
                </Text>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity
                    style={styles.bookReceipts}
                    >
                    <Text style={styles.logOutButtonText}>
                        Book Receipts
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.settings}
                    >
                    <Text style={styles.logOutButtonText}>
                        Settings
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.logOutButton}
                    onPress={props.handleLogout}
                    >
                    <Text style={styles.logOutButtonText}>
                        Sign out
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
        flex: 1,
    },
    middleContainer: {
        flex: 3,
        alignItems: "center",
    },
    image: {
        margin: 0,
        height: 160,
        width: 160,
        borderRadius: 80
    },
    displayNameText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        opacity: 0.9,
        marginTop: 6,
    },
    locationText: {
        color: "white",
        fontSize: 18,
        opacity: 0.8,
    },
    bottomContainer: {
        flex: 2,
        justifyContent: "center",
        alignItems: "stretch"
    },
    logOutButton: {
        backgroundColor: colors.danger,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
    },
    bookReceipts: {
        backgroundColor: colors.dark,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    settings: {
        backgroundColor: colors.dark,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
    logOutButtonText: {
        fontSize: 16,
        color: "white",
        textAlign: "center",
    }
})
