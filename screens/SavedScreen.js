import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, TextInput, FlatList} from 'react-native';
import {getSavedDishes} from "../api/requests";
import RecipeView from "../components/RecipeView";
import Button from "../components/Button";

// export default function ss(){
//     saved
// }

export default function SavedScreen({navigation}) {
    const [savedRecipes, setSavedRecipes] = useState({});

    const defaultText = 'default text';
    const defaultImage = 'https://d338t8kmirgyke.cloudfront.net/icons/icon_pngs/000/005/069/original/dish.png';

    useEffect(() => {
        getSavedDishes()
            .then(recipes => setSavedRecipes(recipes))
    }, [])

    // function reload(){
    //     getSavedDishes()
    //         .then(recipes => setSavedRecipes(recipes))
    // }

    // reload()
    return (
        <View style={styles.mainContainer}>
            {/*<Button*/}
            {/*    mode="contained"*/}
            {/*    onPress={() => {*/}
            {/*        console.log('......')*/}
            {/*        console.log(Object.entries(savedRecipes))*/}
            {/*        // reload()*/}
            {/*    }}*/}
            {/*    style={styles.button}*/}
            {/*>*/}
            {/*    Reload*/}
            {/*</Button>*/}

            {/*<Text>{Object.entries(savedRecipes)}</Text>*/}
            {/*<Text>{typeof savedRecipes}</Text>*/}
            <FlatList data={savedRecipes} renderItem={
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
});
