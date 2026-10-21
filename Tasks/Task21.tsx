import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function MyFunctionPage() {
  useEffect(() => {
    console.log('MyFunctionPage is now visible');

    return () => {
      console.log('MyFunctionPage is now hidden');
    };
  }, []);

  return (
    <View style={styles.page}>
      <Text style={styles.text}>Hello from MyFunctionPage!</Text>
    </View>
  );
}

export default function Task21() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title="Show"
        onPress={() => setIsVisible(!isVisible)}
      />

      {isVisible && <MyFunctionPage />}
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