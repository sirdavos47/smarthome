// Basit bir cihaz servisi örneği
export type Device = {
  id: string;
  name: string;
  type: 'light' | 'thermostat' | 'camera';
  status: 'on' | 'off';
};

const devices: Device[] = [
  { id: '1', name: 'Salon Işığı', type: 'light', status: 'off' },
  { id: '2', name: 'Yatak Odası Termostatı', type: 'thermostat', status: 'off' },
  { id: '3', name: 'Giriş Kamerası', type: 'camera', status: 'off' },
];

export function getDevices(): Promise<Device[]> {
  return Promise.resolve(devices);
}

export function toggleDevice(id: string): Promise<Device[]> {
  const device = devices.find((d) => d.id === id);
  if (device) {
    device.status = device.status === 'on' ? 'off' : 'on';
  }
  return Promise.resolve(devices);
}
