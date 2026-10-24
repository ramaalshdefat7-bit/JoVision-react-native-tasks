import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

export default function Task26() {
  const [ip, setIp] = useState('');
  const [loading, setLoading] = useState(false);

  const getIP = async () => {
    try {
      const response = await fetch('https://api.ipify.org/');
      const result = await response.text();
      setIp(result);
    } catch {
      setIp('Failed to get IP address');
    }
  };

  const getIPBlocking = async () => {
    setLoading(true);
    setIp('');

    try {
      const response = await fetch('https://api.ipify.org/');
      const result = await response.text();
      setIp(result);
    } catch {
      setIp('Failed to get IP address');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>IP Address</Text>

      <Button
        title="Get IP (Non-blocking)"
        onPress={getIP}
      />

      <View style={styles.space} />

      <Button
        title="Get IP (Blocking)"
        onPress={getIPBlocking}
        disabled={loading}
      />

      <Text style={styles.result}>
        {ip || 'Your IP will appear here'}
      </Text>

      {loading && (
        <View style={styles.overlay}>
          <ActivityIndicator size="large" color="#FFFFFF" />
          <Text style={styles.loadingText}>Please wait...</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  space: {
    marginTop: 20,
  },
  result: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 24,
  },
  overlay: {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.75)',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 10,
  elevation: 10,
},
  loadingText: {
    color: '#FFFFFF',
    fontSize: 18,
    marginTop: 12,
  },
});