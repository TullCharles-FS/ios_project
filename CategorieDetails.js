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

export default function CategorieDetails({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.largeHeading}>CategorieDetails</Text>
      <Button title="Go To Home" onPress={() => navigation.navigate("Home")} />
      <Button
        title="Go To App Details"
        onPress={() => navigation.navigate("NewDetails")}
      />
    </SafeAreaView>
  );
}
