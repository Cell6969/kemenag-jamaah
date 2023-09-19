import React, { useEffect } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  UIManager,
} from "react-native";
import { AccordionList } from "react-native-accordion-list-view";
import { RukunHaji } from "../../constant/tataCaraHajj";

const Guide = () => {
  /// Caution make crash
  // useEffect(() => {
  //     if (Platform.OS === 'android') {
  //         if (UIManager.setLayoutAnimationEnabledExperimental) {
  //             UIManager.setLayoutAnimationEnabledExperimental(true);
  //         }
  //     }
  // }, []);
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
        <Text style={styles.title}>Rukun Haji</Text>
        <AccordionList
          data={RukunHaji}
          customTitle={(item) => <Text>{item.title}</Text>}
          customBody={(item) => <Text>{item.body}</Text>}
          animationDuration={400}
          expandMultiple={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default Guide;

const styles = StyleSheet.create({
  container: {
    paddingVertical: "5%",
    paddingHorizontal: "3%",
    height: "100%",
    backgroundColor: "#cfe2f3",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 40,
    paddingHorizontal: 30
  },
});
