import React, {useState} from "react";
import { View, StyleSheet } from "react-native";

// import Components
import Logo from "../../components/Logo"
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const SignInScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSignInPress = () => {
        console.warn("Sign In Button Pressed");
    }

    const onForgotPasswordPress = () => {
        console.warn("Forgot Password? Button Pressed")
    }

    return(
        <View style={styles.container}>
            <Logo/>
            <CustomInput 
                placeholderText="Username"
                text={username}
                setText={setUsername}    
            />
            <CustomInput 
                placeholderText="Password"
                text={password}
                setText={setPassword}
                secureTextEntry 
            />
            <CustomButton
                text="Sign In"
                onPress={onSignInPress}
            />
            <CustomButton
                text="Forgot Password?"
                onPress={onForgotPasswordPress}
            />
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