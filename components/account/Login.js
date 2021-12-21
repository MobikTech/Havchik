import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {globalStyle} from "../../styles/style";


export default function Login() {
    return (
        <View style={styles.mainContainer}>
            <Text style={globalStyle.text}>Log in</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});
