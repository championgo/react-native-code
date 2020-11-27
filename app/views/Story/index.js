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
import { Header, Right, Left, Body, Content } from "native-base";
import { Metrics, Colors, Fonts, Images } from "../../../Themes";
import styles from "./styles";

import ScrollableTabView, {
  ScrollableTabBar,
  DefaultTabBar
} from "../../../Components/react-native-scrollable-tab-view";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const NewsData = [
  {
    id: 1,
    Newsname: "Tech Tent: Old phones and safe social",
    NewsCat: "Lifestyle",
    Color: "#be0005",
    Img: Images.Techno_two
  },
  {
    id: 2,
    Newsname: "Google AI Defeats Human Go Champions",
    NewsCat: "Techno",
    Color: "#0f7be4",
    Img: Images.Techno_three
  },
  {
    id: 3,
    Newsname: "Thousands hit glitch halts BA flights",
    NewsCat: "Bussiness",
    Color: "#fd8508",
    Img: Images.Techo_four
  }
];

export default class News extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backPressed);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.backPressed);
  }

  backPressed = () => {
    this.props.navigation.navigate("Explore");
    return true;
  };

  render() {
    if (Platform.OS == "android") {
      StatusBar.setBackgroundColor("#a40000", true);
      StatusBar.setTranslucent(true);
    }

    return (
      <View style={styles.mainView}>
        <Header style={styles.HeaderBg} transparent>
          <Left style={styles.left}>
            <TouchableOpacity
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Entypo name="menu" color="#FFFFFF" size={30} />
            </TouchableOpacity>
          </Left>

          <Body style={styles.body}>
            <Text style={styles.headerTitle}>News</Text>
          </Body>

          <Right style={styles.right}>
            <TouchableOpacity>
              <MaterialIcons
                name="search"
                color="#FFFFFF"
                size={25}
                style={{ marginRight: 10 }}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <MaterialIcons name="more-vert" color="#FFFFFF" size={25} />
            </TouchableOpacity>
          </Right>
        </Header>

        <ScrollableTabView
          initialPage={0}
          tabBarUnderlineStyle={styles.tabUnderLine}
          tabBarBackgroundColor={"transparent"}
          tabBarActiveTextColor={"white"}
          tabBarInactiveTextColor={"white"}
          tabBarTextStyle={styles.tabText}
          style={{
            backgroundColor: "#CC0001"
          }}
          renderTabBar={() => <ScrollableTabBar />}
        >
          <View tabLabel="WHAT'S NEW">
            <View
              style={{
                backgroundColor: "#fff"
              }}
            >
              <ScrollView>
                {NewsData.map((item, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate("NewsDetails")
                      }
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between"
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            marginTop: Metrics.HEIGHT * 0.035,
                            marginLeft: Metrics.HEIGHT * 0.03
                          }}
                        >
                          <Image
                            source={Images.ic_background_ptwentyseven}
                            style={styles.RoundCircle}
                          />
                          <View>
                            <Text style={styles.NameText}>Michael Adams</Text>
                            <View style={{ flexDirection: "row" }}>
                              <Text style={styles.TimeText}>15 min</Text>
                              <View style={styles.DotCircle} />
                              <Text
                                style={[styles.NewsCat, { color: item.Color }]}
                              >
                                {item.NewsCat}
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View style={{ marginTop: Metrics.HEIGHT * 0.035 }}>
                          <FontAwesome
                            name="bookmark-o"
                            color="#757575"
                            size={20}
                            style={{
                              right: Metrics.HEIGHT * 0.035,
                              ...Platform.select({
                                ios: {
                                  marginTop: Metrics.HEIGHT * 0.004
                                },
                                android: {
                                  marginTop: Metrics.HEIGHT * 0.004
                                }
                              })
                            }}
                          />
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          marginTop: Metrics.HEIGHT * 0.03
                        }}
                      >
                        <Image source={item.Img} style={styles.ImgBGContent} />
                        <View>
                          <Text style={styles.TechnologynameText}>
                            {item.Newsname}
                          </Text>
                          <Text style={styles.DesText}>
                            We also talk about the future of work as the robots
                            advance,and we ask whether a retro phone
                          </Text>
                        </View>
                      </View>
                      <View style={styles.DividerHorizontal} />
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </View>
          <View tabLabel="POPULAR">
            <View
              style={{
                backgroundColor: "#fff"
              }}
            >
              <ScrollView>
                {NewsData.map((item, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate("NewsDetails")
                      }
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between"
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            marginTop: Metrics.HEIGHT * 0.035,
                            marginLeft: Metrics.HEIGHT * 0.03
                          }}
                        >
                          <Image
                            source={Images.ic_background_ptwentyseven}
                            style={styles.RoundCircle}
                          />
                          <View>
                            <Text style={styles.NameText}>Michael Adams</Text>
                            <View style={{ flexDirection: "row" }}>
                              <Text style={styles.TimeText}>15 min</Text>
                              <View style={styles.DotCircle} />
                              <Text
                                style={[styles.NewsCat, { color: item.Color }]}
                              >
                                {item.NewsCat}
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View style={{ marginTop: Metrics.HEIGHT * 0.035 }}>
                          <FontAwesome
                            name="bookmark-o"
                            color="#757575"
                            size={20}
                            style={{
                              right: Metrics.HEIGHT * 0.035,
                              ...Platform.select({
                                ios: {
                                  marginTop: Metrics.HEIGHT * 0.004
                                },
                                android: {
                                  marginTop: Metrics.HEIGHT * 0.004
                                }
                              })
                            }}
                          />
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          marginTop: Metrics.HEIGHT * 0.03
                        }}
                      >
                        <Image source={item.Img} style={styles.ImgBGContent} />
                        <View>
                          <Text style={styles.TechnologynameText}>
                            {item.Newsname}
                          </Text>
                          <Text style={styles.DesText}>
                            We also talk about the future of work as the robots
                            advance,and we ask whether a retro phone
                          </Text>
                        </View>
                      </View>
                      <View style={styles.DividerHorizontal} />
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </View>
          <View tabLabel="FAVORITED">
            <View
              style={{
                backgroundColor: "#fff"
              }}
            >
              <ScrollView>
                {NewsData.map((item, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate("NewsDetails")
                      }
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between"
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            marginTop: Metrics.HEIGHT * 0.035,
                            marginLeft: Metrics.HEIGHT * 0.03
                          }}
                        >
                          <Image
                            source={Images.ic_background_ptwentyseven}
                            style={styles.RoundCircle}
                          />
                          <View>
                            <Text style={styles.NameText}>Michael Adams</Text>
                            <View style={{ flexDirection: "row" }}>
                              <Text style={styles.TimeText}>15 min</Text>
                              <View style={styles.DotCircle} />
                              <Text
                                style={[styles.NewsCat, { color: item.Color }]}
                              >
                                {item.NewsCat}
                              </Text>
                            </View>
                          </View>
                        </View>
                        <View style={{ marginTop: Metrics.HEIGHT * 0.035 }}>
                          <FontAwesome
                            name="bookmark-o"
                            color="#757575"
                            size={20}
                            style={{
                              right: Metrics.HEIGHT * 0.035,
                              ...Platform.select({
                                ios: {
                                  marginTop: Metrics.HEIGHT * 0.004
                                },
                                android: {
                                  marginTop: Metrics.HEIGHT * 0.004
                                }
                              })
                            }}
                          />
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          marginTop: Metrics.HEIGHT * 0.03
                        }}
                      >
                        <Image source={item.Img} style={styles.ImgBGContent} />
                        <View>
                          <Text style={styles.TechnologynameText}>
                            {item.Newsname}
                          </Text>
                          <Text style={styles.DesText}>
                            We also talk about the future of work as the robots
                            advance,and we ask whether a retro phone
                          </Text>
                        </View>
                      </View>
                      <View style={styles.DividerHorizontal} />
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </View>
        </ScrollableTabView>
      </View>
    );
  }
}
