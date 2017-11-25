// https://github.com/r3bl-alliance/react-native-weather/blob/f877f53f8038295401
// d4934fa8e2d7db79a4625c/app/Styles.js
import React from "react";
import {StyleSheet} from "react-native";

//https://material.io/color/#!/?view.left=0&view.right=0&primary.color=757575&secondary.color=03A9F4

export const colors = {
    primaryColor: '#757575',
    primaryLightColor: '#a4a4a4',
    primaryDarkColor: '#494949',
    primaryBackgroundColor: '#EEEEEE',
    secondaryColor: '#03a9f4',
    secondaryLightColor: '#67daff',
    secondaryDarkColor: '#007ac1',
    textPrimaryColor: '#ffffff',
    textSecondaryColor: '#000000',
    button_background: '#1589CE',
    button_color: '#ffffff'
};

// https://fonts.google.com/
// Note: Regular font should not be reference with e.g. file name is NotoSans-Regular, but we use NotoSans
// NotoSans-Bold
// NotoSans-BoldItalic
// NotoSans
// NotoSans-Italic
export const fonts = {
    title: {
        fontFamily: 'NotoSans-Bold',
        fontSize: 20
    },
    body : {
        fontFamily: 'NotoSans',
        fontSize: 14
    },
    tab : {
        fontFamily: 'NotoSans',
        fontSize: 14
    },
    input: {
        fontFamily: 'NotoSans',
        fontSize: 12
    },
    button: {
        fontFamily: 'NotoSans-Bold',
        fontSize: 12
    },
};

export const values = {
    border_radius: 5
};


// more info https://goo.gl/eawcVg
export const tabs = {
    container: {
        // text
        labelStyle: {
            ...fonts.input
        },
        activeTintColor: colors.textPrimaryColor, // text color active tab
        inactiveTintColor: colors.textPrimaryColor, // text color inactive tab
        indicatorStyle: {backgroundColor: colors.secondaryDarkColor}, // active tab highlight top
        style: {
            backgroundColor: colors.primaryDarkColor, // background color of tabs
            borderTopColor: colors.primaryLightColor // active tab highlight bottom
        }
    },
    item: {
        headerTintColor: colors.textPrimaryColor,
        headerStyle: {
            backgroundColor: colors.primaryDarkColor,
        }
    }
};

export const text = StyleSheet.create({
    default: {
        ...fonts.body,
        color: colors.textPrimaryColor
    },
    title: {
        ...fonts.body,
        color: colors.textPrimaryColor,
    },
    button: {
        ...fonts.button,
        color: colors.textSecondaryColor,
    }
});

export const scrollView = StyleSheet.create({
    default: {
        flexGrow: 1
    },
});

export const containers = StyleSheet.create({
    default: {
        flex: 1,
        flexDirection: 'column', // main axis
        justifyContent: 'center', // main axis
        alignItems: 'center', // cross axis

    },
    screen: {
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: colors.primaryBackgroundColor,
    },
    list: {
        marginTop: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0
    },
    details: {
        paddingLeft: 8,
        paddingRight: 8,
    }
});

export const textInput = StyleSheet.create({
    default: {
        ...fonts.input,
        margin: 5,
        padding: 10,
        minWidth: 300,
        backgroundColor: colors.primaryDarkColor,
        borderRadius: values.border_radius,
        color: colors.textPrimaryColor
    },
});

export const button = StyleSheet.create({
    default: {
        margin: 5,
        padding: 10,
        minWidth: 300,
        alignItems: 'center',
        backgroundColor: colors.button_background,
        borderRadius: values.border_radius
    },
});
