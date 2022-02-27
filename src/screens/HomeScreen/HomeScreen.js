import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

const Home = () => {
    return(
        <View style={ styles.container }>
            <Text style={ styles.title }>Open Runs</Text>
            <ScrollView>
                <View style={ styles.runContainer }>
                    <Text style={ styles.runTitle }>
                        Really cool gym session
                    </Text>
                    <Text style={ styles.runDescription }>
                        Hey guys, let's play nice and do our best to nurtuer a friendly environment.
                    </Text>
                    <View style={ styles.runDetails }>
                        <FontAwesomeIcon icon={ faCircleUser } size={15}/>
                        <Text style={ styles.runDetailText }>
                            12/20 · $25 per person
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 20
    },
    title: {
        fontSize: 32,
        fontWeight: "300",
        marginBottom: 15,
    },
    runContainer: {
        borderBottomWidth: 1,
        borderColor: "black"
    }, 
    runTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 8
    },
    runDescription: {
        fontSize: 14,
        marginVertical: 8
    },
    runDetails: {
        flexDirection: "row",
        marginVertical: 15
    },
    runDetailText: {
        fontSize: 12,
        fontWeight: "bold",
        marginHorizontal: 3
    }
});

export default Home;