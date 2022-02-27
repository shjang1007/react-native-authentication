import React, {useState} from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

// import Components
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const ForgotPasswordScereen = () => {
    const [email, setEmail] = useState("");
    
    // set up navigation
    const navigation = useNavigation();

    const onSendPressed = () => {
        // send verification code to email and redirect to reset password screen
        navigation.navigate("ResetPassword");
    }

    const onSignInPressed = () => {
        // redirect to sign in page
        navigation.navigate("SignIn");
    }

    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Forgot your Password?</Text>

                <CustomInput 
                    placeholderText="Enter email"
                    text={email}
                    setText={setEmail}    
                />

                <CustomButton
                    text="Send"
                    onPress={onSendPressed}
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

export default ForgotPasswordScereen;