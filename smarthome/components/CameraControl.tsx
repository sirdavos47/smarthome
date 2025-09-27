import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { getDevices, toggleDevice, Device } from '../services/deviceService';

const CameraControl = () => {
  const [camera, setCamera] = useState<Device | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDevices().then(devices => {
      const c = devices.find(d => d.type === 'camera');
      if (c) setCamera(c);
    });
  }, []);

  const handleToggle = async () => {
    if (!camera) return;
    setLoading(true);
    const updated = await toggleDevice(camera.id);
    const updatedCamera = updated.find(d => d.id === camera.id);
    setCamera(updatedCamera || null);
    setLoading(false);
  };

  if (!camera) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{camera.name}</Text>
      <Button
        title={camera.status === 'on' ? 'Kapat' : 'Aç'}
        onPress={handleToggle}
        disabled={loading}
      />
      <Text style={styles.status}>{camera.status === 'on' ? 'Açık' : 'Kapalı'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  status: {
    marginTop: 8,
    color: '#888',
  },
});

export default CameraControl;
