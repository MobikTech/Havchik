import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {StyleSheet} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from "@react-navigation/native";
import StackAccount from "./StackAccount";
import StackSearch from "./StackSearch";
import StackSaved from "./StackSaved";

const Tab = createBottomTabNavigator()

export default function BottomTabs(){
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Search') {
                            iconName = 'search'
                        } else if (route.name === 'Account') {
                            iconName = 'people'
                        } else if (route.name === 'Saved') {
                            iconName = 'bookmark'
                        }


                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'purple',
                    tabBarInactiveTintColor: 'gray',
                    tabBarLabelStyle: styles.tabBarLabelStyle
                })}
            >
                <Tab.Screen name={'Search'} component={StackSearch} options={{headerShown: false}} />
                <Tab.Screen name={'Saved'} component={StackSaved} options={{headerShown: false}} />
                <Tab.Screen name={'Account'} component={StackAccount} options={{headerShown: false}} />
            </Tab.Navigator>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    tabBarLabelStyle: {
        fontSize: 15
    },
    // tabImage:{
    //     width: 25,
    //     height: 25,
    //     tintColor: focused ? '#e32f45' : '#748c94'
    // },
    // tabText:{
    //     color: focused ? '#e32f45' : '#748c94',
    //     fontSize: 12
    // }
});
