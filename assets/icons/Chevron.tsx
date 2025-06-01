import React, { FC } from "react";
import { View } from "react-native";
import Svg, { Path } from "react-native-svg";

interface IProps {
    width: number;
    height: number;
    color: string;
    position?: "LEFT" | "RIGHT" | "UP" | "DOWN";
}

const TRANSFORM_DEGREE = {
    UP: "0deg",
    LEFT: "90deg",
    DOWN: "180deg",
    RIGHT: "270deg",
}

export const Chevron: FC<IProps> = ({ width, height, color, position = "UP" }) => {
    return <View style={{ transform: [{ rotate: TRANSFORM_DEGREE[position] }] }}>
        <Svg width={width || "32"} height={height || "32"} fill="none" viewBox="0 0 24 24">
            <Path
                d="M8 10l4 4 4-4"
                stroke={color}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    </View>;
};
Chevron.displayName = "Chevron";