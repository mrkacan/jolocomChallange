import {Image, Text, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import styles from "../Home/styles";
import Spacer from "../../components/Spacer";
import React from "react";
import Button from "../../components/Button/Button";
import success from "../../../assets/icons/success.png";
import failed from "../../../assets/icons/failed.png";

export default function Result() {
    const navigation = useNavigation();
    const isSuccess = Math.random() < 0.5;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{
                isSuccess ? "Success" : "Oooopsy"
            }</Text>
            <Image source={isSuccess ? success : failed} style={styles.image}/>
            <Spacer height={12}/>

            <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            </Text>
            <Spacer height={40}/>
            <Button type="secondary" onPress={navigation.goBack}>
                Start Over
            </Button>
        </View>
    );
}

