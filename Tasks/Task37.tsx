
import React, {useState} from 'react';
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';

function generateRandomWord(length: number): string {
  let result = '';
  const characters = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < length; i++) {
    result += characters.charAt(
      Math.floor(Math.random() * characters.length),
    );
  }

  return result;
}

function generateRandomWords(): string[] {
  const words: string[] = [];

  for (let i = 0; i < 100; i++) {
    const length = 3 + Math.floor(Math.random() * 8);
    words.push(generateRandomWord(length));
  }

  return words;
}

function Task37(): React.JSX.Element {
  const [words, setWords] = useState<string[]>(generateRandomWords);
  const [refreshing, setRefreshing] = useState(false);

  function handleRefresh(): void {
    setRefreshing(true);
    setWords(generateRandomWords());
    setRefreshing(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Task 37 - Pull to Refresh
      </Text>

      <Text style={styles.instruction}>
        Pull down to refresh the words
      </Text>

      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={['#6750A4']}
          />
        }>
        {words.map((word, index) => (
          <Text key={index} style={styles.word}>
            {index + 1}. {word}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#333333',
  },
  instruction: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 12,
    color: '#666666',
  },
  scrollView: {
    flex: 1,
  },
  word: {
    fontSize: 18,
    color: '#222222',
    backgroundColor: '#FFFFFF',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
  },
});

export default Task37;
