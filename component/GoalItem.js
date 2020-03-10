import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const GoalItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete}>
            <View style={styles.listItem}>
                <Text>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        backgroundColor: 'red',
        borderColor: 'black'
    },
})

export default GoalItem