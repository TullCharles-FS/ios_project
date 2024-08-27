import {Platform, StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  largeHeading: {
    fontSize: 40,
  },

  italicFont: {
    fontSize: "italic",
  },

  headingColor: {
    ...Platform.select({
      android: {
        color: "blue",
      },
      ios: {
        color: "red",
      },
      default: {
        color: "green",
      },
    }),
  },
});

export default styles;
