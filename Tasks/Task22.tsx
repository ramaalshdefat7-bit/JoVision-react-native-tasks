import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

type MyFunctionPageProps = {
  text: string;
  onChangeText: (value: string) => void;
};

function MyFunctionPage({
  text,
  onChangeText,
}: MyFunctionPageProps) {
  return (
    <View style={styles.page}>
      <Text style={styles.label}>Enter your text:</Text>

      <TextInput
        style={styles.input}
        value={text}
        onChangeText={onChangeText}
        placeholder="Write something here..."
      />

      <Text style={styles.result}>
        Your text: {text}
      </Text>
    </View>
  );
}

export default function Task22() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <MyFunctionPage
        text={text}
        onChangeText={setText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  page: {
    padding: 20,
    backgroundColor: '#E8F0FE',
    borderRadius: 12,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#777777',
    borderRadius: 8,
    padding: 12,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
  },
});