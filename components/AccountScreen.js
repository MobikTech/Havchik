import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';


export default function AccountScreen({navigation}) {
    return (
        <View style={styles.mainContainer}>
            <Button onPress={() => navigation.navigate('Log in')} title={'Log in'} />
            <Button onPress={() => navigation.navigate('Register')} title={'Sign up'} />
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {

    }
});
