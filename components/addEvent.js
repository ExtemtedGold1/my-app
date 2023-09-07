import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View, Alert } from "react-native";

export default function AddEvent({submitHandler}) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }

    const handleAddEvent = () => {
        if (text) {
            submitHandler(text);
            setText('');
        } else {
          Alert.alert('Błąd', 'Pole nie może być puste', [
            {text: 'Ok', onPress: () => console.log('alert')}
          ]);
        }
    }

    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder="Nowe Wydarzenie"
            onChangeText={changeHandler}
            value={text}
            />
            <Button onPress={handleAddEvent} title='AddEvent' color='#1d67de' />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})