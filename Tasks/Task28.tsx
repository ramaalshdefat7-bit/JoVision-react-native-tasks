
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  StyleSheet,
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

export default function Task28() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task 28 - Image List</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator
      >
        {images.map((image, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              Alert.alert(
                'Image Selected',
                `You have selected image : ${index + 1}`,
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
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
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
