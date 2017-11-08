
import React, {Component} from "react"
import {
    View,
    Text,
    Image,
    StyleSheet,
} from "react-native"

import {colors} from "../../Styles/Colors"

export default class Chat extends Component{

    PROPS NEEDED
    uid,
    ownerUID,
    displayName,
    ownerDisplayName,
    photoURL,
    ownerPhotoURL,




    constructor(props){
        super(props)
        this.state ={
            messages: []
        }
        this.onSend = this.onSend.bind(this);
        this.chatID = this.props.uid + this.props.ownerUid;
    }

    componentWillMount(){
        time = this.getTime()
        //TODO firebase stuff
    }

    getTime(){
        offset = -(new Date().getTimezoneOffset()/60)
        nowTime = new Date( new Date().getTime() + offset * 3600 * 1000).toUTCString()
        return nowTime
    }

    onSend(message) {
      object = message[0]
      text = object.text
      time = this.getTime()
      this.props.dispatch(addMessage(this.chatID, text, this.props.displayName, nowTime))
    }

    render(){
        return(
          <View style={styles.background}>
    				<View style={styles.closeContainer}>
    					<Close
    					onPress={this.props.handleClose}
    					buttonColor={"white"}
    					/>
    				</View>
            <View style={styles.upperContainer}>
              <View style={styles.ownerInfo}>
                <Image source={{uri: this.props.photoURL}} style={styles.image} />
                <Text style={styles.displayNameText}>
                  {this.props.displayName}
                </Text>
              </View>
            </View>
            <GiftedChat
              messages={this.state.messages}
              onSend={this.onSend}
              user={{
                _id: 1,
              }}
              isAnimated={true}
            />
          </View>
        )
      }
    }

var styles = StyleSheet.create({
      background: {
        flex: 1,
        backgroundColor: "white",
      },
    	closeContainer: {
    		backgroundColor: colors.primaryGreen,
    	},
      ownerInfo: {
    		marginBottom: 10,
    		justifyContent: "center",
    		alignItems: "center",
    		flexDirection: "row",
      },
      upperContainer: {
    		backgroundColor: colors.primaryGreen,
    		justifyContent: "center",
    		alignItems: "center",
    		borderBottomLeftRadius: 60,
    		borderBottomRightRadius: 60,
      },
      displayNameText: {
        fontSize: 20
      },
      image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 20,
      }
})
