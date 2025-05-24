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

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="HomeView"
        component={ProductsView}
        options={{
          tabBarIcon: ({ focused }) => <TabHomeIcon height={24} width={24} color={focused ? "#000" : "#888"} />,
          tabBarLabel: ({ focused }) => <Text style={{ color: focused ? "#000" : "#888" }}> Home </Text>
        }}
      />
      <Tab.Screen
        name="CartView"
        component={MockView}
        options={{
          tabBarIcon: ({ focused }) => <TabCartIcon height={24} width={24} color={focused ? "#000" : "#888"} />,
          tabBarLabel: ({ focused }) => <Text style={{ color: focused ? "#000" : "#888" }}> Cart </Text>
        }}
      />
      <Tab.Screen
        name="ChatView"
        component={MockView}
        options={{
          tabBarIcon: ({ focused }) => <TabChatIcon height={24} width={24} color={focused ? "#000" : "#888"} />,
          tabBarLabel: ({ focused }) => <Text style={{ color: focused ? "#000" : "#888" }}> Chat </Text>
        }}
      />
      <Tab.Screen
        name="ProfileView"
        component={ProfileView}
        options={{
          tabBarIcon: ({ focused }) => <TabProfileIcon height={24} width={24} color={focused ? "#000" : "#888"} />,
          tabBarLabel: ({ focused }) => <Text style={{ color: focused ? "#000" : "#888" }}> Profile </Text>
        }}
      />
    </Tab.Navigator>
  );
}