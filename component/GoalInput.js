import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

const GoalInput = props => {
    const [defaultText, changeText] = useState('')

    const changeTextHandler = enteredText => {
        changeText(enteredText)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder='Add Course Goals'
                value={defaultText}
                onChangeText={changeTextHandler}
            />
            <Button title="Add" onPress={() => props.passingAddTextHandler(defaultText)} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 200,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
})

export default GoalInput
