import React, {Component} from "react"
import {
    View,
    TextInput,
    TouableOpacity,
    StyleSheet,
} from "react-native"

import {colors} from "../../Styles/Colors"

export default class SearchBar extends Component {

    constructor(props){
        super(props)
        this.state = {
            text: "",
        }
    }

    render(){
        return(
            <View style={styles.background}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    placeholder={"Search"}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    background: {
        flex: 1,
        marginTop: 40,
        marginRight: 15,
        marginLeft: 15,
    },
    input: {
        height: 40,
        color: "black",
        borderRadius: 10,
        backgroundColor: "white",
        padding: 5,
        textAlign: "center"
    }
})
