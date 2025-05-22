import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MockView } from '../modules/mockScreen';
import { ProductsView } from '../modules/productsList';
import { Text } from 'react-native';
import { ProfileView } from '../modules/profile/ui';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeView"
        component={ProductsView}
        options={{
          tabBarLabel: ({ focused }) => <Text style={{ color: focused ? "#000" : "#888" }}> Home </Text>
        }}
      />
      <Tab.Screen
        name="CartView"
        component={MockView}
        options={{
          tabBarLabel: ({ focused }) => <Text style={{ color: focused ? "#000" : "#888" }}> Cart </Text>
        }}
      />
      <Tab.Screen
        name="ChatView"
        component={MockView}
        options={{
          tabBarLabel: ({ focused }) => <Text style={{ color: focused ? "#000" : "#888" }}> Chat </Text>
        }}
      />
      <Tab.Screen
        name="ProfileView"
        component={ProfileView}
        options={{
          tabBarLabel: ({ focused }) => <Text style={{ color: focused ? "#000" : "#888" }}> Profile </Text>
        }}
      />
    </Tab.Navigator>
  );
}