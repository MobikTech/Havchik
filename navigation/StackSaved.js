import {createStackNavigator} from '@react-navigation/stack'
import SavedScreen from "../screens/SavedScreen";

const Stack = createStackNavigator()

export default function StackSaved(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={'Saved'} component={SavedScreen} />
        </Stack.Navigator>

    );
}

