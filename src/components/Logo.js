import React from "react";
import { Image, Text, StyleSheet, useWindowDimensions } from "react-native";

// import image link
import logo from "../../assets/images/logo_512.png"

const Logo = () => {
    const { height } = useWindowDimensions();

    return(
        <>
            <Image 
                source={logo}
                style={styles.logo, { height: height * 0.2 }}
                resizeMode="contain"
            />
            <Text style={ styles.logoTitle }>
                Shoot for Ball
            </Text>
        </>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: "30%",
        maxWidth: 500,
        maxHeight: 500,
    },

    logoTitle: {
       fontSize: 25,
       fontWeight: "bold",
       color: "#5B5B5B" 
    }
})

export default Logo;