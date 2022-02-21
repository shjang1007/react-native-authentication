import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

// import Components
import Logo from "../../components/Logo"

const SignInScreen = () => {
    return(
        <View style={ styles.container }>
            <Logo/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center"
    },
})

export default SignInScreen;