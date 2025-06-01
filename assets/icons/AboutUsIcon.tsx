import React, { FC } from "react";
import Svg, { Path } from "react-native-svg";

interface IProps {
    width?: number;
    height?: number;
    color?: string;
}

export const AboutUsIcon: FC<IProps> = ({ width, height, color }) => {
    return (
        <Svg width={width || 32} height={height || 32} viewBox="0 0 117 122">
            <Path
                fillRule="evenodd"
                d="M61.44 0c33.926 0 61.44 27.514 61.44 61.44s-27.514 61.439-61.44 61.439C27.513 122.88 0 95.366 0 61.44S27.513 0 61.44 0zm17.98 98.215H43.46v-6.053h6.757v-36.96H43.46v-4.816h16.808c4.245 0 8.422-.51 12.549-1.551v43.328h6.604v6.052h-.001zM63.859 21.078c2.785 0 4.975.805 6.571 2.396 1.579 1.59 2.377 3.771 2.377 6.581 0 2.848-1.358 5.381-4.093 7.601-2.751 2.22-5.941 3.338-9.577 3.338-2.733 0-4.905-.765-6.569-2.297-1.665-1.551-2.497-3.556-2.497-6.05 0-3.143 1.358-5.853 4.059-8.152 2.7-2.276 5.942-3.417 9.729-3.417z"
                clipRule="evenodd" />
        </Svg>
    );
}