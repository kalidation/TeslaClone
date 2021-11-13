import { StyleSheet, Dimensions } from 'react-native'
import {
    widthPercentageToDP as wp, heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        // height: Dimensions.get('window').height,
        height: hp('110%')
    },
    titles: {
        marginTop: 50,
        width: '100%',
        alignItems: 'center',
    },
    titl: {
        fontSize: 40,
        fontWeight: "bold",
    },
    subTitle: {
        fontSize: 18,
        color: '#5c5e62'
    },
    texteCT: {
        fontSize: 20,
        textDecorationLine: 'underline',
        fontWeight: '600'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 80,
        width: '100%',
    }
})

export default styles
