import { Platform } from 'react-native';

export const host = Platform.select({
    ios: 'http://localhost:5000',
    android: 'http://10.0.2.2:5000'
});