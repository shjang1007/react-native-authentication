import React from "react";
import { View, Image, Text, StyleSheet, useWindowDimensions } from "react-native";

// import image link
import logo from "../../../assets/images/logo_512.png"

const Logo = () => {
    const { height } = useWindowDimensions();

    return(
        <View style={ styles.container }>
            <Image 
                source={logo}
                style={ styles.icon, {height: height * 0.2} }
                resizeMode="contain"
            />
            <Text style={ styles.title }>
                Shoot for Ball
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center",
    },
    icon: {
        width: "40%",
        maxWidth: 300,
        maxHeight: 300,
    },
    title: {
       fontSize: 25,
       fontWeight: "bold",
       color: "#5B5B5B",
    }
})

export default Logo;