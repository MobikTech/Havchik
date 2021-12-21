import React from 'react';
import {StyleSheet} from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts} from "expo-font";
import {NavigationContainer} from "@react-navigation/native";
import BottomTabs from "./navigation/BottomTabs";
import StackAccount from "./navigation/StackAccount";


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
            <BottomTabs />
          );
    }
}

const styles = StyleSheet.create({

});

