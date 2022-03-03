import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Controller } from "react-hook-form";

const CustomInput = ({name, control, placeholderText, secureTextEntry}) => {
    return(
        <View style={ styles.container }>
            <Controller
                control={ control }
                name={ name }
                render={({field: {value, onChange, onBlur}})=> {
                    return(
                        <TextInput 
                            value={value}
                            onChangeText={onChange}
                            placeholder={placeholderText}
                            style={styles.input}
                            secureTextEntry={secureTextEntry}
                            autoCapitalize="none"
                        />
                    )
                }}

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
        padding: 15,
        marginVertical: 5
    },
    input: {
        fontSize: 15,
        fontWeight: "500"
    }
});

export default CustomInput;