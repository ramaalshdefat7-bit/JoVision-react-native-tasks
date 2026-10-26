import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';

const images = [
  require('../Resource/flower.jpg'),
  require('../Resource/moon.jpg'),
  require('../Resource/sea.jpg'),
  require('../Resource/flower.jpg'),
  require('../Resource/moon.jpg'),
  require('../Resource/sea.jpg'),
  require('../Resource/flower.jpg'),
  require('../Resource/moon.jpg'),
  require('../Resource/sea.jpg'),
  require('../Resource/flower.jpg'),
];

export default function Task29() {
  const [imageNumber, setImageNumber] = useState('');
  const imageRefs = useRef<any[]>([]);

  const goToImage = () => {
    const number = Number(imageNumber);

    if (
      imageNumber.trim() === '' ||
      !Number.isInteger(number) ||
      number < 1 ||
      number > images.length
    ) {
      Alert.alert('Invalid Number', 'Enter a number from 1 to 10.');
      return;
    }

    Alert.alert(
      'Image Selected',
      `You selected image number ${number}.`,
    );

    setImageNumber('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task 29 - Image List</Text>

      <Text style={styles.instruction}>
        Enter an image number from 1 to 10
      </Text>

      <TextInput
        style={styles.input}
        value={imageNumber}
        onChangeText={setImageNumber}
        keyboardType="number-pad"
        placeholder="Image number"
      />

      <Button title="Find Image" onPress={goToImage} />

      <ScrollView
  horizontal
  showsHorizontalScrollIndicator
  style={styles.scroll}
>
        {images.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              Alert.alert(
                'Image Selected',
                `You selected image number ${index + 1}.`,
              )
            }
          >
            <Image
              source={image}
              style={styles.image}
              resizeMode="cover"
            />

            <Text style={styles.number}>
              Image {index + 1}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  instruction: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888888',
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 25,
    marginBottom: 12,
    fontSize: 18,
  },
  scroll: {
    flexGrow: 0,
    marginTop: 25,
  },
  image: {
    width: 150,
    height: 150,
    marginHorizontal: 8,
    borderRadius: 10,
  },
  number: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
  },
});