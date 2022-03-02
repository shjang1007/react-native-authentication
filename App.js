/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
} from "react-native";

import Amplify, { Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";

// import Components
import Navigation from "./src/navigation";

// configure AWS Amplify
Amplify.configure(awsconfig);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
