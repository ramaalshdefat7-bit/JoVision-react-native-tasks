
import React, {useRef, useState} from 'react';

import {
  Alert,
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import type {ImageSourcePropType} from 'react-native';

type ImageItem = {
  id: string;
  source: ImageSourcePropType;
};

const initialImages: ImageItem[] = [
  {id: '1', source: require('../Resource/flower.jpg')},
  {id: '2', source: require('../Resource/moon.jpg')},
  {id: '3', source: require('../Resource/sea.jpg')},
  {id: '4', source: require('../Resource/sky.jpg')},
  {id: '5', source: require('../Resource/flower.jpg')},
  {id: '6', source: require('../Resource/moon.jpg')},
  {id: '7', source: require('../Resource/sea.jpg')},
  {id: '8', source: require('../Resource/sky.jpg')},
  {id: '9', source: require('../Resource/flower.jpg')},
  {id: '10', source: require('../Resource/moon.jpg')},
];

const ITEM_WIDTH = 172;

export default function Task31() {
  const [images, setImages] = useState<ImageItem[]>(initialImages);
  const [modalVisible, setModalVisible] = useState(false);
  const [imageNumber, setImageNumber] = useState('');

  const listRef = useRef<FlatList<ImageItem>>(null);

  const duplicateImage = (id: string) => {
    setImages(current => {
      const index = current.findIndex(item => item.id === id);

      if (index === -1) {
        return current;
      }

      const original = current[index];

      const newImage: ImageItem = {
        id: `${Date.now()}-${Math.random()}`,
        source: original.source,
      };

      const updated = [...current];
      updated.splice(index + 1, 0, newImage);

      return updated;
    });
  };

  const deleteImage = (id: string) => {
    Alert.alert(
      'Delete Image',
      'Are you sure you want to delete this image?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setImages(current =>
              current.filter(item => item.id !== id),
            );
          },
        },
      ],
    );
  };

  const findImage = () => {
    const trimmedNumber = imageNumber.trim();
    const number = Number(trimmedNumber);

    if (
      trimmedNumber === '' ||
      !Number.isInteger(number) ||
      number < 1 ||
      number > images.length
    ) {
      Alert.alert(
        'Invalid Number',
        `Enter a number between 1 and ${images.length}.`,
      );
      return;
    }

    setModalVisible(false);
    setImageNumber('');

    setTimeout(() => {
      listRef.current?.scrollToIndex({
        index: number - 1,
        animated: true,
        viewPosition: 0.5,
      });
    }, 300);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task 31 - Images</Text>

      <Pressable
        style={styles.findButton}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Find Image</Text>
      </Pressable>

      <Text style={styles.subtitle}>
        Images: {images.length}
      </Text>

      <FlatList
        ref={listRef}
        horizontal
        data={images}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator
        contentContainerStyle={styles.listContent}
        getItemLayout={(_, index) => ({
          length: ITEM_WIDTH,
          offset: ITEM_WIDTH * index,
          index,
        })}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No images left.
          </Text>
        }
        renderItem={({item, index}) => (
          <View style={styles.imageCard}>
            <Pressable
              style={styles.copyButton}
              onPress={() => duplicateImage(item.id)}
              accessibilityRole="button"
              accessibilityLabel="Duplicate image">
              <Text style={styles.copyText}>＋</Text>
            </Pressable>

            <Pressable
              onPress={() =>
                Alert.alert(
                  'Selected Image',
                  `You have selected image : ${index + 1}`,
                )
              }>
              <Image
                source={item.source}
                style={styles.image}
                resizeMode="cover"
              />
            </Pressable>

            <Pressable
              style={styles.deleteButton}
              onPress={() => deleteImage(item.id)}
              accessibilityRole="button"
              accessibilityLabel="Delete image">
              <Text style={styles.deleteText}>×</Text>
            </Pressable>

            <Text style={styles.imageLabel}>
              Image {index + 1}
            </Text>
          </View>
        )}
      />

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Find an Image</Text>

            <Text style={styles.modalDescription}>
              Enter an image number from 1 to {images.length}.
            </Text>

            <TextInput
              style={styles.input}
              value={imageNumber}
              onChangeText={setImageNumber}
              placeholder="Image number"
              keyboardType="number-pad"
              maxLength={4}
            />

            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => {
                  setModalVisible(false);
                  setImageNumber('');
                }}>
                <Text style={styles.buttonText}>Cancel</Text>
              </Pressable>

              <Pressable
                style={[styles.modalButton, styles.submitButton]}
                onPress={findImage}>
                <Text style={styles.buttonText}>Find</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
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
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#222222',
    marginBottom: 16,
  },
  findButton: {
    backgroundColor: '#3478F6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 18,
  },
  listContent: {
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  imageCard: {
    width: ITEM_WIDTH,
    alignItems: 'center',
    position: 'relative',
    paddingBottom: 8,
  },
  image: {
    width: 150,
    height: 180,
    borderRadius: 10,
    backgroundColor: '#EEEEEE',
  },
  copyButton: {
    position: 'absolute',
    top: 6,
    left: 16,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#258653',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    elevation: 4,
  },
  copyText: {
    color: '#FFFFFF',
    fontSize: 23,
    lineHeight: 27,
    fontWeight: 'bold',
  },
  deleteButton: {
    position: 'absolute',
    top: 6,
    right: 16,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#E53935',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
    elevation: 4,
  },
  deleteText: {
    color: '#FFFFFF',
    fontSize: 24,
    lineHeight: 27,
    fontWeight: 'bold',
  },
  imageLabel: {
    marginTop: 8,
    fontSize: 14,
    color: '#333333',
  },
  emptyText: {
    fontSize: 16,
    color: '#777777',
    padding: 20,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalBox: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 22,
  },
  modalTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#222222',
  },
  modalDescription: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 14,
    color: '#555555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#BBBBBB',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#222222',
    marginBottom: 18,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  modalButton: {
    flex: 1,
    paddingVertical: 11,
    borderRadius: 8,
  },
  cancelButton: {
    backgroundColor: '#777777',
  },
  submitButton: {
    backgroundColor: '#3478F6',
  },
});
