import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {globalStyle} from "../styles/style";


export default function SearchScreen() {
    return (
        <View style={styles.mainContainer}>
            {/*<Text style={globalStyle.text}>F</Text>*/}
            {/*<TextInput style={styles.searchField} />*/}
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        // backgroundColor: '#9167a6'
    },
    searchField:{
        width: '80%',
        marginTop: '2%',
        marginLeft: '10%',
        marginRight: '10%',
        backgroundColor: '#E1E1E1',
        borderRadius: 15,

    }
});
