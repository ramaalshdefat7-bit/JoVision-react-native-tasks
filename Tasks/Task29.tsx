
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
  Modal,
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
  const [modalVisible, setModalVisible] = useState(false);
  const [imageNumber, setImageNumber] = useState('');
  const scrollRef = useRef<ScrollView>(null);

  const goToImage = () => {
    const number = Number(imageNumber);

    if (
      !Number.isInteger(number) ||
      number < 1 ||
      number > images.length
    ) {
      Alert.alert('Invalid Number', 'Enter a number from 1 to 10.');
      return;
    }

    scrollRef.current?.scrollTo({
      x: (number - 1) * 166,
      animated: true,
    });

    setModalVisible(false);
    setImageNumber('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task 29 - Find an Image</Text>

      <Button
        title="Go to Image Number"
        onPress={() => setModalVisible(true)}
      />

      <ScrollView
        ref={scrollRef}
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

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Enter image number (1-10)
            </Text>

            <TextInput
              style={styles.input}
              value={imageNumber}
              onChangeText={setImageNumber}
              keyboardType="number-pad"
              placeholder="Image number"
            />

            <Button title="Go" onPress={goToImage} />

            <View style={styles.space} />

            <Button
              title="Cancel"
              onPress={() => setModalVisible(false)}
              color="#777777"
            />
          </View>
        </View>
      </Modal>
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
    marginBottom: 20,
  },
  scroll: {
    flexGrow: 0,
    marginTop: 20,
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
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 25,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
  },
  modalTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888888',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 18,
  },
  space: {
    height: 10,
  },
});
