import { StyleSheet } from 'react-native'
import {
    widthPercentageToDP as wp, heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen'

const stylesButton = StyleSheet.create({
    buttonContainer: {
        width: '100%',
        padding: 10
    },
    button: {
        backgroundColor: 'coral',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    texte: {
        fontSize: 14,
        fontWeight: '600',
        textTransform: 'uppercase',

    }
})

export default stylesButton
