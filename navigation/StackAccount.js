import {createStackNavigator} from '@react-navigation/stack'
import {StyleSheet} from "react-native";
import Register from "../screens/account/Register";
import Login from "../screens/account/Login";
import AccountScreen from "../screens/account/AccountScreen";

const Stack = createStackNavigator()

export default function StackAccount(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={'Account'} component={AccountScreen} />
            <Stack.Screen name={'Register'} component={Register} options={{title: 'Sign up', headerShown: false}} />
            <Stack.Screen name={'Log in'} component={Login} options={{title: 'Log in', headerShown: false}} />
        </Stack.Navigator>

    );
}

