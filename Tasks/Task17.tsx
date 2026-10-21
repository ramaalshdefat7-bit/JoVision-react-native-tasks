import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default function Task17() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button
        title={isVisible ? 'Hide' : 'Show'}
        onPress={() => setIsVisible(!isVisible)}
      />

      {isVisible && <Text style={styles.name}>Rama</Text>}
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
  name: {
    fontSize: 24,
    marginTop: 20,
  },
});