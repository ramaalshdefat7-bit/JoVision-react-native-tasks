
import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import {configureStore, createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {Provider, connect} from 'react-redux';

type Task40State = {
  text: string;
};

const task40Slice = createSlice({
  name: 'task40',
  initialState: {text: ''} as Task40State,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    task40: task40Slice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
const {setText} = task40Slice.actions;

type ComponentOneProps = {
  text: string;
  setText: (value: string) => void;
};

class ComponentOne extends Component<ComponentOneProps> {
  handleChangeText = (value: string) => {
    this.props.setText(value);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Component One (Class)</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter text here"
          value={this.props.text}
          onChangeText={this.handleChangeText}
        />

        <Text style={styles.result}>
          Current text: {this.props.text || 'Nothing entered yet'}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  text: state.task40.text,
});

const mapDispatchToProps = {
  setText,
};

const ConnectedComponentOne = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComponentOne);

type Task40ContentState = {
  isVisible: boolean;
};

class Task40Content extends Component<{}, Task40ContentState> {
  state: Task40ContentState = {
    isVisible: true,
  };

  handleToggleComponent = () => {
    this.setState(previousState => ({
      isVisible: !previousState.isVisible,
    }));
  };

  render() {
    const {isVisible} = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Task 40 - Redux Class</Text>

        <Button
          title={isVisible ? 'Hide Component One' : 'Show Component One'}
          onPress={this.handleToggleComponent}
        />

        {isVisible && <ConnectedComponentOne />}
      </View>
    );
  }
}

export default function Task40() {
  return (
    <Provider store={store}>
      <Task40Content />
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
