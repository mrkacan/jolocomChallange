import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import {scale} from "../../utils/scaler";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.main.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: colors.text.title,
        textAlign: "center",
        fontSize: scale(27)
    },
    description: {
        color: colors.text.text,
        textAlign: "center",
        fontSize: scale(14)
    },
    image: {
        width: scale(43),
        height: scale(44),
        resizeMode: "cover"
    }
});

export default styles;
