
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';
import Video from 'react-native-video';

export default function Task32() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Task 32 - Video Player
      </Text>

      <View style={styles.videoContainer}>
        <Video
          source={require('../Resource/Videos/sample.mp4')}
          style={styles.video}
          controls={true}
          resizeMode="contain"
          paused={!isPlaying}
          onPlaybackStateChanged={({ isPlaying: playing }) => {
            setIsPlaying(playing);
          }}
          onError={(error) => {
            console.log('Video error:', error);
          }}
        />

        {!isPlaying && (
          <View style={styles.posterContainer}>
            <Image
              source={require('../Resource/sky.jpg')}
              style={styles.poster}
              resizeMode="cover"
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  videoContainer: {
    width: '100%',
    height: 240,
    position: 'relative',
    backgroundColor: '#000000',
    borderRadius: 12,
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  posterContainer: {
    ...StyleSheet.absoluteFill,
    zIndex: 1,
    elevation: 1,
    pointerEvents: 'none',
  },
  poster: {
    width: '100%',
    height: '100%',
  },
});
