import React from "react"
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
} from "react-native"

import {colors} from "../../Styles/Colors"
import {FontAwesome} from "@expo/vector-icons"
import {Madoka} from 'react-native-textinput-effects';


export default function NewBook(props){
    return(
        <View style={styles.background}>
            <View style={styles.upperContainer}>
                <TouchableOpacity
                    style={styles.closeIconContainer}
                    onPress={props.navigateBack}
                    >
                    <FontAwesome name={"close"} size={32} color={"white"} />
                </TouchableOpacity>
                <Text style={styles.titleText}>
                    New book?
                </Text>
            </View>
            <View style={styles.middleContainer}>
                <View style={styles.textInputContainer}>
                    <View style={styles.singelTextInputContainer}>
                        <Madoka
                          label={'Title'}
                          // this is used as active and passive border color
                          borderColor={"white"}
                          labelStyle={{ color: 'white' }}
                          inputStyle={{ color: 'white' }}
                        />
                    </View>
                    <View style={styles.singelTextInputContainer}>
                        <Madoka
                          label={'Edition'}
                          // this is used as active and passive border color
                          borderColor={"white"}
                          labelStyle={{ color: 'white' }}
                          inputStyle={{ color: 'white' }}
                        />
                    </View>
                    <View style={styles.singelTextInputContainer}>
                        <Madoka
                          label={'Year'}
                          // this is used as active and passive border color
                          borderColor={"white"}
                          labelStyle={{ color: 'white' }}
                          inputStyle={{ color: 'white' }}
                        />
                    </View>
                    <View style={styles.singelTextInputContainer}>
                        <Madoka
                          label={'Author'}
                          // this is used as active and passive border color
                          borderColor={"white"}
                          labelStyle={{ color: 'white' }}
                          inputStyle={{ color: 'white' }}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.bottomContainer}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.primary,
        flex: 1,
    },
    upperContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    closeIconContainer: {
        marginLeft: 10,
    },
    titleText: {
        color: "white",
        marginRight: 130,
        fontSize: 20,
        fontWeight: "bold"
    },
    middleContainer: {
        flex: 5,
    },
    textInputContainer: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
    },
    singelTextInputContainer: {
        marginTop: 5,
        marginBottom: 5,
    },
    bottomContainer: {
        flex: 1,
    }
})
