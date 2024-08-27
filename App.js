import {StatusBar} from "expo-status-bar";
import {
  SafeAreaView,
  Switch,
  StyleSheet,
  Text,
  View,
  Button,
  Platform,
} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Headings from "./components/Headings";
import ListContainer from "./components/ListContainers";
import {useState} from "react";
import styles from "./Styles";
import NewDetails from "./NewDetails";
import CategorieDetails from "./CategorieDetails";

function HomeScreen({navigation}) {
  // API goes here
  //fetch()
  //.then((res) => res.json())
  //.then((data) => console.log({data}));
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.largeHeading}>Home Page</Text>
      <Headings>Welcome To My App!</Headings>
      {Platform.OS === "ios" ? (
        <Text style={styles.largeHeading}>Charles App!</Text>
      ) : (
        <Text style={styles.largeHeading}>Error</Text>
      )}
      <Button
        title="App Details Here"
        onPress={() => navigation.navigate("App Details")}
      />
      <ListContainer />
      <Switch
        trackColor={{false: "#767557", true: "#81b0ff"}}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor={"#3e3e3e"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: "My App!"}}
        />
        <Stack.Screen name="App Details" component={NewDetails} />
        <Stack.Screen name="App Categories" component={CategorieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
