import React from "react"
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from "react-native"

import {colors} from "../../Styles/Colors"

export default function BookPreview(props){
    console.log(props)
    return(
        <View style={styles.background}>
            <View style={styles.upperContainer}>
                <Text>
                    HEEYO
                </Text>
            </View>
            <View style={styles.middleContainer}>
                <Text>
                    HEEYO
                </Text>
            </View>
            <View style={styles.bottomContainer}>
                <Text>
                    HEEYO
                </Text>
            </View>
        </View>
    )
}

styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.primary
    },
    upperContainer: {
        flex: 1,
    },
    middleContaienr: {
        flex: 1,
    },
    bottomContainer: {
        flex: 1,
    }
})
