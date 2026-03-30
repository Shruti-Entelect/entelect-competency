import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../components/CustomButton';
import { Colors} from '../../theme/color';
import { StatusBar } from 'expo-status-bar';
import CustomText from '../components/CustomText';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
    <StatusBar style="light" backgroundColor="#000000" />
      {/* Top Section (Logo + Title) */}
      <View style={styles.topSection}>
        <Image
          source={require('../../../assets/union.png')}
          style={styles.logo}
        />
         <CustomText fontFamily="Roboto-Regular" style={styles.appName}>InsureTech
           <CustomText fontFamily="Roboto-Bold" style={styles.boldText}>Guard</CustomText>
         </CustomText>
      </View>

      {/* Middle Section (Button + Signup) */}
      <View style={styles.middleSection}>
        <CustomButton
          title="Login"
          onPress={() => console.log('Login clicked')}
        />

        <View style={styles.signupRow}>
         <CustomText fontFamily="Roboto-Regular" style={styles.signupText}>Don’t have an account? </CustomText>
          <TouchableOpacity>
           <CustomText fontFamily="Roboto-Regular"style={styles.signupLink}>Sign Up</CustomText>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Text */}
      {/* <TouchableOpacity> */}
     <CustomText fontFamily="Roboto-SemiBold" style={styles.bottomText}>
       Continue as guest
      </CustomText>
      {/* </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkBackgroound,
    alignItems: 'center',
  },

  // Slightly above center
  topSection: {
    position: 'absolute',
    top: '30%',
    alignItems: 'center',
  },

  appName: {
    color: '#fff',
    fontSize: 20,
    marginTop:10,
    marginBottom: 10,
  },
  boldText: {
   color: '#fff',
   fontSize:22,
  },

  logo: {
    width: 64,
    height: 64,
  },

  // Slightly below center
  middleSection: {
    position: 'absolute',
    top: '70%',
    width: '100%',
    alignItems: 'center',
  },

  signupRow: {
    flexDirection: 'row',
    marginTop: 12,
  },

  signupText: {
    color: '#fff',
    fontSize:17,
    fontWeight:400
  },

  signupLink: {
    color: Colors.brandblue,
    fontWeight: '600',
     textDecorationLine: 'underline',
     fontSize:17,
  },

  // Bottom text
  bottomText: {
    position: 'absolute',
    bottom: 20,
    color: '#fff',
    marginBottom: 10,
    fontSize:17,
    fontWeight:400
  },
});