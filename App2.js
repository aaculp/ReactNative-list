/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { View, Text, Button } from 'react-native';

export default function App2 () {
    const [defaultText, changedText] = useState('This is using HOOK, React Natives new way of saving state')
    return (
        <View>
            <Text>{defaultText}</Text>
            <Button title='Change Text' onPress={() => changedText('This is new text')} />
        </View>
    )
}

