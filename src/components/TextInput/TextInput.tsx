import React, {useState} from "react";
import {
    KeyboardTypeOptions,
    Text,
    TextInput as RNTextInput,
    TextInputProps,
    View
} from "react-native";
import colors from "../../themes/colors";
import styles from "./styles";
import Spacer from "../Spacer";
import {FormikErrors} from "formik";

interface ITextInputProps extends TextInputProps {
    value?: string;
    placeholder: string;
    error?: string | string [] | FormikErrors<any>;
    keyboardType?: KeyboardTypeOptions;
}

const TextInput: React.FC<ITextInputProps> = ({
                                                  value,
                                                  placeholder,
                                                  keyboardType,
                                                  onChangeText,
                                                  error,
    testID,
                                              }) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);

    return <View>
        <RNTextInput
            testID={testID}
            style={[styles.generalInput, isFocused && styles.focusedInput, error && styles.errorInput]}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            keyboardType={keyboardType}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholderTextColor={colors.input.placeholder}
            returnKeyType={"done"}
        />
        {
            !!error && <>
                <Text style={styles.errorText}>{error}</Text>
                <Spacer height={10}/>
            </>
        }
    </View>
}


export default TextInput;
