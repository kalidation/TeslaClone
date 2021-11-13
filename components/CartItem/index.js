import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './styles'
import StyledButton from '../StyledButton'


export default function index(props) {

    const { name, tagline, image, taglineCTA } = props.car;

    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.image} />
            <View style={styles.titles}>
                <Text style={styles.titl}>{name}</Text>
                <Text style={styles.subTitle}>
                    {tagline}
                    <Text style={styles.texteCT}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>
            <View style={styles.bottomContainer}>
                <StyledButton type="primaire" content="Custom Order" onPress={() => { }} />
                <StyledButton type="secondary" content="Existing Inventary" onPress={() => { }} />
            </View>
        </View>
    )
}
