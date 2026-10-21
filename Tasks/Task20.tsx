import React, {Component, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

class MyClassPage extends Component {
  componentDidMount() {
    console.log('MyClassPage is now visible');
  }

  componentWillUnmount() {
    console.log('MyClassPage is now hidden');
  }

  render() {
    return (
      <View style={styles.page}>
        <Text style={styles.text}>Hello from MyClassPage!</Text>
      </View>
    );
  }
}

export default function Task20() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title="Show"
        onPress={() => setIsVisible(!isVisible)}
      />

      {isVisible && <MyClassPage />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  page: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#E8F0FE',
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
  },
});