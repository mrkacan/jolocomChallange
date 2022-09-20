import React from "react";
import {View} from "react-native";
import {scale} from "../utils/scaler";

type SpacerProps = {
    height: number
}

const Spacer: React.FC<SpacerProps> = ({
                                           height
                                       }) => {
    return <View style={{height: scale(height)}}></View>
}


export default Spacer;
