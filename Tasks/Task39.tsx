
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import {configureStore, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Provider, useDispatch, useSelector} from 'react-redux';

type Task39State = {
  text: string;
};

const initialState: Task39State = {
  text: '',
};

const task39Slice = createSlice({
  name: 'task39',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    task39: task39Slice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const {setText} = task39Slice.actions;

function ComponentOne() {
  const text = useSelector(
    (state: RootState) => state.task39.text,
  );
  const dispatch = useDispatch<AppDispatch>();

  function handleChangeText(value: string) {
    dispatch(setText(value));
  }

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Component One</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter text here"
        value={text}
        onChangeText={handleChangeText}
      />

      <Text style={styles.result}>
        Current text: {text || 'Nothing entered yet'}
      </Text>
    </View>
  );
}

function Task39Content() {
  const [isVisible, setIsVisible] = useState(true);

  function handleToggleComponent() {
    setIsVisible(previousValue => !previousValue);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task 39 - Redux</Text>

      <Button
        title={isVisible ? 'Hide Component One' : 'Show Component One'}
        onPress={handleToggleComponent}
      />

      {isVisible && <ComponentOne />}
    </View>
  );
}

export default function Task39() {
  return (
    <Provider store={store}>
      <Task39Content />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
  },
  inputContainer: {
    marginTop: 25,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  result: {
    marginTop: 15,
    fontSize: 16,
  },
});
