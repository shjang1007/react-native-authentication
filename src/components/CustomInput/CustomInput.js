import React from "react";
import { View, TextInput, StyleSheet, Text, Platform } from "react-native";
import { Controller } from "react-hook-form";

const CustomInput = ({name, control, rules={}, placeholderText, secureTextEntry}) => {
    return(
        <Controller
            control={ control }
            name={ name }
            rules={rules}
            render={({field: {value, onChange, onBlur}, fieldState: {error}})=> {
                return(
                    <>
                        <View style={[styles.container, Platform.OS === "android" && styles.containerAndroid]}>
                            <TextInput 
                                value={value}
                                onChangeText={onChange}                           
                                placeholder={placeholderText}
                                style={styles.input}
                                secureTextEntry={secureTextEntry}
                                autoCapitalize="none"
                            />
                        </View>
                        { error && <Text style={styles.errorMessage}>{error.message}</Text>}
                    </>

                )
            }}

        /> 
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#D3D3D3",
        borderRadius: 5,
        padding: 15,
        marginVertical: 5
    },
    input: {
        fontSize: 15,
        fontWeight: "500"
    },
    errorMessage: {
        alignSelf: "stretch",
        color: "red",
        fontWeight: "300",
        marginLeft: 5
    },
    containerAndroid: {
        paddingVertical: 0
    }
});

export default CustomInput;