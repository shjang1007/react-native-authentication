import React from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";

// import image link
import logo from "../../../assets/images/logo_512.png"

const SignInScreen = () => {
    const { height } = useWindowDimensions();

    return(
        <View style={styles.container}>
            <Image 
                source={logo}
                style={styles.logo, { height: height * 0.2 }}
                resizeMode="contain"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: "center"
    },
    logo: {
        width: "30%",
        maxWidth: 500,
        maxHeight: 500,
    }
})

export default SignInScreen;