import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import App2 from './App2';
import App3 from './App3';

export default class App extends Component {
  state = {
    text: 'This is the default text',
  }

  onButtonPress = () => {
    this.setState({
      text: 'This is new text',
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        {/* <Text> {this.state.text} </Text>
        <Button title="Change Text" onPress={() => this.onButtonPress()} />
        <App2 /> */}
        <App3 />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
