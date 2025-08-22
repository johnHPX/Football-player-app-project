import TelaLogin from '../screens/Login';
import TelaFavoritos from '../screens/PainelFavoritos';
import TelaMain from '../screens/Main'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function AppNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Login' component={TelaLogin} options={{
          headerStyle: { backgroundColor: "#a5c3a7" },
          headerTintColor: "#fff",
        }}/>
        <Stack.Screen name='Favoritos' component={TelaFavoritos} options={{
          headerStyle: { backgroundColor: "#a5c3a7" },
          headerTintColor: "#fff",
        }}/>
        <Stack.Screen name='Main' component={TelaMain} options={{
          headerStyle: { backgroundColor: "#a5c3a7" },
          headerTintColor: "#fff",
        }}/>
    </Stack.Navigator>
  );
}
