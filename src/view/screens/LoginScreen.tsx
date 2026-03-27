import { View, Button } from 'react-native';
//dummy login screen
export default function LoginScreen({ navigation }: any) {
  return (
    <View>
      <Button
        title="Login"
        onPress={() => navigation.replace('Products')}
      />
    </View>
  );
}