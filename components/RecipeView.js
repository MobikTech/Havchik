import React from 'react';
import {StyleSheet, Text, View, Image, Button, TouchableHighlight} from 'react-native';
import {globalStyle} from "../styles/style";

export default function RecipeView(props) {
    return (

        <View style={styles.recipeContainer}>
            {/*<Button title={'details'} onPress={() => {props.navigation.navigate('Details')}} />*/}
            <TouchableHighlight underlayColor={'#ebedf0'} onPress={() => {props.navigation.navigate('Details', {
                recipeId: props.id
            })}}>
                <Image source={{uri: props.image}}
                       style={styles.image} />
            </TouchableHighlight>
            {/*<Image source={{uri: props.image}}*/}
            {/*       style={styles.image} />*/}
            <Text style={[styles.title, globalStyle.fontBold]}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    recipeContainer:{
        width: '90%',
        margin: '5%',
        // borderWidth: 2,

    },
    image:{
        width: '90%',
        aspectRatio: 1,
        marginLeft: '5%',
        marginTop: '5%',
        borderRadius: 10,

    },
    title:{
        margin: '1%',
        textAlign: 'center',
        fontSize: 20,
    }
});
