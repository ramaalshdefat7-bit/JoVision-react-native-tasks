
import React, {
  Component,
  createContext,
  useContext,
  useState,
} from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type SharedTextContextType = {
  sharedText: string;
  setSharedText: (text: string) => void;
};

const SharedTextContext = createContext<SharedTextContextType>({
  sharedText: '',
  setSharedText: () => {},
});

// Component One: Class component that renders a Text component

class ComponentOne extends Component {
  static contextType = SharedTextContext;

  render() {
    const {sharedText} = this.context as React.ContextType<
      typeof SharedTextContext
    >;

    return (
      <Text style={styles.sharedText}>
        Shared text: {sharedText || 'Nothing entered yet'}
      </Text>
    );
  }
}


// Component Two: Functional component with TextInput and Component One
function ComponentTwo({
  number,
}: {
  number: number;
}): React.JSX.Element {
  const {sharedText, setSharedText} = useContext(SharedTextContext);

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>
        Component {number}
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Type something here..."
        placeholderTextColor="#888888"
        value={sharedText}
        onChangeText={setSharedText}
      />

      <ComponentOne />
    </View>
  );
}

// Main component
function Task38(): React.JSX.Element {
  const [sharedText, setSharedText] = useState<string>('');

  return (
    <SharedTextContext.Provider
      value={{sharedText, setSharedText}}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>
          Task 38 - Context & Provider
        </Text>

        <Text style={styles.instruction}>
          Type in any input and watch all four components update.
        </Text>

        <ComponentTwo number={1} />
        <ComponentTwo number={2} />
        <ComponentTwo number={3} />
        <ComponentTwo number={4} />
      </ScrollView>
    </SharedTextContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F5F5F5',
    flexGrow: 1,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginBottom: 10,
  },
  instruction: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666666',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    marginBottom: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#AAAAAA',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
    color: '#222222',
  },
  sharedText: {
    fontSize: 16,
    color: '#6750A4',
    paddingVertical: 4,
  },
});

export default Task38;
