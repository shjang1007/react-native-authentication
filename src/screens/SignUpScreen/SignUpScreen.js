import React, {useState} from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

// import Components
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import OAuthSignInButtons from "../../components/OAuthSignInButtons";

const SignUpScreen = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // set up navigation
    const navigation = useNavigation();
    

    const onRegisterPressed = () => {
        // create a new user and redirect to verify account
        navigation.navigate("VerifyAccount");
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
                    text={firstName}
                    setText={setFirstName}    
                />

                <CustomInput 
                    placeholderText="Enter last name"
                    text={lastName}
                    setText={setLastName}    
                />

                <CustomInput 
                    placeholderText="Enter email address"
                    text={email}
                    setText={setEmail}    
                />

                <CustomInput 
                    placeholderText="Enter password"
                    text={password}
                    setText={setPassword}
                    secureTextEntry 
                />

                <CustomButton
                    text="Sign Up"
                    onPress={onRegisterPressed}
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