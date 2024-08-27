import {StatusBar} from "expo-status-bar";
import {
  SafeAreaView,
  Switch,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import Headings from "./components/Headings";
import {useState} from "react";
import styles from "./Styles";

export default function NewDetails({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.largeHeading}>App Details</Text>
      <Button title="Go To Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Go To Categories"
        onPress={() => navigation.navigate("CategorieDetails")}
      />
    </SafeAreaView>
  );
}
