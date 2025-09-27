import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { getDevices, toggleDevice, Device } from '../services/deviceService';

const ThermostatControl = () => {
  const [thermostat, setThermostat] = useState<Device | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDevices().then(devices => {
      const t = devices.find(d => d.type === 'thermostat');
      if (t) setThermostat(t);
    });
  }, []);

  const handleToggle = async () => {
    if (!thermostat) return;
    setLoading(true);
    const updated = await toggleDevice(thermostat.id);
    const updatedThermostat = updated.find(d => d.id === thermostat.id);
    setThermostat(updatedThermostat || null);
    setLoading(false);
  };

  if (!thermostat) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{thermostat.name}</Text>
      <Button
        title={thermostat.status === 'on' ? 'Kapat' : 'Aç'}
        onPress={handleToggle}
        disabled={loading}
      />
      <Text style={styles.status}>{thermostat.status === 'on' ? 'Açık' : 'Kapalı'}</Text>
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

export default ThermostatControl;
