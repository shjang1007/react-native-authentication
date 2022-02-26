import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";


const CustomButton = ({ onPress, text, type, icon }) => {
    const icons = {
        mail: faEnvelope,
        google: faGoogle,
        apple: faApple
    }

    return(
        <Pressable 
            style={[styles.container, styles[`${type}Container`]]}
            onPress={ onPress }
        >
            {icon && <FontAwesomeIcon icon={icons[icon]} size={ icon === "apple" ? 22 : 20}/>}
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
        borderColor: "#197AD8",
        borderWidth: 1
    },
    oAuthContainer: {
        borderWidth: 0.7,
        flexDirection: "row",
    },
    tertiaryContainer: {
    },
    text: {
        fontSize: 15,
        fontWeight: "bold",
    },
    primaryText: {
        color: "white",
    },
    secondaryText: {
        color: "#197AD8"
    },
    oAuthText: {
        fontWeight: "600",
        textAlign: "center",
        flex: 2
    },
    tertiaryText: {
        fontWeight: "300"
    }
});

export default CustomButton;