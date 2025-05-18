import { NavigationContainer } from "@react-navigation/native"
import { StackNavigation } from "./StackNavigation.tsx"

export const RootNavigation = () => {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>

    );
}