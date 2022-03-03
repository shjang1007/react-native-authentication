import React, {useState} from "react";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { useForm } from "react-hook-form";

// import Components
import Logo from "../../components/Logo"
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import OAuthSignInButtons from "../../components/OAuthSignInButtons";

const SignInScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { control, handleSubmit, formState: {errors} } = useForm();

    // set up navigation
    const navigation = useNavigation();

    const onSignInPressed = (data) => {
        const response = data;
    }

    const onSignUpPressed = () => {
        //redirect to sign up screen
        navigation.navigate("SignUp")
    }

    const onForgotPasswordPressed = () => {
        // redirect to forgot password screen
        navigation.navigate("ForgotPassword")
    }

    return(
        <ScrollView>
            <View style={styles.container}>
                <Logo/>

                <CustomInput 
                    placeholderText="Enter email address"
                    name="email"
                    control={ control }
                    rules={{ required: "Email address is required" }}  
                />
                <CustomInput 
                    placeholderText="Enter password"
                    name="password"
                    control={ control } 
                    rules={{ required: "Password is required" }}
                />

                <CustomButton
                    text="Sign In"
                    onPress={handleSubmit(onSignInPressed)}
                    type="primary"
                />
                <CustomButton
                    text="Forgot Password?"
                    onPress={onForgotPasswordPressed}
                    type="tertiary"
                />

                <OAuthSignInButtons/>

                <CustomButton
                    text="Don't have an account?"
                    onPress={onSignUpPressed}
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