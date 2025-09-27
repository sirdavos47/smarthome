import React from 'react';
import { View } from 'react-native';
import LightControl from '../components/LightControl';
import ThermostatControl from '../components/ThermostatControl';
import CameraControl from '../components/CameraControl';

const DevicesScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <LightControl />
      <ThermostatControl />
  <CameraControl />
  {/* Diğer cihaz kontrolleri buraya eklenebilir */}
    </View>
  );
};

export default DevicesScreen;
