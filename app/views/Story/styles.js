import { Platform, StyleSheet } from "react-native";
import { Metrics, Fonts, Colors } from "../../../Themes";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.snow
  },

  HeaderBg: {
    backgroundColor: "#CC0001",
    borderBottomWidth: 1
  },

  left: {
    flex: 1,
    marginLeft: 5
  },

  body: {
    flex: 3
  },

  right: {
    flex: 1,
    marginRight: 5,
    flexDirection: "row"
  },

  headerTitle: {
    color: "#FFFFFF",
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(20),
    textAlign: "left",
    alignSelf: "flex-start"
  },

  tabUnderLine: {
    backgroundColor: "#fff",
    height: 2
  },

  tabText: {
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(14)
  },

  cardBg: {
    backgroundColor: "#fff",
    width: Metrics.WIDTH * 0.94,
    alignSelf: "center",
    borderRadius: 2,
    marginBottom: Metrics.HEIGHT * 0.02,
    shadowColor: "gray",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    borderColor: "#e8e8e8",
    shadowOpacity: 0.4,
    borderWidth: 1
  },

  RoundCircle: {
    backgroundColor: "#ff6b6b",
    height: Metrics.HEIGHT * 0.06,
    width: Metrics.HEIGHT * 0.06,
    borderRadius: Metrics.HEIGHT * 0.03
  },
  NameText: {
    color: "#626262",
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(12),
    marginLeft: Metrics.HEIGHT * 0.01,
    marginTop: Metrics.HEIGHT * 0.004
  },

  TimeText: {
    color: "#626262",
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(12),
    marginLeft: Metrics.HEIGHT * 0.01
  },

  ImgBGContent: {
    backgroundColor: "#263238",
    width: Metrics.WIDTH * 0.32,
    ...Platform.select({
      ios: {
        height: Metrics.HEIGHT * 0.15
      },
      android: {
        height: Metrics.HEIGHT * 0.16
      }
    }),

    marginLeft: Metrics.HEIGHT * 0.035
  },

  TechnologynameText: {
    color: "#191919",
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(18),
    marginLeft: Metrics.HEIGHT * 0.03,
    width: Metrics.WIDTH * 0.5
  },

  DesText: {
    color: "#626262",
    fontFamily: Fonts.type.robotoRegular,
    fontSize: Fonts.moderateScale(14),
    marginLeft: Metrics.HEIGHT * 0.03,
    width: Metrics.WIDTH * 0.5,
    lineHeight: 25
  },

  DotCircle: {
    backgroundColor: "#626262",
    height: Metrics.HEIGHT * 0.004,
    width: Metrics.HEIGHT * 0.004,
    borderRadius: Metrics.HEIGHT * 0.002,
    marginTop: Metrics.HEIGHT * 0.012,
    marginLeft: Metrics.HEIGHT * 0.01
  },

  NewsCat: {
    fontFamily: Fonts.type.robotoMedium,
    fontSize: Fonts.moderateScale(12),
    marginLeft: Metrics.HEIGHT * 0.01
  },

  DividerHorizontal: {
    width: Metrics.WIDTH,
    backgroundColor: "#657d8a",
    height: 1,
    marginTop: Metrics.HEIGHT * 0.035,
    marginBottom: Metrics.HEIGHT * 0.0022
  }
});

export default styles;
