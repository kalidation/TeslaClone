import { StyleSheet, Dimensions } from 'react-native'
import {
    widthPercentageToDP as wp, heightPercentageToDP as hp,
    listenOrientationChange as lor,
    removeOrientationListener as rol
} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    container: {
        width: '100%',
    }
})

export default styles
