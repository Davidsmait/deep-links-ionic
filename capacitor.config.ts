import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.deep.link',
  appName: 'deep-links',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
