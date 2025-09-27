
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getDevices, Device } from '../services/deviceService';

const DeviceDashboard = () => {
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    getDevices().then(setDevices);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cihaz Kontrol Paneli</Text>
      <FlatList
        data={devices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.deviceCard}>
            <Text style={styles.deviceName}>{item.name}</Text>
            <Text style={styles.deviceStatus}>Durum: {item.status === 'on' ? 'Açık' : 'Kapalı'}</Text>
          </View>
        )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingTop: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  deviceCard: {
    width: 300,
    padding: 16,
    marginVertical: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    alignItems: 'flex-start',
  },
  deviceName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  deviceStatus: {
    marginTop: 4,
    color: '#888',
  },
});

export default DeviceDashboard;
