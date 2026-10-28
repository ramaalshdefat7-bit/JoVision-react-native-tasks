
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
} from 'react-native';
import {
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';

type RootTabParamList = {
  Screen1: undefined;
  Screen2: undefined;
  Screen3: undefined;
  Screen4: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

type ScreenName = keyof RootTabParamList;

type ScreenProps = {
  currentScreen: ScreenName;
};

function Page({currentScreen}: ScreenProps) {
  const navigation =
    useNavigation<BottomTabNavigationProp<RootTabParamList>>();

  const otherScreens = (
    ['Screen1', 'Screen2', 'Screen3', 'Screen4'] as ScreenName[]
  ).filter(screen => screen !== currentScreen);

  return (
    <ScrollView contentContainerStyle={styles.screen}>
      <Text style={styles.text}>
        {currentScreen.replace('Screen', 'Screen ')}
      </Text>

      <Text style={styles.subtitle}>
        Navigate to another screen
      </Text>

      {otherScreens.map(screen => (
        <View style={styles.button} key={screen}>
          <Button
            title={`Go to ${screen.replace('Screen', 'Screen ')}`}
            onPress={() => navigation.navigate(screen)}
          />
        </View>
      ))}
    </ScrollView>
  );
}

function Screen1() {
  return <Page currentScreen="Screen1" />;
}

function Screen2() {
  return <Page currentScreen="Screen2" />;
}

function Screen3() {
  return <Page currentScreen="Screen3" />;
}

function Screen4() {
  return <Page currentScreen="Screen4" />;
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
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 20,
  },
  button: {
    width: 230,
    marginVertical: 6,
  },
});
