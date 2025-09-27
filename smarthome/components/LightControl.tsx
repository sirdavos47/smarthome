
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { getDevices, toggleDevice, Device } from '../services/deviceService';

const LightControl = () => {
  const [light, setLight] = useState<Device | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDevices().then(devices => {
      const salonLight = devices.find(d => d.type === 'light');
      if (salonLight) setLight(salonLight);
    });
  }, []);

  const handleToggle = async () => {
    if (!light) return;
    setLoading(true);
    const updated = await toggleDevice(light.id);
    const updatedLight = updated.find(d => d.id === light.id);
    setLight(updatedLight || null);
    setLoading(false);
  };

  if (!light) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{light.name}</Text>
      <Switch
        value={light.status === 'on'}
        onValueChange={handleToggle}
        disabled={loading}
      />
      <Text style={styles.status}>{light.status === 'on' ? 'Açık' : 'Kapalı'}</Text>
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

export default LightControl;
