import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Splash'
>;

export const useSplash = () => {
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // ✅ works
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
};