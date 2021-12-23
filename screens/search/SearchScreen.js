import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Text, TextInput} from 'react-native';
import {getDishesByIngredients, getDishesByTitle} from "../../api/requests";
import RecipeView from "../../components/RecipeView";
import Button from "../../components/Button";


export default function SearchScreen({route, navigation} ) {
    // const { ingredients } = route.params;
    // console.log('=========')
    // console.log(typeof route.params)

    const [searchRequest, setSearchRequest] = useState('');
    const [searchText, setSearchText] = useState(null);
    const [recipes, setRecipes] = useState({});

    const defaultText = 'default text';
    const defaultImage = 'https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/005/069/original/dish.png';

    if (route.params && (searchRequest === '' || searchRequest == null)){
        const { ingredients } = route.params;
        console.log(Object.entries(ingredients))
        useEffect(() => {
            getDishesByIngredients(ingredients)
                .then(d => setRecipes(d))
        }, [])
    }else{
        useEffect(() => {
            getDishesByTitle(searchRequest)
                .then(d => setRecipes(d))
        }, [searchRequest])
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.searchHeader}>
                <View style={styles.searchField}>
                    <TextInput style={styles.searchInput} onChangeText={setSearchText} value={searchText} placeholder={'search recipes...'}/>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Button
                        mode="contained"
                        onPress={() => setSearchRequest(searchText)}
                        style={styles.button}
                    >
                        Search
                    </Button>
                    <Button
                        mode="contained"
                        onPress={() => navigation.navigate('By Ingredients')}
                        style={styles.button}
                    >
                        Ingredients
                    </Button>
                </View>
            </View>

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
        marginTop: '15%',
    },
    searchHeader:{
        marginBottom: '1%',
        height: '16%',
        // backgroundColor: 'purple',
        // borderWidth: 1,
    },
    searchField:{
        width: '96%',
        height: 40,
        marginTop: '2%',
        marginBottom: '2%',
        marginLeft: '2%',
        // marginRight: '10%',
        backgroundColor: '#E1E1E1',
        borderRadius: 18,
        justifyContent: "center",


    },
    searchInput: {
        width: '90%',
        marginLeft: '5%',
        fontSize: 20,

    },
    button: {
        marginLeft: '2%',
        width: '47%',
        marginVertical: 3,
        paddingVertical: 0,
    },

});
