import {StyleSheet} from 'react-native';
import {scale} from "../../utils/scaler";
import colors from "../../themes/colors";

const styles = StyleSheet.create({
    safeAreaWrapper: {
        backgroundColor: colors.main.background,
        flex: 1,
    },
    headerWrapper: {
        backgroundColor: colors.main.background,
        paddingBottom: scale(19),
        alignItems: "center"
    },
    text: {
        alignSelf: "center",
        color: colors.text.title
    },
});

export default styles;
