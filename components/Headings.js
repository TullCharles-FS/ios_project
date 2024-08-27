import {StyleSheet, Text, View} from "react-native";

export default function Headings({children, level}) {
  const headingLevel = level ? level : 5;
  return (
    <View>
      <Text accessibilityRole={`h${headingLevel}`}>{children}</Text>
    </View>
  );
}
