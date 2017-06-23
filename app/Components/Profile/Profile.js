import React, {Component} from "react"
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from "react-native"

import {colors} from "../../Styles/Colors"
import Slider from "react-native-slider"
import {connect} from "react-redux"



class Profile extends Component{

    constructor(props){
        super(props)
        this.state ={
            radius: "30"
        }
    }

    render(){
        return(
            <View style={styles.background}>
                <View style={styles.upperContainer}>
                </View>
                <View style={styles.middleContainer}>
                    <Image source={{uri: this.props.photoURL}} style={styles.image}/>
                    <Text style={styles.displayNameText}>
                        {this.props.displayName}
                    </Text>
                    <Text style={styles.locationText}>
                        {this.props.city}, {this.props.country}
                    </Text>
                </View>
                <View style={styles.slider}>
                    <View style={styles.sliderTextContainer}>
                        <Text style={styles.sliderText}>
                            {this.state.radius} km
                        </Text>
                    </View>
                    <Slider
                        value={parseInt(this.state.radius)}
                        minimumValue={10}
                        maximumValue={50}
                        step={1}
                        minimumTrackTintColor={colors.dark}
                        maximumTrackTintColor={"white"}
                        thumbTintColor={"white"}
                        onValueChange={(radius) => this.setState({radius})}
                        onSlidingComplete={(d) => this.props.handleRadiusChange(d)}
                    />
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
                        onPress={this.props.handleLogout}
                        >
                        <Text style={styles.logOutButtonText}>
                            Sign out
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
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
    slider: {
        justifyContent: "center",
        marginLeft: 25,
        marginRight: 25,
    },
    sliderTextContainer: {
        alignItems: "center",
        justifyContent: "center",
    },
    sliderText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
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


export default connect()(
    Profile
)
