import React, {useEffect, useState} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import Button from "../../components/Button";
import {getDishesByTitle, getSavedDishes, getToken} from "../../api/requests";

export default function AccountScreen({navigation}) {
    // const [currentToken, setToken] = useState(null);
    // const [savedDishes, setSavedDishes] = useState(null);
    // const currentToken = Promise.all([getToken()]).then((tokens) => tokens[0]).done(() => {console.log(currentToken);});

    // setTimeout(() => {}, 3000)
    // console.log(currentToken)
    //
    // useEffect(() => {
    //     getSavedDishes()
    //         .then(dishes => setSavedDishes(dishes))
    // }, [currentToken])
    //
    // try {
    //     getSavedDishes().
    // }
    // catch (ex){
    //
    // }
    //
    // while ()
    // if(currentToken !== null && )
    return (
        <View style={styles.mainContainer}>
            <Image source={require('../../assets/icons/user.png')} style={styles.image} />
            <Button
                mode="contained"
                onPress={() => navigation.navigate('Log in')}
                style={styles.button}
            >
                Log in
            </Button><Button
                mode="contained"
                onPress={() => navigation.navigate('Register')}
                style={styles.button}
            >
            Register
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 140,
        height: 140,
        marginBottom: 8,

    },
    button:{
        width: '60%'
    },
});
