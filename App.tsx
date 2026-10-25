import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import Task16 from './Tasks/Task16';
import Task17 from './Tasks/Task17';
import Task18 from './Tasks/Task18';
import Task19 from './Tasks/Task19';
import Task20 from './Tasks/Task20';
import Task21 from './Tasks/Task21';
import Task22 from './Tasks/Task22';
import Task23 from './Tasks/Task23';
import Task24 from './Tasks/Task24';
import Task25 from './Tasks/Task25';
import Task26 from './Tasks/Task26';
import Task27 from './Tasks/Task27';
import Task28 from './Tasks/Task28';
 
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Task28/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});