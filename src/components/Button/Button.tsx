import React from "react";
import {Pressable, Text} from "react-native";
import styles from "./styles";
import {LinearGradient} from 'expo-linear-gradient';

type ITextInputProps = {
    type: 'default' | 'secondary'
    children: string;
    disabled: boolean;
    onPress: () => void
}
const Button: React.FC<ITextInputProps> = ({
                                               type = "default",
                                               children,
                                               disabled,
                                               onPress
                                           }) => {

    return <Pressable onPress={onPress} disabled={disabled}>
        <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={type === 'default' ? ['#911942', '#D22D69'] : ['#292929', '#292929']}
            style={[styles.buttonWrapper, disabled && {opacity: 0.5}]}
        >
            <Text style={styles.text}>
                {children}
            </Text>
        </LinearGradient>
    </Pressable>
}


export default Button;
