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
import { Container, Button, Right, Header, Left, Body } from "native-base";

import FontAwesome from "react-native-vector-icons/FontAwesome";
// Screen Styles
import styles from "./styles";

export default class WalkthroughTraceLocation extends Component {
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
    let swiperImage = {
      uri:
        "https://antiqueruby.aliansoftware.net//Images/walkthrough/ic_map_wteight.png"
    };

    return (
      <Container style={styles.slidesec}>
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

        <Text style={styles.headertext}>Your Location</Text>

        <Text style={styles.desctext}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        <View style={styles.sliderImage}>
          <Image source={swiperImage} style={styles.imageStyle} />
        </View>

        <View style={styles.btnsec}>
          <Button
            rounded
            onPress={() => alert("Add Your Location")}
            style={styles.locationBtn}
          >
            <Text style={styles.btnText}>Add Your Location</Text>
          </Button>
          <TouchableOpacity
            transparent
            onPress={() => alert("Skip")}
            style={styles.skipBtn}
          >
            <Text style={[styles.btnText, { fontSize: 16 }]}>Skip</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}
