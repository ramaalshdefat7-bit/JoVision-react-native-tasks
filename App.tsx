import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Task16 from './Tasks/Task16';
import Task17 from './Tasks/Task17';
import Task18 from './Tasks/Task18';
import Task19 from './Tasks/Task19';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Task19 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});