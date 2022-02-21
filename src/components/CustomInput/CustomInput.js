import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

const CustomInput = () => {
    return(
        <View style={ styles.container }>
            <TextInput placeholder="placeholder" style={ styles.input } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#D3D3D3",
        borderRadius: 5,
    },
    input: {
    }
});

export default CustomInput;