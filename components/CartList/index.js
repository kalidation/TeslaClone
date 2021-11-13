import React from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import styles from './styles'
import cars from './cars'
import CarItem from '../CartItem'
import {
    widthPercentageToDP as wp, heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen'

export default function index() {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />}
                showsVerticalScrollIndicator={false}
                snapToAlignment={'center'}
                decelerationRate={'normal'}
                snapToInterval={hp(110)}
            />
        </View>
    )
}
