import { createStackNavigator } from '@react-navigation/stack';
import { AuthorizationView } from '../modules/authorization/ui';
import { ProductView } from "../modules/product/ui";
import { TabNavigation } from './TabNavigation';
import { SplashView } from '../modules/splashView/ui';
import { ProfileView } from '../modules/profile/ui';
import { ThemeView } from '../modules/theme/ui';
import { LanguageView } from '../modules/language/ui';
import { WishListView } from '../modules/wishList/ui';
import { SettingsView } from '../modules/settings/ui';
import { AboutUsView } from '../modules/aboutUs/ui';

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
      <Stack.Screen name="WishListView" component={WishListView} options={{ title: "My wish list" }} />
      <Stack.Screen name="SettingsView" component={SettingsView} options={{ title: "Settings" }} />
      <Stack.Screen name="AboutUsView" component={AboutUsView} options={{ title: "About Us" }} />
    </Stack.Navigator>
  );
};
