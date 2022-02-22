import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateRecipe from '../CreateRecipe/CreateRecipe';
import RecipeListing from '../RecipeListing/RecipeListing';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarLabelStyle: {
                    fontSize: 18,
                    color: "white",
                    fontWeight: "bold"
                },
                tabBarStyle: {
                    backgroundColor: "#3C698B",
                    height: 110, 
                    borderColor: "white",
                },
                tabBarActiveTintColor: "#d75934",
                tabBarInactiveTintColor: "#fff",
                tabBarIconStyle: {
                    flex: 1,
                    justifyContent: 'center'
                }
            }}>
                <Tab.Screen options={{tabBarIcon: ({color, size}) => (<Icon name="pencil" color={color} size={30} />)}} name="Create a Recipe" component={CreateRecipe} />
                <Tab.Screen options={{tabBarIcon: ({color, size}) => (<Icon name="open-book" color={color} size={30} />)}} name="View Recipes" component={RecipeListing} />
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