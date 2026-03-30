import { View, ImageBackground, Image, Text, StyleSheet } from 'react-native';
import { useSplash } from '../../viewmodel/hooks/useSplash';

export default function SplashScreen() {
  useSplash();

  return (
    <ImageBackground
      source={require('../../../assets/splash.png')}
      style={styles.container}
      resizeMode="cover"
    >
      {/* <View style={styles.centerContent}>
        <Image
          source={require('../../../assets/unionWhite.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>InsureTechGuard</Text>
      </View> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
  },
});