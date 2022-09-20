import {StyleSheet} from 'react-native';
import {scale} from "../../utils/scaler";
import colors from "../../themes/colors";

const styles = StyleSheet.create({
    buttonWrapper: {
        width: scale(336),
        height: scale(49),
        backgroundColor: colors.main.background,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: scale(6)
    },
    text: {
        alignSelf: "center",
        color: colors.text.title
    },
});

export default styles;
