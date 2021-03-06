import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  Platform,
  TouchableOpacity,
  BackHandler,
  I18nManager
} from "react-native";
import { Container, Right, Header, Left, Body } from "native-base";
import Swiper from "react-native-swiper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

export default class WalkthroughVoiceControl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("Walkthrough");
      return true;
    });
  }

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("rgba(0,0,0,0.3)", true);
      StatusBar.setTranslucent(true);
    }
    let bgImage = {
      uri:
        "https://antiqueruby.aliansoftware.net//Images/walkthrough/voice_wt11.png"
    };

    var data = [
      {
        id: 1,
        title: "VOICE CONTROL",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 2,
        title: "VOICE CONTROL",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 3,
        title: "VOICE CONTROL",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
      {
        id: 4,
        title: "VOICE CONTROL",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ];

    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() => this.props.navigation.navigate("Walkthrough")}
            >
              <FontAwesome
                name={I18nManager.isRTL ? "angle-right" : "angle-left"}
                size={30}
                color="white"
              />
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}></Body>
          <Right style={styles.right} />
        </Header>
        <Swiper
          showsButtons={false}
          autoplay={true}
          autoplayTimeout={2.5}
          activeDot={<View style={styles.activeDot} />}
          dot={<View style={styles.dot} />}
        >
          {data.map((item, index) => {
            return (
              <View style={styles.slide} key={index}>
                <Image source={bgImage} style={styles.imgStyle} />
                <Text style={styles.headertext}>{item.title}</Text>
                <Text style={styles.desctext}>{item.description}</Text>
              </View>
            );
          })}
        </Swiper>
        <TouchableOpacity onPress={() => alert("Get Started")}>
          <View style={styles.btnsec}>
            <Text style={styles.buttonText}>GET STARTED</Text>
          </View>
        </TouchableOpacity>
      </Container>
    );
  }
}
