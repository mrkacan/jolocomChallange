import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import {scale} from "../../utils/scaler";

const styles = StyleSheet.create({
    generalInput: {
        width:scale(336),
        alignSelf:"center",
        height: scale(55),
        borderWidth: 1,
        borderColor: colors.input.border,
        backgroundColor: colors.input.background,
        borderRadius: scale(10),
        marginBottom: scale(10),
        paddingHorizontal: scale(16),
        color: colors.input.text
    },
    focusedInput: {
        borderColor: colors.input.focusedBorder,
    },
    errorInput: {
        borderColor: colors.input.errorBorder,
    },
    errorText: {
        color: colors.input.errorText,
        fontSize: scale(12)
    }
});

export default styles;
