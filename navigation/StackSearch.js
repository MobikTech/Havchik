import {createStackNavigator} from '@react-navigation/stack'
import Register from "../components/account/Register";
import Login from "../components/account/Login";
import SearchScreen from "../components/SearchScreen";
import {StyleSheet, TextInput, View} from "react-native";
import ViewNativeComponent from "react-native/Libraries/Components/View/ViewNativeComponent";

const Stack = createStackNavigator()

export default function StackSearch(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name={'Search'}
                component={SearchScreen}
                options={{
                    header: () => (
                        <ViewNativeComponent style={styles.searchHeader}>
                            <TextInput style={styles.searchField} />
                        </ViewNativeComponent>
                    )

            }}/>
            {/*<Stack.Screen name={'Register'} component={Register} options={{title: 'Sign up'}} />*/}
            {/*<Stack.Screen name={'Log in'} component={Login} options={{title: 'Log in'}} />*/}
        </Stack.Navigator>

    );
}

const styles = StyleSheet.create({
    searchHeader:{
        marginTop: '13%',
        height: 50,
        // backgroundColor: 'purple',
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    searchField:{
        alignItems: 'center',
        width: '80%',
        marginTop: '2%',
        marginLeft: '10%',
        marginRight: '10%',
        backgroundColor: '#E1E1E1',
        borderRadius: 15,

    }
});
