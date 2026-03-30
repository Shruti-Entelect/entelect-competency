import React from 'react';
import { Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../../theme/color';
import { ColorValue } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
   colors?: readonly [ColorValue, ColorValue, ...ColorValue[]]; // gradient colors
  textColor?: string;
  fontSize?: number;
  style?: ViewStyle;
};

export default function CustomButton({
  title,
  onPress,
  colors= ['#1860BF', '#1AB0DE'], // default gradient
  textColor = '#fff',
  fontSize = 16,
  style,
}: Props) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.container, style]}>
      <LinearGradient
       colors={colors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <Text style={[styles.text, { color: textColor, fontSize }]}>
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

// const styles = StyleSheet.create({
//   button: {
//     width: '80%',
//     paddingVertical: 14,
//     borderRadius: 30, // ✅ more rounded (pill shape)
//     alignItems: 'center',

//     // Shadow (iOS)
//     shadowColor: '#000',
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: 2 },

//     // Elevation (Android)
//     elevation: 3,
//   },
//   text: {
//     fontWeight: '600',
//   },
// });

const styles = StyleSheet.create({
  container: {
    width: '80%',        // ✅ moved here
    borderRadius: 30,
    overflow: 'hidden',  // ✅ VERY IMPORTANT for rounded gradient
  },

  gradient: {
    width: '100%',       // ✅ fill parent
    paddingVertical: 14,
    alignItems: 'center',

    // Shadow (iOS)
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },

    // Elevation (Android)
    elevation: 3,
  },

  text: {
    fontWeight: '600',
  },
});