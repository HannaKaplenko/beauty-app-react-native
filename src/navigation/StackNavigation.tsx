import { createStackNavigator } from '@react-navigation/stack';
import { AuthorizationView } from '../modules/authorization/ui';
import { ProductView } from "../modules/product/ui";
import { TabNavigation } from './TabNavigation';
import { SplashView } from '../modules/splashView/ui';
import { ProfileView } from '../modules/profile/ui';
import { ThemeView } from '../modules/theme/ui';
import { LanguageView } from '../modules/language/ui';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='SplashView'>
      <Stack.Screen name="SplashView" component={SplashView} options={{ headerShown: false }} />
      <Stack.Screen name="AuthorizationView" component={AuthorizationView} options={{ title: "Main page" }} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} />
      <Stack.Screen name="ProductView" component={ProductView} options={{ title: "About our product" }} />
      <Stack.Screen name="ProfileView" component={ProfileView} options={{ title: "My Profile" }} />
      <Stack.Screen name="ThemeView" component={ThemeView} options={{ title: "Themes" }} />
      <Stack.Screen name="LanguageView" component={LanguageView} options={{ title: "Change language" }} />

    </Stack.Navigator>
  );
};
