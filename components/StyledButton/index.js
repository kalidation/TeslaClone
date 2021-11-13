import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

export default function index(props) {

    const { type, onPress, content } = props

    const backgroundColor = type === 'primaire' ? '#333' : 'rgba(100, 100, 100, .2)';
    const textColor = type === 'primaire' ? 'white' : '#333';

    return (
        <View style={styles.buttonContainer} >
            <Pressable
                {...props}
                style={{ ...styles.button, backgroundColor: backgroundColor }}
                onPress={() => onPress()}>
                <Text style={{ ...styles.texte, color: textColor }}>{content}</Text>
            </Pressable>
        </View>
    )
}
