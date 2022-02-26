import React, {useState} from "react";
import { View, StyleSheet, ScrollView } from "react-native";

// import Components
import Logo from "../../components/Logo"
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const SignInScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSignInPress = () => {
        console.warn("Sign In Button Pressed");
    }

    const onSignUpPress = () => {
        console.warn("Dont have an account Button Pressed")
    }

    const onSignInEmailPress = () => {
        console.warn("Sign In Email Button Pressed");
    }

    const onSignInGooglePress = () => {
        console.warn("Sign In Google Button Pressed");
    }

    const onSignInApplePress = () => {
        console.warn("Sign In Apple Button Pressed");
    }

    const onForgotPasswordPress = () => {
        console.warn("Forgot Password? Button Pressed")
    }

    return(
        <ScrollView>
            <View style={styles.container}>
                <Logo/>
                <CustomInput 
                    placeholderText="Enter email address"
                    text={email}
                    setText={setEmail}    
                />
                <CustomInput 
                    placeholderText="Enter password"
                    text={password}
                    setText={setPassword}
                    secureTextEntry 
                />
                <CustomButton
                    text="Sign In"
                    onPress={onSignInPress}
                    type="primary"
                />
                <CustomButton
                    text="Forgot Password?"
                    onPress={onForgotPasswordPress}
                    type="tertiary"
                />
                <CustomButton
                    text="Sign In with Email"
                    onPress={onSignInEmailPress}
                    icon="mail"
                    type="secondary"
                />
                <CustomButton
                    text="Sign In with Google"
                    onPress={onSignInGooglePress}
                    icon="google"
                    type="secondary"

                />
                <CustomButton
                    text="Continue with Apple"
                    onPress={onSignInApplePress}
                    icon="apple"
                    type="secondary"
                />
                <CustomButton
                    text="Don't have an account?"
                    onPress={onSignUpPress}
                    type="tertiary"
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 20
    },
})

export default SignInScreen;