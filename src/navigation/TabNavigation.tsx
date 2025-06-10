import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MockView } from '../modules/mockScreen';
import { ProductsView } from '../modules/productsList/ui';
import { Text } from 'react-native';
import { ProfileView } from '../modules/profile/ui';
import { TabHomeIcon } from '../../assets/icons/TabHomeIcon';
import { TabCartIcon } from '../../assets/icons/TabCartIcon';
import React from 'react';
import { TabChatIcon } from '../../assets/icons/TabChatIcon';
import { TabProfileIcon } from '../../assets/icons/TabProfileIcon';
import { useUIContext } from '../UIProvider';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  const { t } = useUIContext();

  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen
        name="HomeView"
        component={ProductsView}
        options={{
          headerTitle: t("product.title"), headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => <TabHomeIcon height={24} width={24} color={focused ? "#000" : "#888"} />,
          tabBarLabel: ({ focused }) => <Text style={{ color: focused ? "#000" : "#888" }}> Home </Text>
        }}
      />
      <Tab.Screen
        name="CartView"
        component={MockView}
        options={{
          headerTitle: t("cart.title"), headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => <TabCartIcon height={24} width={24} color={focused ? "#000" : "#888"} />,
          tabBarLabel: ({ focused }) => <Text style={{ color: focused ? "#000" : "#888" }}> Cart </Text>
        }}
      />
      <Tab.Screen
        name="ChatView"
        component={MockView}
        options={{
          headerTitle: t("chat.title"), headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => <TabChatIcon height={24} width={24} color={focused ? "#000" : "#888"} />,
          tabBarLabel: ({ focused }) => <Text style={{ color: focused ? "#000" : "#888" }}> Chat </Text>
        }}
      />
      <Tab.Screen
        name="ProfileView"
        component={ProfileView}
        options={{
          headerTitle: t("settings.title"), headerTitleAlign: "center",
          tabBarIcon: ({ focused }) => <TabProfileIcon height={24} width={24} color={focused ? "#000" : "#888"} />,
          tabBarLabel: ({ focused }) => <Text style={{ color: focused ? "#000" : "#888" }}> Profile </Text>
        }}
      />
    </Tab.Navigator>
  );
}