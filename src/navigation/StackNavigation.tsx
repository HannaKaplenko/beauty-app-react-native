import { createStackNavigator } from '@react-navigation/stack';
import { AuthorizationView } from '../modules/authorization';
import { ProductView} from "../modules/product";
import { TabNavigation } from './TabNavigation';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='AuthorizationView'>
      <Stack.Screen name="AuthorizationView" component={AuthorizationView} options={{ title: "Main page" }} />
      <Stack.Screen name="TabNavigation" component={TabNavigation}/>
      <Stack.Screen name="ProductView" component={ProductView} options={{ title: "About our product" }} />
    </Stack.Navigator>
  );
};
