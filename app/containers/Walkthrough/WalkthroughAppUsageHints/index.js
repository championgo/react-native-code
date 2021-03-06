import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StatusBar,
  Platform,
  TouchableOpacity,
  BackHandler,
  I18nManager,
} from 'react-native';
import {Container, Icon, Right, Header, Left, Body} from 'native-base';
import Swiper from 'react-native-swiper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class WalkthroughAppUsageHints extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    var that = this;
    /*BackHandler.addEventListener('hardwareBackPress', function() {
      that.props.navigation.navigate('Walkthrough');
      return true;
    });*/
  }

  render() {
    StatusBar.setBarStyle('light-content', true);
    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('#2d324f', true);
      StatusBar.setTranslucent(true);
    }
    let swiperImage = {
      uri: 'https://antiqueruby.aliansoftware.net//Images/walkthrough/phn.png',
    };

    var data = [
      {
        id: 1,
        image: swiperImage,
        title: "Let's get started!",
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 2,
        image: swiperImage,
        title: "Let's get started1!",
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 3,
        image: swiperImage,
        title: "Let's get started2!",
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        id: 4,
        image: swiperImage,
        title: "Let's get started3!",
        description:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ];

    return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() => this.props.navigation.navigate('Walkthrough')}>
              <FontAwesome
                name={I18nManager.isRTL ? 'angle-right' : 'angle-left'}
                size={30}
                color="white"
              />
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}></Body>
          <Right style={styles.right} />
        </Header>

        <Swiper
          showsButtons={true}
          autoplay={false}
          activeDot={<View style={styles.activeDot} />}
          dot={<View style={styles.dot} />}
          nextButton={
            <View style={styles.nextTipBg}>
              <Text style={styles.nextTipTxt}>Next tip</Text>
              <Icon
                name={
                  I18nManager.isRTL
                    ? 'ios-arrow-dropleft-outline'
                    : 'ios-arrow-dropright-outline'
                }
                style={styles.nextArrowImg}
              />
            </View>
          }
          prevButton={<Text></Text>}>
          {data.map((item, index) => {
            return (
              <View style={styles.slide} key={index}>
                <Image source={item.image} style={styles.imageStyle} />
                <View style={styles.contentStyle}>
                  <Text style={styles.headertext}>{item.title}</Text>
                  <Text numberOfLines={3} style={styles.desctext}>
                    {item.description}
                  </Text>
                </View>
              </View>
            );
          })}
        </Swiper>
      </Container>
    );
  }
}
