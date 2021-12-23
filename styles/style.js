import {StyleSheet} from "react-native";
import { DefaultTheme } from 'react-native-paper'


export const globalStyle = StyleSheet.create({
    text: {
        backgroundColor: 'red',
        fontFamily: 'pp-bold',
        alignSelf: 'center',
        // fontFamily: 'pp-medium',
        // fontFamily: 'pp-light',
        fontSize: 30,
    },
    fontBold: {
        fontFamily: 'pp-bold',
    },
    fontMedium: {
        fontFamily: 'pp-medium',
    },
    fontLight: {
        fontFamily: 'pp-light',
    },


})

export const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        text: '#000000',
        primary: '#560CCE',
        secondary: '#414757',
        error: '#f13a59',
    },
}
