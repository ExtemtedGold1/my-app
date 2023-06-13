import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Reminder</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: '#1d67de',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize:20,
        fontWeight:'bold',
    }
})