import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

const CustomButton = ({ onPress, text, type }) => {
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
    primaryContainer: {
        backgroundColor: "#197AD8",
    },
    secondaryContainer: {
        borderWidth: 0.7,

    },
    tertiaryContainer: {
    },
    text: {
        fontSize: 15,
        fontWeight: "bold"
    },
    primaryText: {
        color: "white",
    },
    secondaryText: {
        fontWeight: "600"
    },
    tertiaryText: {
        fontWeight: "300"
    }
});

export default CustomButton;