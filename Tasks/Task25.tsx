
import React, {Component, createRef} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

class MyClassPage extends Component<
  {},
  {text: string}
> {
  state = {
    text: '',
  };

  updateText = (value: string) => {
    this.setState({text: value});
  };

  render() {
    return (
      <View style={styles.page}>
        <Text style={styles.label}>
          Text in MyClassPage:
        </Text>

        <Text style={styles.result}>
          {this.state.text || 'Nothing entered yet'}
        </Text>
      </View>
    );
  }
}

export default class Task25 extends Component {
  pageRef = createRef<MyClassPage>();

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
          Enter text in the parent:
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Write something here..."
          onChangeText={value => {
            this.pageRef.current?.updateText(value);
          }}
        />

        <MyClassPage ref={this.pageRef} />
      </View>
    );
  }
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
