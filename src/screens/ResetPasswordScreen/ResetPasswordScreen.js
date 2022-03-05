import React, {useState} from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

// import Components
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

// Regex Constant
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z])/

const ResetPasswordScreen = () => {
    const { control, handleSubmit } = useForm();

    // set up navigation
    const navigation = useNavigation();

    const onSubmitPressed = (data) => {
        // reset password and then redirect the user to sign in screen
        navigation.navigate("SignIn");
    }

    const onSignInPressed = () => {
        // redirect the user to sign in screen
        navigation.navigate("SignIn");
    }

    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Reset your Password</Text>

                <CustomInput 
                    placeholderText="Enter verification code"
                    name="verificationCode"
                    control={control}
                    rules={{
                        required: "Verfication Code is required"
                    }} 
                />

                <CustomInput 
                    placeholderText="Enter password"
                    name="password"
                    control={control}
                    secureTextEntry
                    rules={{
                        required: "Password is required",
                        pattern: {
                            value: PASSWORD_REGEX,
                            message: "Password must contain at least one lower case letter, one upper case letter, a number, and one special character"
                        }
                    }} 
                />

                <CustomButton
                    text="Submit"
                    onPress={handleSubmit(onSubmitPressed)}
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