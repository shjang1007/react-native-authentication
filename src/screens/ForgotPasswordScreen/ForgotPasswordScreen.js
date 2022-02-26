import React, {useState} from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";

// import Components
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const ForgotPasswordScereen = () => {
    const [email, setEmail] = useState("");    

    const onSendPressed = () => {
        console.warn("Send Button Pressed");
    }

    const onSignInPressed = () => {
        console.warn("Back to Sign In Button Pressed")
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