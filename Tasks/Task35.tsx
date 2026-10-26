
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type SavedData = {
  name: string;
  age: string;
  country: string;
  timestamp: string;
};

const STORAGE_KEY = '@Task35:userData';

export default function Task35() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedValue = await AsyncStorage.getItem(STORAGE_KEY);

        if (savedValue !== null) {
          const savedData: SavedData = JSON.parse(savedValue);
          const savedTime = new Date(savedData.timestamp).getTime();
          const currentTime = Date.now();

          if (
            Number.isFinite(savedTime) &&
            currentTime >= savedTime &&
            currentTime - savedTime < 60_000
          ) {
            const {
              name: savedName,
              age: savedAge,
              country: savedCountry,
            } = savedData;

            setName(savedName);
            setAge(savedAge);
            setCountry(savedCountry);
          }
        }
      } catch (error) {
        console.log('Error loading saved data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);


const handleSubmit = async () => {
  const data = {
    name,
    age,
    country,
    timestamp: new Date().toISOString(),
  };

  try {
    console.log('Starting AsyncStorage test');

    await AsyncStorage.setItem(
      '@Task35:userData',
      JSON.stringify(data),
    );

    const result = await AsyncStorage.getItem('@Task35:userData');

    console.log('Saved data:', JSON.stringify(data));
    console.log('Read back data:', result);

    Alert.alert(
      'Storage Test',
      result !== null
        ? 'Data saved and read successfully!'
        : 'Save completed, but no data was returned.',
    );
  } catch (error) {
    console.log('Storage error details:', error);
    console.log('Error type:', typeof error);
    console.log('Error string:', String(error));

    Alert.alert('Storage Error', String(error));
  }
};


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>User Information</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        editable={!loading}
      />

      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        value={age}
        onChangeText={setAge}
        keyboardType="number-pad"
        editable={!loading}
      />

      <Text style={styles.label}>Country</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your country"
        value={country}
        onChangeText={setCountry}
        editable={!loading}
      />

      <Pressable
        style={[styles.button, loading && styles.disabledButton]}
        onPress={handleSubmit}
        disabled={loading}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 28,
    color: '#333333',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#333333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 18,
    fontSize: 16,
    color: '#222222',
  },
  button: {
    backgroundColor: '#2563EB',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 4,
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
