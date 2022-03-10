import React, {useState, useContext} from "react";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { useForm } from "react-hook-form";

// import Context
import { AuthContext } from "../../contexts/AuthContext";

// import Components
import Logo from "../../components/Logo"
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import OAuthSignInButtons from "../../components/OAuthSignInButtons";

const SignInScreen = () => {
    const { setCurrentUser } = useContext(AuthContext);

    const [loading, setLoading] = useState(false);

    const { control, handleSubmit, formState: {errors} } = useForm();

    // set up navigation
    const navigation = useNavigation();

    const onSignInPressed = async (data) => {
        const { email, password } = data;

        if (loading) {
            return;
        }

        setLoading(true);

        try {
            const response = await Auth.signIn(email, password);
            setCurrentUser(response);
        } catch (e) {
            Alert.alert("Failed to Sign in", e.message)
        }

        setLoading(false);
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
                    secureTextEntry={true}
                    control={ control } 
                    rules={{ required: "Password is required" }}
                />

                <CustomButton
                    text="Sign In"
                    onPress={handleSubmit(onSignInPressed)}
                    type="primary"
                    loading={loading}
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