import React, {
  ReactNode,
  RefAttributes,
  useCallback,
  useRef,
  useState,
} from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  Text,
  TextInput as RNTextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import PasswordEye from 'assets/icons/passwordEye.svg';
import PasswordEyeNotSee from 'assets/icons/passwordEyeNotSee.svg';
import Calendar from 'assets/icons/calendar.svg';
import Camera from 'assets/icons/camera.svg';
import styles, {customWidth} from './styles';
import {useSelector} from 'react-redux';
import settingsSelectors from 'features/settings/selectors';
import colors from 'themes/colors';
import _ from 'lodash';
import {
  TextInputMask,
  TextInputMaskMethods,
  TextMaskMethods,
} from 'react-native-masked-text';
import {useTranslation} from 'react-i18next';
import Clipboard from '@react-native-clipboard/clipboard';

export const ICON_TYPES = {
  Eye: PasswordEye,
  CloseEye: PasswordEyeNotSee,
  Camera,
  Calendar,
};

interface ITextInputProps extends TextInputProps {
  value?: string;
  title: string;
  mask?: string;
  format?: string;
  money?: boolean;
  defaultValue?: string;
  placeholder: string;
  rightIcon?: Element;
  keyboardType?: KeyboardTypeOptions;
  maxLength?: number;
  autoFocus?: boolean;
  password?: boolean;
  error?: boolean;
  success?: boolean;
  message?: string;
  hint?: string;
  textInputStyle?: StyleProp<ViewStyle>;
  inputInfoStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<TextStyle>;
  children?: ReactNode;
  disabled?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onTapAccessory?: () => void;
  width?: number;
  required?: boolean;
}

