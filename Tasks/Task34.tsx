
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import useCurrentTime from './useCurrentTime';

export default function Task34() {
  const currentTime = useCurrentTime();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Time</Text>

      <Text style={styles.time}>
        {currentTime.toLocaleTimeString()}
      </Text>

      <Text style={styles.date}>
        {currentTime.toLocaleDateString()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
  },
  time: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2563EB',
    marginBottom: 12,
  },
  date: {
    fontSize: 20,
    color: '#555555',
  },
});
