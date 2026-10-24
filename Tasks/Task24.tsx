import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

type MyFunctionPageHandle = {
  updateText: (value: string) => void;
};

const MyFunctionPage = forwardRef<MyFunctionPageHandle>(
  function MyFunctionPage(_props, ref) {
    const [text, setText] = useState('');

    useImperativeHandle(ref, () => ({
      updateText(value: string) {
        setText(value);
      },
    }));

    return (
      <View style={styles.page}>
        <Text style={styles.label}>
          Text in MyFunctionPage:
        </Text>

        <Text style={styles.result}>
          {text || 'Nothing entered yet'}
        </Text>
      </View>
    );
  },
);

export default function Task24() {
  const pageRef = useRef<MyFunctionPageHandle>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        Enter text in the parent:
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Write something here..."
        onChangeText={value => {
          pageRef.current?.updateText(value);
        }}
      />

      <MyFunctionPage ref={pageRef} />
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
    marginTop: 20,
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
    marginTop: 8,
  },
});