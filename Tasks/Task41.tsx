
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

type RootTabParamList = {
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
  Screen4: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

function Screen1() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Screen 1</Text>
    </View>
  );
}

function Screen2() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Screen 2</Text>
    </View>
  );
}

function Screen3() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Screen 3</Text>
    </View>
  );
}

function Screen4() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Screen 4</Text>
    </View>
  );
}

export default function Task41() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          tabBarActiveTintColor: '#7C4DFF',
          tabBarInactiveTintColor: '#888',
        }}>
        <Tab.Screen
          name="Screen1"
          component={Screen1}
          options={{title: 'Screen 1', tabBarLabel: 'Screen 1'}}
        />
        <Tab.Screen
          name="Screen2"
          component={Screen2}
          options={{title: 'Screen 2', tabBarLabel: 'Screen 2'}}
        />
        <Tab.Screen
          name="Screen3"
          component={Screen3}
          options={{title: 'Screen 3', tabBarLabel: 'Screen 3'}}
        />
        <Tab.Screen
          name="Screen4"
          component={Screen4}
          options={{title: 'Screen 4', tabBarLabel: 'Screen 4'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333333',
  },
});
