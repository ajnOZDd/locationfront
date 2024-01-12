import { CapacitorConfig } from '@capacitor/cli';
import * as LiveUpdates from '@capacitor/live-updates';
const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'locationfront',
  webDir: 'www',
  plugins: {
    LiveUpdates: {
      appId: 'c52c0692',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  }
};



export default config;
