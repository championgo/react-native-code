import React, { Component } from "react";
import {
  Platform,
  StatusBar,
  View,
  Text,
  Image,
  TouchableOpacity,
  BackHandler,
  ScrollView
} from "react-native";
//import { Metrics, Colors, Fonts, Images } from "../../Themes";
import styles from "./styles";
import MarqueeText from 'react-native-marquee';


export default class Marquee extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
  }

  componentWillUnmount() {
  }

  backPressed = () => {
    this.props.navigation.navigate("Explore");
    return true;
  };

  render() {

    return (
    <View style={styles.container}>
        <MarqueeText
          style={{ fontSize: 24 }}
          duration={30000}
          marqueeOnStart
          loop
          marqueeDelay={1000}
          marqueeResetDelay={1000}
        >
       感谢张三刚刚捐赠了一百元感谢张三刚刚捐赠了一百元感谢张三刚刚捐赠了一百元感谢张三刚刚捐赠了一百元感谢张三刚刚捐赠了一百元
        </MarqueeText>
      </View>  

    );
  }
}
