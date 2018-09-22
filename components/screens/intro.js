import React, {Component} from 'react'
import { Text, TextInput, View, Image } from 'react-native'
import Styles from '../styles.js'
import ButtonElement from '../reusable/button.js'


class Intro extends Component {

  static navigationOptions = {
   header: null
 }

 constructor(props) {
     super(props);
 }


  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.backHeader}>
          <Image
            style={Styles.backButton}
            source={require('../../assets/icons/back.png')}
          />
        </View>
        <View style={Styles.body}>
          <View style={Styles.createList}>
            <Text
              style={Styles.pCenter}>
              Steps to setup your account.
            </Text>
          </View>
          <View style={Styles.createList}>
            <View>
              <View style={Styles.setting}>
                <Image
                  style={Styles.circle}
                  source={require('../../assets/icons/number1.png')}
                />
                <View style={Styles.sideSpacerSmall}></View>
                <View style={Styles.buttonBox}>
                  <Text>Add your Partner's email to link your account.</Text>
                </View>
                <View style={Styles.sideSpacerSmall}></View>
              </View>
              <View style={Styles.spacerSmall}></View>
              <View style={Styles.setting}>
                <Image
                  style={Styles.circle}
                  source={require('../../assets/icons/number2.png')}
                />
                <View style={Styles.sideSpacerSmall}></View>
                <View style={Styles.buttonBox}>
                  <Text>Add 3 feelings that make you feel loved</Text>
                </View>
                <View style={Styles.sideSpacerSmall}></View>
              </View>
              <View style={Styles.spacerSmall}></View>
              <View style={Styles.setting}>
                <Image
                  style={Styles.circle}
                  source={require('../../assets/icons/number3.png')}
                />
                <View style={Styles.sideSpacerSmall}></View>
                <View style={Styles.buttonBox}>
                  <Text>Add 3 feelings that make you feel unloved</Text>
                </View>
                <View style={Styles.sideSpacerSmall}></View>
              </View>
            </View>
          </View>
          <View style={Styles.spacerLarge}></View>
          <View style={Styles.createList}>

            <View style={Styles.spacerSmall}></View>
            <ButtonElement
              buttonText="Let's get started"/>
          </View>
          <View style={Styles.spacerLarge}></View>
            <View style={Styles.sendFeedback}>
            </View>
        </View>
      </View>
    )
  }
}

export default Intro
