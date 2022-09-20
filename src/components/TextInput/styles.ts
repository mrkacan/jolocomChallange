import {StyleSheet} from 'react-native';
import {scale, verticalScale} from 'utils/scaler';
import colors from 'themes/colors';
import fonts from 'themes/fonts';
import {isIOS} from 'utils/device';

const INPUT_HEIGHT = scale(56);

export const customWidth = (width: number) => ({width: scale(width)});

const styles = StyleSheet.create({
  inputGeneralWrapper: {
    alignSelf: 'center',
    height: INPUT_HEIGHT,
    marginBottom: scale(64),
  },
  noHeight: {
    height: 'auto',
  },
  inputStyle: {
    backgroundColor: colors.inputBackground,
    height: INPUT_HEIGHT,
    paddingHorizontal: scale(10) * 2,
    alignItems: 'center',
    borderTopLeftRadius: scale(3),
    borderTopRightRadius: scale(3),
    borderWidth: 1,
    borderBottomWidth: 0,
    borderColor: colors.inputWrapperBorder,
  },
  inputText: {
    fontSize: scale(18),
    fontFamily: fonts.cairo,
    fontWeight: '600',
    color: colors.spaceCadet,
  },
  inputPlaceholder: {
    ...fonts.cairo200(scale(18)),
    color: colors.spaceCadet,
  },
  inputTitle: {
    position: 'absolute',
    paddingHorizontal: scale(20),
    zIndex: 1,
    ...fonts.cairo400(scale(12)),
    top: scale(3),
    color: colors.dropdownTitle,
    alignSelf: 'flex-start',
    textTransform: 'uppercase',
  },
  inputTitleRTL: {
    alignSelf: 'flex-end',
  },
  inputStyleRTL: {
    textAlign: 'right',
  },
  inputPassword: {
    paddingRight: scale(64),
  },
  inputPasswordRTL: {
    paddingLeft: scale(64),
  },
  accessoryView: {
    position: 'absolute',
    right: scale(14),
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  accessoryViewRTL: {
    left: scale(14),
    right: 'auto',
  },
  accessoryIcon: {
    height: INPUT_HEIGHT,
    alignContent: 'center',
    justifyContent: 'center',
    paddingLeft: scale(14),
  },
  accessoryIconRTL: {
    paddingLeft: 0,
    paddingRight: scale(14),
  },
  accessorySideLine: {
    width: scale(1),
    height: scale(32),
    top: (INPUT_HEIGHT - scale(32)) / 2,
    backgroundColor: colors.portGore,
  },
  rightIconWrapperGeneral: {
    position: 'absolute',
    top: (INPUT_HEIGHT - 15) / 2,
  },
  rightIconWrapper: {
    right: scale(24),
  },
  rightIconWrapperRTL: {
    left: scale(24),
  },
  eyeIconHitSlop: {
    left: scale(50),
    right: scale(50),
    top: scale(24),
    bottom: scale(24),
  },
  inputInfoWrapper: {
    borderTopWidth: 1,
    borderColor: colors.inputBorder,
    paddingLeft: scale(10) * 2,
  },
  inputInfoWrapperRTL: {
    alignSelf: 'flex-end',
    textAlign: 'right',
  },
  inputInfoSuccessBorder: {
    borderColor: colors.inputSuccessText,
  },
  inputInfoErrorBorder: {
    borderColor: colors.inputErrorText,
  },
  inputMessageText: {
    paddingTop: scale(5),
    ...fonts.cairo400(scale(12)),
  },
  inputInfoSuccessText: {
    color: colors.inputSuccessText,
    fontWeight: '700',
  },
  inputInfoErrorText: {
    color: colors.inputErrorText,
  },
  inputInfoHintText: {
    color: colors.inputHintText,
  },
  inputMessageRTL: {
    alignSelf: 'flex-end',
    textAlign: 'right',
    paddingLeft: 0,
    paddingRight: scale(10) * 2,
  },
  errorWrapper: {
    backgroundColor: colors.inputErrorBackground,
  },
  disableTextInput: {
    backgroundColor: colors.buttonDisabledBackground,
    color: colors.inputDisabledText,
  },
  disableTextInputTitle: {
    color: colors.inputDisabledText,
  },
  valuePadding: {
    paddingTop: verticalScale(isIOS ? 6 : 12),
  },
  multiLineWrapper: {
    height: verticalScale(350),
    marginBottom: scale(40),
  },
  multiline: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    height: verticalScale(350),
    ...fonts.cairo300(scale(16)),
    marginBottom: 0,
  },
  titleSuccess: {
    color: colors.inputSuccessText,
  },
  titleError: {
    color: colors.inputErrorText,
  },
  disabledInputInfoWrapper: {
    borderColor: colors.inputDisabledBorderColor,
  },
});

export default styles;
