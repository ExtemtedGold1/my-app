import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Reminder</Text>
            <Button style={styles.aboutButton} title='About'></Button>
            <Button title="Settings"/>
        </View>
    )
}

const styles = StyleSheet.create({
    // header: {
    //     height: 80,
    //     paddingTop: 38,
    //     backgroundColor: '#1d67de',
    // },
    header: {
        height: 82,
        paddingTop: 38,
        padding: 10,
        backgroundColor: 'lightblue',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize:25,
        fontWeight:'bold',
    },
    aboutButton: {
        width: 50,
        height: 20,
    }
})