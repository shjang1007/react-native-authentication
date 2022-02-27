import React, {useState} from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

// import Components
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const VerifyAccountScreen = () => {
    const [verificationCode, setVerificationCode] = useState("");   
    
    // set up navigation
    const navigation = useNavigation();

    const onConfirmVerficationCodePressed = () => {
        // if verified with correct code, redirect to Home Screen
        navigation.navigate("Home");
    }

    const onSignInPressed = () => {
        // redirect to sign in screen
        navigation.navigate("SignIn");
    }

    const onResendCodePressed = () => {
        console.warn("Resend Code Pressed")
    }
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Verify our Account</Text>

                <CustomInput 
                    placeholderText="Enter verification code"
                    text={verificationCode}
                    setText={setVerificationCode}    
                />

                <CustomButton
                    text="Confirm"
                    onPress={onConfirmVerficationCodePressed}
                    type="primary"
                />

                <CustomButton 
                    text="Resend Code"
                    onPress={onResendCodePressed}
                    type="secondary"
                />

                <CustomButton
                    text="Back to Sign in"
                    onPress={onSignInPressed}
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
    title: {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 15,
        color: "#5B5B5B"
    },
    textLink: {
        color: "red",
        textDecorationLine: "underline"
    }
})

export default VerifyAccountScreen;