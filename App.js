import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {globalStyle} from "./styles/style";
import AppLoading from 'expo-app-loading';
import {useFonts} from "expo-font";


export default function App() {
    let [fontsLoaded] = useFonts({
        'pp-light': require('./assets/fonts/Poppins-ExtraLight.ttf'),
        'pp-medium': require('./assets/fonts/Poppins-Medium.ttf'),
        'pp-bold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
              <View style={styles.mainContainer}>
                <Text style={globalStyle.text}>Havchik</Text>
              </View>
          );
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'green'
    }
});

