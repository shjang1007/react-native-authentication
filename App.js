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

import Amplify from "aws-amplify";
import awsconfig from "./src/aws-exports";

// import urlOpner
import { urlOpener } from "./src/utils/urlOpener";

// import Components
import Navigation from "./src/navigation";
import { AuthProvider } from "./src/contexts/AuthContext";

// configure AWS Amplify
Amplify.configure({
  ...awsconfig,
  oauth: {
    ...awsconfig.oauth,
    urlOpener
  }
});

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AuthProvider>
        <Navigation/>
      </AuthProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
