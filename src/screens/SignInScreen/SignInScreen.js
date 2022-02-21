import React from "react";
import { View, StyleSheet } from "react-native";

// import Components
import Logo from "../../components/Logo"
import CustomInput from "../../components/CustomInput";

const SignInScreen = () => {
    return(
        <View style={ styles.container }>
            <Logo/>
            <CustomInput/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 20
    },
})

export default SignInScreen;