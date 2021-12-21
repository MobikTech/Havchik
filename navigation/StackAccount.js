import {createStackNavigator} from '@react-navigation/stack'
import {StyleSheet} from "react-native";
import Register from "../components/account/Register";
import Login from "../components/account/Login";
import AccountScreen from "../components/AccountScreen";

const Stack = createStackNavigator()

export default function StackAccount(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={'Account'} component={AccountScreen} />
            <Stack.Screen name={'Register'} component={Register} options={{title: 'Sign up'}} />
            <Stack.Screen name={'Log in'} component={Login} options={{title: 'Log in'}} />
        </Stack.Navigator>

    );
}

