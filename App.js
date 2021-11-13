import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import CartList from './components/CartList'
import {
    widthPercentageToDP as wp, heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen'

export default function App() {
    useEffect(() => {
        lor()
        return () => {
            rol();
        }
    }, [])
    return (
        <View style={{... styles.container , justifyContent: "center"}}>
            <CartList/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // height: hp(110),
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


