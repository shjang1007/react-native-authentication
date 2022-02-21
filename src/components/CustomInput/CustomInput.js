import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

const CustomInput = ({text, setText, placeholderText, secureTextEntry}) => {
    return(
        <View style={ styles.container }>
            <TextInput 
                value={text}
                onChangeText={setText}
                placeholder={placeholderText}
                style={styles.input}
                secureTextEntry={secureTextEntry}
                autoCapitalize="none"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#D3D3D3",
        borderRadius: 5,
        padding: 10,
        marginVertical: 5
    },
    input: {
        fontSize: 15,
        fontWeight: "500"
    }
});

export default CustomInput;