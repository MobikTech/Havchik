import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, FlatList, ScrollView, Touchable} from 'react-native';
import {getDishById, saveDish} from "../../api/requests";
import {globalStyle} from "../../styles/style";
import Button from "../../components/Button";

export default function DetailsScreen({route, navigation}) {
    const { recipeId } = route.params;
    const [recipeInfo, setRecipeInfo] = useState({});

    // const recipeDetailsObject = JSON.parse(JSON.stringify(getDishById(recipeId)))
    // const recipeDetailsObject = getDishById(recipeId);
    // console.log(recipeDetailsObject.text())

    useEffect(() => {
        getDishById(recipeId)
            .then(recipe => setRecipeInfo(recipe))
    }, [])

    return (
        <ScrollView >
            <Text style={[styles.mainTitle, globalStyle.fontBold]}>{recipeInfo.title}</Text>
            <Image source={{uri: recipeInfo.image}}
                   style={styles.image} />
            <View style={styles.otherViewContent}>
                <Text style={styles.otherTextContent}>{recipeInfo.readyInMinutes} minutes for ready</Text>
                <Text style={styles.otherTextContent}>{recipeInfo.servings} Servings</Text>

                <Text style={styles.otherTextContent}>Ingredients:</Text>
                <FlatList data={recipeInfo.extendedIngredients} renderItem={({item}) => { return (
                    // <Touchable onPress={() => {alert();}}>
                    <Text style={styles.ingredients}>   {item.originalString}</Text>
                    // </Touchable>
                )} }>
                </FlatList>

                <Text style={styles.otherTextContent}>Summary:</Text>
                <Text style={styles.ingredients}>{recipeInfo.summary}:</Text>

                <Text style={styles.otherTextContent}>Instructions:</Text>
                <Text style={styles.ingredients}>{recipeInfo.instructions}:</Text>

            </View>
            <Button
                mode="contained"
                onPress={() => {
                    saveDish(recipeId);
                    // navigation.navigate('Register');
                }}
                style={styles.button}
            >
                Save
            </Button>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    image:{
        width: '90%',
        aspectRatio: 1,
        marginLeft: '5%',
        marginTop: '5%',
        borderRadius: 10,

    },
    mainTitle:{
        fontSize: 24,
        textAlign: 'center'
    },
    otherViewContent:{
        margin: '5%',
    },
    otherTextContent:{
        fontFamily: globalStyle.fontMedium.fontFamily,
        fontSize: 18,

    },
    ingredients:{
        fontFamily: globalStyle.fontMedium.fontFamily,
        fontSize: 14
    },
    button:{
        marginLeft: '20%',
        width: '60%'
    },

});
