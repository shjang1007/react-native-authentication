import React, {useState} from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

// import Components
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

// Regex Constant
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const ForgotPasswordScereen = () => {
    const { control, handleSubmit } = useForm();
    
    // set up navigation
    const navigation = useNavigation();

    const onSendPressed = (data) => {
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
                    name="email"
                    control={control}
                    rules={{
                        required: "Email address is required",
                        pattern: {
                            value: EMAIL_REGEX,
                            message: "Must be valid email format"
                        }
                    }}
                />

                <CustomButton
                    text="Send"
                    onPress={handleSubmit(onSendPressed)}
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