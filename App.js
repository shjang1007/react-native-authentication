/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';

// import Components
import SignInScreen from './src/screens/SignInScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SignInScreen/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flext: 1,
  }
});

export default App;
