import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateRecipe from '../CreateRecipe/CreateRecipe';
import RecipeListing from '../RecipeListing/RecipeListing';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBarStyle={{ backgroundColor: "#3C698B" }} screenOptions={{
                tabBarLabelStyle: {
                    fontSize: 18,
                    color: "white"
                },
                tabBarStyle: {
                    backgroundColor: "#3C698B"
                },
                tabBarIconStyle: {
                    display: 'none'
                }
            }}>
                <Tab.Screen name="Create a Recipe" component={CreateRecipe} />
                <Tab.Screen name="View Recipes" component={RecipeListing} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    barBackground: {
        backgroundColor: "#3C698B",
    },
});

export default Navigation;