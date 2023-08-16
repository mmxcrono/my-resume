import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'dev.zdps.myresume',
  appName: 'my-resume',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
};

export default config;
