import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

const CustomButton = ({ onPress, text, type="primary" }) => {
    return(
        <Pressable 
            style={[styles.container, styles[`${type}Container`]]}
            onPress={ onPress }
        >
            <Text style={[styles.text, styles[`${type}Text`]]}>
              {text}
            </Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 15,
        borderRadius: 5,
        marginVertical: 5,
        alignItems: "center"
    },
    text: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
    primaryContainer: {
        backgroundColor: "#197AD8",
    },
    secondaryContainer: {

    },
    primaryText: {

    },
    secondaryText: {
        color: "black",
        fontWeight: "300"
    }
});

export default CustomButton;