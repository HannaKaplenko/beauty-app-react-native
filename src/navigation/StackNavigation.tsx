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
import { useUIContext } from '../UIProvider';
import { ForgotPasswordView } from '../modules/forgotPassword/ui';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  const { t } = useUIContext();
  return (
    <Stack.Navigator initialRouteName='SplashView'>
      <Stack.Screen name="SplashView" component={SplashView} options={{ headerShown: false }} />
      <Stack.Screen name="AuthorizationView" component={AuthorizationView} options={{ title: "Main page" }} />
      <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }} />
      <Stack.Screen name="ProductView" component={ProductView} options={{ title: t("product.description") }} />
      <Stack.Screen name="ProfileView" component={ProfileView} options={{ title: t("settings.title") }} />
      <Stack.Screen name="ThemeView" component={ThemeView} options={{ title: t("settings.theme") }} />
      <Stack.Screen name="LanguageView" component={LanguageView} options={{ title: t("language.title") }} />
      <Stack.Screen name="WishListView" component={WishListView} options={{ title: t("settings.wishList") }} />
      <Stack.Screen name="SettingsView" component={SettingsView} options={{ title: t("settings.settings") }} />
      <Stack.Screen name="AboutUsView" component={AboutUsView} options={{ title: t("settings.aboutUs") }} />
      <Stack.Screen name="ForgotPasswordView" component={ForgotPasswordView} options={{ title: t("forgotPassword.title") }} />
    </Stack.Navigator>
  );
};
