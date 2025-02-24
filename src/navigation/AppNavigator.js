import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import CustomDrawerContent from '../components/CustomDrawerContent'; // Opcional: Para personalizar el menú

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Login"
        drawerPosition="right"  // 👉 Pone el menú a la derecha
        drawerContent={(props) => <CustomDrawerContent {...props} />} // Opcional
      >
        <Drawer.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Inicio' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