const TextInput = React.forwardRef(
  (
    {
      value,
      title,
      mask,
      format,
      money,
      placeholder,
      onChangeText,
      maxLength = 100,
      keyboardType,
      autoFocus,
      password,
      error,
      success,
      message,
      hint,
      textInputStyle,
      inputInfoStyle,
      style,
      onKeyPress,
      disabled,
      onFocus,
      onBlur,
      textAlign,
      rightIcon,
      onTapAccessory,
      width = 326,
      multiline,
      required,
    }: ITextInputProps,
    ref: React.Ref<TextInputMask>,
  ) => {
    const {isRTL} = useSelector(settingsSelectors.getLanguage);
    const [isSecureText, setIsSecureText] = useState(password);
    const [isFocus, setIsFocus] = useState(false);
    const {t} = useTranslation('common');

    const inputFocusChanges = useCallback(
      (focusState: boolean) => {
        setIsFocus(focusState);
        if (onFocus && typeof onFocus === 'function' && focusState) {
          onFocus();
        } else if (onBlur && typeof onBlur === 'function' && !focusState) {
          onBlur();
        }
      },
      [isFocus],
    );

    const onChange = (text: string) => {
      onChangeText ? onChangeText(text) : null;
    };

    const textInputStyles = [
      styles.inputStyle,
      customWidth(width),
      isRTL && styles.inputStyleRTL,
      password && (isRTL ? styles.inputPasswordRTL : styles.inputPassword),
      isFocus || !!value ? styles.inputText : styles.inputPlaceholder,
      textInputStyle,
      error && styles.errorWrapper,
      !!value && styles.valuePadding,
      multiline && styles.multiline,
      disabled && styles.disableTextInput,
    ];

    const messageStyles = [
      styles.inputInfoWrapper,
      customWidth(width),
      success
        ? styles.inputInfoSuccessBorder
        : error
        ? styles.inputInfoErrorBorder
        : undefined,
      inputInfoStyle,
      disabled && styles.disabledInputInfoWrapper,
    ];

    const placeholderColor = disabled
      ? colors.inputDisabledText
      : !success && !error
      ? colors.inputPlaceholder
      : success
      ? colors.inputSuccessText
      : colors.inputErrorText;

    const messageTextStyles = [
      styles.inputMessageText,
      customWidth(_.min([300, width]) || 300),
      success && !hint
        ? styles.inputInfoSuccessText
        : error
        ? styles.inputInfoErrorText
        : styles.inputInfoHintText,
      isRTL && styles.inputMessageRTL,
    ];

    const titleTextStyles = [
      styles.inputTitle,
      isRTL && styles.inputTitleRTL,
      {
        opacity: isFocus || !!value ? 1 : 0,
      },
      !!success && styles.titleSuccess,
      !!error && styles.titleError,
      disabled && styles.disableTextInputTitle,
    ];

    const iconStyles = [
      styles.rightIconWrapperGeneral,
      isRTL ? styles.rightIconWrapperRTL : styles.rightIconWrapper,
    ];

    const messageText = (!success && hint && hint) || message;

    const accessoryViewStyles = [
      styles.accessoryView,
      isRTL && styles.accessoryViewRTL,
    ];
    const accessoryIconStyles = [
      styles.accessoryIcon,
      isRTL && styles.accessoryIconRTL,
    ];
    const accessorySideLine = <View style={styles.accessorySideLine} />;

    const TextInputComponent =
      _.isEmpty(mask || format) && !money ? RNTextInput : TextInputMask;

    let moneyOptions = {};

    if (money) {
      moneyOptions = {
        precision: 0,
        separator: '.',
        delimiter: ',',
        unit: `${t('sar')} `,
        suffixUnit: '',
        zeroCents: false,
      };
    }
    const onMoneyChange = (text: string) => {
      const numberOnly = text.replace(/\D/g, '');
      onChangeText ? onChangeText(numberOnly) : null;
    };

    const moneyRef: React.RefObject<
      RefAttributes<TextMaskMethods> & TextInputMaskMethods
    > = useRef(null);

    return (
      <View
        style={[
          styles.inputGeneralWrapper,
          customWidth(width),
          style,
          (!!error || !!success || !!message || !!hint) && styles.noHeight,
          multiline && styles.multiLineWrapper,
        ]}>
        <TextInputComponent
          ref={money ? moneyRef : ref}
          type={money ? 'money' : format ? 'datetime' : 'custom'}
          includeRawValueInChangeText={!!money}
          options={{
            mask: mask || '',
            format: format || '',
            ...moneyOptions,
          }}
          selectionColor={'#000'}
          placeholderTextColor={placeholderColor}
          placeholder={isFocus ? '' : `${placeholder} ${required ? '*' : ''}`}
          style={textInputStyles}
          maxLength={maxLength}
          onChangeText={money ? onMoneyChange : onChange}
          keyboardType={keyboardType}
          autoFocus={autoFocus}
          onFocus={() => inputFocusChanges(true)}
          onBlur={() => inputFocusChanges(false)}
          defaultValue={value}
          secureTextEntry={isSecureText}
          value={value}
          spellCheck={false}
          allowFontScaling={false}
          autoCorrect={false}
          onKeyPress={onKeyPress}
          textAlign={textAlign ? textAlign : isRTL ? 'right' : 'left'}
          editable={!disabled}
          autoCapitalize={'none'}
          multiline={multiline}
          contextMenuHidden={true}
          selectTextOnFocus={false}
        />
        {!!title && (
          <Text style={titleTextStyles}>{`${title} ${
            required ? '*' : ''
          }`}</Text>
        )}
        {password ? (
          <TouchableOpacity
            onPress={() => setIsSecureText(!isSecureText)}
            style={iconStyles}
            hitSlop={styles.eyeIconHitSlop}>
            {isSecureText ? <ICON_TYPES.Eye /> : <ICON_TYPES.CloseEye />}
          </TouchableOpacity>
        ) : (
          rightIcon && (
            <View style={accessoryViewStyles}>
              {!isRTL && accessorySideLine}
              <TouchableOpacity
                onPress={onTapAccessory}
                style={accessoryIconStyles}
                hitSlop={styles.eyeIconHitSlop}>
                {rightIcon}
              </TouchableOpacity>
              {isRTL && accessorySideLine}
            </View>
          )
        )}
        <View style={messageStyles}>
          <Text style={messageTextStyles}>{messageText}</Text>
        </View>
      </View>
    );
  },
);

export default TextInput;
