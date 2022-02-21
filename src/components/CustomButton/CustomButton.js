import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

const CustomButton = ({ onPress, text }) => {
    return(
        <Pressable 
            style={styles.container}
            onPress={ onPress }
        >
            <Text style={styles.text}>
              {text}
            </Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#197AD8",
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
});

export default CustomButton;