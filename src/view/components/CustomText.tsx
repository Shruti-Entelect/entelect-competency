import React from 'react';
import {
  Text,
  TextProps,
  TextStyle,
  StyleSheet,
} from 'react-native';

interface CustomTextProps extends TextProps {
  fontFamily?: string;
  fontSize?: number;
  fontWeight?: TextStyle['fontWeight'];
  fontStyle?: TextStyle['fontStyle'];
  color?: string;
  style?: TextStyle;
}

export default function CustomText({
  fontFamily = 'Roboto-Regular',
  fontSize = 16,
  fontWeight = 'normal',
  fontStyle = 'normal',
  color = '#000',
  style,
  children,
  ...rest
}: CustomTextProps) {
  return (
    <Text
      style={[
        styles.text,
        {
          fontFamily,
          fontSize,
          fontWeight,
          fontStyle,
          color,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {},
});