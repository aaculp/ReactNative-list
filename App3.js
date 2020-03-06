import React, { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import GoalItem from './component/GoalItem'
import GoalInput from './component/GoalInput'

export default function App3() {
    const [courseGoals, setCourseGoals] = useState([])

    const addTextHandler = (goalTitle) => {
        setCourseGoals(currentGoals => [
            ...currentGoals,
            { key: Math.random().toString(), text: goalTitle }
        ])
    }

    return (
        <View style={styles.container}>
            <GoalInput passingAddTextHandler={addTextHandler} />
            <FlatList
                keyExtractor={(item, index) => item.key}
                data={courseGoals}
                renderItem={itemData => (
                    <GoalItem text = {itemData.item.text} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
    },
});
