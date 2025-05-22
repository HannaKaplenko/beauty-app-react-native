import { createStackNavigator } from '@react-navigation/stack';
import { AuthorizationView } from '../modules/authorization';
import { ProductView } from "../modules/product";
import { TabNavigation } from './TabNavigation';
import { SplashView } from '../modules/splashView/ui';
import { ProfileView } from '../modules/profile/ui';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='SplashView'>
      <Stack.Screen name="SplashView" component={SplashView} options={{ headerShown: false }} />
      <Stack.Screen name="AuthorizationView" component={AuthorizationView} options={{ title: "Main page" }} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="ProductView" component={ProductView} options={{ title: "About our product" }} />
      <Stack.Screen name="ProfileView" component={ProfileView} options={{ title: "My Profile" }} />
    </Stack.Navigator>
  );
};
