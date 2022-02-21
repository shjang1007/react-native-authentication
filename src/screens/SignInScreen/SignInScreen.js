import React, {useState} from "react";
import { View, StyleSheet } from "react-native";

// import Components
import Logo from "../../components/Logo"
import CustomInput from "../../components/CustomInput";

const SignInScreen = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
        <View style={styles.container}>
            <Logo/>
            <CustomInput 
                placeholderText="Username"
                text={username}
                setText={setUsername}    
            />
            <CustomInput 
                placeholderText="Password"
                text={password}
                setText={setPassword}
                secureTextEntry 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 20
    },
})

export default SignInScreen;