import React, {useState} from "react";
import { StyleSheet, Alert, View, ScrollView, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

// import Components
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const VerifyAccountScreen = () => {
    const [loading, setLoading] = useState(false);

    const { control, handleSubmit } = useForm();

    // set up navigation
    const route = useRoute();
    const navigation = useNavigation();

    const onConfirmVerficationCodePressed = async (data) => {
        if (loading) {
            return;
        }
        
        setLoading(true);
        
        try {
            const email = route.params.email;
            const code = data.verificationCode;

            const response = await Auth.confirmSignUp(email, code);
        } catch (e) {
            Alert.alert("Invalid", e.message)
        }

        setLoading(false);
    }

    const onSignInPressed = () => {
        // redirect to sign in screen
        navigation.navigate("SignIn");
    }

    const onResendCodePressed = async () => {
        try {
            await Auth.resendSignUp(email);

            Alert.alert("Code Sent", "Please check your email")
        } catch (e) {
            Alert.alert("Invalid", e.message)
        }
    }
    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Verify your Account</Text>

                <CustomInput 
                    placeholderText="Enter verification code"
                    name="verificationCode"
                    control={ control }
                    rules={{
                        required: "Verification Code is required",
                    }} 
                />

                <CustomButton
                    text="Confirm"
                    onPress={handleSubmit(onConfirmVerficationCodePressed)}
                    type="primary"
                    loading={loading}
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