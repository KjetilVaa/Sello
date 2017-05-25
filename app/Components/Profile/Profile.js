import React from "react"
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
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
                <Image source={{uri: props.photoURL}} style={styles.image} />
            </View>
            <View style={styles.bottomContainer}>
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
        backgroundColor: colors.primary,
    },
    upperContainer: {
        flex: 1,
        backgroundColor: "white"
    },
    middleContainer: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        margin: 10,
        height: 160,
        width: 160,
        borderRadius: 80
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: "pink"
    }
})
