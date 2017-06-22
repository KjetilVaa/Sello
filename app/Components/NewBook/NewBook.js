import React, {Component} from "react"
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
} from "react-native"

import {colors} from "../../Styles/Colors"
import {FontAwesome} from "@expo/vector-icons"
import {Madoka} from 'react-native-textinput-effects';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import {showFlashNotification} from "../../Redux/Modules/FlashNotification";
import {connect} from "react-redux";
import {addBook} from "../../API/BooksAPI"



class NewBook extends Component{


    constructor(props){
        super(props)
        this.state = {
            title: "",
            year: "",
            author: "",
            price: "",
            used: "",
        }

        this.radio_props = [
            {label: "Barely Used", value: "Barely Used"},
            {label: "Used", value: "Used"},
            {label: "Very Used", value: "Very Used"}
        ]
    }

    handleSubmit = () => {
        if(this.state.title === ""){
            this.props.dispatch(showFlashNotification({text: "Title cannot be empty"}))
        }
        else if(this.state.year.length < 4 || parseInt(this.state.year) < 0){
            this.props.dispatch(showFlashNotification({text: "Invalid year"}))
        }
        else if(this.state.author === ""){
            this.props.dispatch(showFlashNotification({text: "Author cannot be empty"}))
        }
        else if(this.state.price === "" || parseInt(this.state.price) < 0){
            this.props.dispatch(showFlashNotification({text: "Invalid price"}))
        }
        else{
            obj = {
                uid: this.props.uid,
                displayName: this.props.displayName,
                title: this.state.title,
                year: this.state.year,
                author: this.state.author,
                price: this.state.price,
                used: this.state.used,
            }
            addBook(obj, this.props.country, [this.props.lat, this.props.long])
            .then(() => {
                this.props.navigateBack()
            }).catch((error) => {
                Alert.alert("Something went wrong while publishing the book.")
                console.log(error.message)
            })
        }
    }

    render(){
        return(
            <View style={styles.background}>
                <View style={styles.upperContainer}>
                    <TouchableOpacity
                        style={styles.closeIconContainer}
                        onPress={this.props.navigateBack}
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
                              onChangeText={(title) => this.setState({title})}
                              value={this.state.title}
                            />
                        </View>
                        <View style={styles.singelTextInputContainer}>
                            <Madoka
                              label={'Year'}
                              // this is used as active and passive border color
                              borderColor={"white"}
                              labelStyle={{ color: 'white' }}
                              inputStyle={{ color: 'white' }}
                              onChangeText={(year) => this.setState({year})}
                              value={this.state.year}
                            />
                        </View>
                        <View style={styles.singelTextInputContainer}>
                            <Madoka
                              label={'Author'}
                              // this is used as active and passive border color
                              borderColor={"white"}
                              labelStyle={{ color: 'white' }}
                              inputStyle={{ color: 'white' }}
                              onChangeText={(author) => this.setState({author})}
                              value={this.state.author}
                            />
                        </View>
                        <View style={styles.singelTextInputContainer}>
                            <Madoka
                              label={'Price'}
                              // this is used as active and passive border color
                              borderColor={"white"}
                              labelStyle={{ color: 'white' }}
                              inputStyle={{ color: 'white' }}
                              onChangeText={(price) => this.setState({price})}
                              value={this.state.price}
                            />
                        </View>
                    </View>
                    <View style={styles.usedPicker}>
                        <RadioForm
                            radio_props={this.radio_props}
                            initial={1}
                            onPress={(used) => this.setState({used})}
                            buttonColor={"white"}
                            formHorizontal={"true"}
                            labelHorizontal={"false"}
                            labelColor={"white"}
                            labelStyle={{marginRight: 10}}
                        >
                        </RadioForm>
                    </View>
                </View>
                <View style={styles.bottomContainer}>
                    <TouchableOpacity
                        style={styles.submitButton}
                        onPress={this.handleSubmit}
                        >
                        <Text style={styles.submitButtonText}>
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
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
        marginTop: 1,
        marginBottom: 1,
    },
    usedPicker: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "center",
    },
    priceInput: {
        height: 40,
    },
    bottomContainer: {
        flex: 1,
        justifyContent: "space-between"
    },
    submitButton: {
        backgroundColor: colors.dark,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    submitButtonText: {
        color: "white",
        fontSize: 22,
        fontWeight: "bold",
    }
})

function mapStateToProps({UserInfo, Location}){
    return {
        uid: UserInfo.uid,
        displayName: UserInfo.displayName,
        lat: Location.lat,
        long: Location.long,
        country: Location.country
    }
}

export default connect(
    mapStateToProps
)(NewBook)
