import React from "react";
import {Text} from "react-native";
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue
} from "react-native-reanimated";
import {SafeAreaView} from "react-native-safe-area-context";
import styles from "./styles";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import Spacer from "../Spacer";

type ITextInputProps = {
    children: React.ReactElement;
    title: string
}

const HIDE_VALUE = 50

const Collapsible: React.FC<ITextInputProps> = ({
                                                    children,
                                                    title,
                                                }) => {
    const translationY = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            translationY.value = event.contentOffset.y;
        },
    });

    const headerAnimatedStyle = useAnimatedStyle(() => {
        const result = {
            opacity: interpolate(translationY.value, [0, HIDE_VALUE], [0, 1], Extrapolate.CLAMP),
        };
        return result;
    });
    return <SafeAreaView style={styles.safeAreaWrapper}>
            <Animated.View style={[styles.headerWrapper, headerAnimatedStyle]}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </Animated.View>
            <Animated.ScrollView onScroll={scrollHandler} scrollEventThrottle={16}>
                {children}
                <Spacer height={350} />
            </Animated.ScrollView>
        </SafeAreaView>
}


export default Collapsible;
