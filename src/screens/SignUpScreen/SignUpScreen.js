import React, {useState} from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

// import Components
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import OAuthSignInButtons from "../../components/OAuthSignInButtons";

const SignUpScreen = () => {
    const { control, handleSubmit } = useForm();

    // set up navigation
    const navigation = useNavigation();
    

    const onRegisterPressed = (data) => {
        // create a new user and redirect to verify account
        // navigation.navigate("VerifyAccount");
    }

    const onSignInPressed = () => {
        // redirect to sign in screen
        navigation.navigate("SignIn");
    }

    const onTermConditionPressed = () => {
        console.warn("Terms and Condition Link Pressed")
    }

    const onPrivacyPressed = () => {
        console.warn("Priacy Statement Link Pressed")
    }

    return(
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Join Shoot for Ball</Text>

                <CustomInput 
                    placeholderText="Enter first name"
                    name="firstName"
                    control={control}
                    rules={{ 
                        required: "First name is required", 
                        pattern: {
                            value: /^[A-Za-z\s]*$/,
                            message: "Only letters are allowed in this field"
                        }
                    }}
                />
                <CustomInput 
                    placeholderText="Enter last name"
                    name="lastName"
                    control={control} 
                    rules={{ 
                        required: "Last name is required",
                        pattern: {
                            value: /^[A-Za-z\s]*$/,
                            message: "Only letters are allowed in this field"
                        } 
                    }}
                />
                <CustomInput 
                    placeholderText="Enter email address"
                    name="email"
                    control={control} 
                    rules={{ 
                        required: "Email is required",
                        pattern: {
                            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: "Must be valid email format"
                        }
                    }} 
                />
                <CustomInput 
                    placeholderText="Enter password"
                    name="password"
                    control={control}
                    secureTextEntry 
                    rules={{ 
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters"
                        },
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z])/,
                            message: "Password must contain at least one lower case letter, one upper case letter, a number, and one special character"
                        }
                
                    }}
                />

                <CustomButton
                    text="Sign Up"
                    onPress={handleSubmit(onRegisterPressed)}
                    type="primary"
                />

                <Text style={styles.disclaimer}>
                    By clicking Sign up, you agree to our{" "}
                    <Text style={styles.textLink} onPress={onTermConditionPressed}>
                        Terms & Conditions
                    </Text>{" "}
                    and{" "} 
                    <Text style={styles.textLink} onPress={onPrivacyPressed}>
                        Privacy Statement
                    </Text>
                    .
                </Text>

                <OAuthSignInButtons/>

                <CustomButton
                    text="Have an account? Sign In"
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
    disclaimer: {
        fontWeight: "300",
        fontSize: 12 ,
        alignSelf: "flex-start",
        marginVertical: 10
    },

    textLink: {
        color: "red",
        textDecorationLine: "underline"
    }
})

export default SignUpScreen;