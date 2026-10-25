
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  Alert,
  StyleSheet,
} from 'react-native';

const images = [
  require('../Resource/flower.jpg'),
  require('../Resource/moon.jpg'),
  require('../Resource/sea.jpg'),
];

export default function Task27() {
  const [selectedImage, setSelectedImage] = useState(0);

  const chooseImage = () => {
    Alert.alert(
      'Choose an Image',
      'Select image number 1, 2, or 3',
      [
        {text: '1', onPress: () => setSelectedImage(0)},
        {text: '2', onPress: () => setSelectedImage(1)},
        {text: '3', onPress: () => setSelectedImage(2)},
        {text: 'Cancel', style: 'cancel'},
      ],
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task 27 - Choose an Image</Text>

      <Image
        source={images[selectedImage]}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.label}>
        Selected image: {selectedImage + 1}
      </Text>

      <Button title="Choose Image" onPress={chooseImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 280,
    height: 280,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 20,
  },
});
