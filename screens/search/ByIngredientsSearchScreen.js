import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Text, TextInput} from 'react-native';
import {getDishesByIngredients, getDishesByTitle} from "../../api/requests";
import RecipeView from "../../components/RecipeView";
import Button from "../../components/Button";


export default function ByIngredientsSearchScreen({route, navigation} ) {
    const { ingredients } = route.params;

    const [recipes, setRecipes] = useState({});

    const defaultText = 'default text';
    const defaultImage = 'https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/005/069/original/dish.png';

    console.log(Object.entries(ingredients))
    useEffect(() => {
        getDishesByIngredients({ ingredients })
            .then(d => setRecipes(d))
    }, []);

    console.log(Object.entries(recipes))

    return (
        <View style={styles.mainContainer}>
            <FlatList data={recipes} renderItem={
                ({item}) => { return (
                    <RecipeView
                        id={item ? item.id : 0}
                        image={item ? item.image : defaultImage}
                        title={item ? item.title : defaultText}
                        navigation={navigation}
                    />
                )}
            } />
        </View>

    );
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        flexDirection: "column",
        // marginTop: '15%',
    },
    searchHeader:{
        marginBottom: '1%',
        height: '18%',
        // backgroundColor: 'purple',
        borderWidth: 1,
    },
    searchField:{
        width: '80%',
        marginTop: '2%',
        marginBottom: '2%',
        marginLeft: '10%',
        marginRight: '10%',
        backgroundColor: '#E1E1E1',
        borderRadius: 15,

    },
    button: {
        marginLeft: '2%',
        width: '47%',
        marginVertical: 3,
        paddingVertical: 0,
    },

});
