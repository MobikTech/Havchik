import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import Button from "../../components/Button";
import {TextInput} from "react-native-paper";
import {getDishesByIngredients} from "../../api/requests";
import {globalStyle} from "../../styles/style";


export default function ByIngredientsScreen({navigation} ) {
    // const [ingredientInputs, setIngredientInputs] = useState({[]});
    const [texts, setIngredientInputs] = useState([]);

    useEffect(() => {

    }, [texts]);

    return (
        <View style={styles.mainContainer}>
            <View style={styles.searchHeader}>
                {/*<TextInput style={styles.searchField} onChangeText={setSearchText} value={searchText} placeholder={'default'}/>*/}
                <View style={{flexDirection: 'row'}}>
                    <Button
                        mode="contained"
                        onPress={() => {
                            setIngredientInputs(() => texts.concat(''))
                            // setIngredientInputs(['ss'])
                        }}
                        style={styles.button}
                    >
                        Add
                    </Button>

                    <Button
                        mode="contained"
                        onPress={() => {navigation.navigate('By Ingredients Search', {ingredients: ["ds", "ew"]});}}
                        style={styles.button}
                    >
                        Search
                    </Button>

                </View>
            </View>
            <FlatList data={texts} renderItem={({item, index}) => { return (
                <TextInput
                    // label="Ingredient"
                    placeholder={item}
                    style={[{fontSize: 20}, ]}
                    onChangeText={text => {
                        texts[index] = text;
                    }}
                    right={<TextInput.Icon name="delete" onPress={() => {texts.splice(index, 1);}} />}
                    // secureTextEntry
                    // right={<TextInput.Icon name="eye" />}
                />
            )}} />
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
        height: '10%',
        // backgroundColor: 'purple',
        // borderWidth: 1,
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
        marginLeft: '6%',
        marginTop: '2%',
        width: '40%',
        marginVertical: 3,
        paddingVertical: 0,
    },

});
