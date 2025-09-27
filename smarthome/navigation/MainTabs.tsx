import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DevicesScreen from '../screens/DevicesScreen';
import DeviceDashboard from '../screens/DeviceDashboard';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Panel" component={DeviceDashboard} />
      <Tab.Screen name="Cihazlar" component={DevicesScreen} />
    </Tab.Navigator>
  );
}
