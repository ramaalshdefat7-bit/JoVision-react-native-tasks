
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import Video from 'react-native-video';

export default function Task33() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleVideoPress = () => {
    if (hasFinished) return;

    if (!hasStarted) {
      setHasStarted(true);
      setIsPlaying(true);
    } else {
      setIsPlaying((previous) => !previous);
    }

    setShowButton(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Task 33 - Custom Video Controls
      </Text>

      <View style={styles.videoContainer}>
        <Video
          source={require('../Resource/Videos/sample.mp4')}
          style={styles.video}
          resizeMode="contain"
          controls={false}
          paused={!isPlaying}
          onEnd={() => {
            setIsPlaying(false);
            setHasFinished(true);
            setShowButton(false);
          }}
          onError={(error) => {
            console.log('Video error:', error);
            setIsPlaying(false);
          }}
        />

        {!hasStarted && (
          <Image
            source={require('../Resource/sky.jpg')}
            style={styles.poster}
            resizeMode="cover"
            pointerEvents="none"
          />
        )}

        {!hasFinished && (
          <Pressable
            style={styles.pressArea}
            onPress={handleVideoPress}
          >
            {showButton && (
              <View style={styles.playButton}>
                <Text style={styles.playIcon}>▶</Text>
              </View>
            )}
          </Pressable>
        )}
      </View>

      <Text style={styles.hint}>
        {!hasStarted
          ? 'Tap to play the video'
          : hasFinished
          ? 'Video finished'
          : isPlaying
          ? 'Video is playing'
          : 'Video paused'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
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
    textAlign: 'center',
  },
  videoContainer: {
    width: '100%',
    height: 240,
    position: 'relative',
    backgroundColor: '#000000',
    borderRadius: 12,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  video: {
    ...StyleSheet.absoluteFill,
  },
  poster: {
    ...StyleSheet.absoluteFill,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  pressArea: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },
  playButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playIcon: {
    color: '#FFFFFF',
    fontSize: 28,
  },
  hint: {
    marginTop: 14,
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
  },
});
