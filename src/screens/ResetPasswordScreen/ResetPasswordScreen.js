import React, {useState} from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";

// import Components
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const ResetPasswordScreen = () => {
    const [verificationCode, setVerificationCode] = useState("");    
    const [password, setPassword] = useState("");    

    const onSubmitPressed = () => {
        console.warn("Submit Button Pressed");
    }

    const onSignInPressed = () => {
        console.warn("Back to Sign In Button Pressed")
    }

    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Reset your Password</Text>

                <CustomInput 
                    placeholderText="Enter verification code"
                    text={verificationCode}
                    setText={setVerificationCode}    
                />

                <CustomInput 
                    placeholderText="Enter password"
                    text={password}
                    setText={setPassword}
                    secureTextEntry 
                />

                <CustomButton
                    text="Submit"
                    onPress={onSubmitPressed}
                    type="primary"
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

export default ResetPasswordScreen;