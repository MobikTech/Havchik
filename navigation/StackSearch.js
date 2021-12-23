import {createStackNavigator} from '@react-navigation/stack'
import SearchScreen from "../screens/search/SearchScreen";
import DetailsScreen from "../screens/search/DetailsScreen";
import {StyleSheet} from "react-native";
import ByIngredientsScreen from "../screens/search/ByIngredientsScreen";
import ByIngredientsSearchScreen from "../screens/search/ByIngredientsSearchScreen";

const Stack = createStackNavigator()

export default function StackSearch(){
    return(
        <Stack.Navigator>
            <Stack.Screen name={'Search'} component={SearchScreen} options={{headerShown: false}} />
            <Stack.Screen name={'Details'} component={DetailsScreen} />
            <Stack.Screen name={'By Ingredients'} component={ByIngredientsScreen} />
            <Stack.Screen name={'By Ingredients Search'} component={ByIngredientsSearchScreen} />


            {/*<Stack.Screen name={'Second'} component={Login}  />*/}

            {/*// options={{*/}
                {/*//     header: () => (*/}
                {/*//*/}
                {/*//         <View style={styles.searchHeader}>*/}
                {/*//             <TextInput style={styles.searchField} onChangeText={setSearchText} value={searchText} placeholder={'default'}/>*/}
                {/*//             <Button onPress={() => setSearchRequest(searchText)} title={'Search'} />*/}
                {/*//         </View>*/}
                {/*//     )*/}
                {/*// }}*/}
            {/*>*/}
            {/*    {props => <SearchScreen {...props} searchRequest={searchRequest} />}*/}
            {/*</Stack.Screen>*/}
            {/*<Stack.Screen*/}
            {/*    name={'Details'}*/}
            {/*    component={DetailsScreen}*/}
            {/*/>*/}

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
