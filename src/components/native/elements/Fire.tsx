import React from "react";
import { Path, Defs, LinearGradient, Stop, Svg } from "react-native-svg";

const Fire = (props: any) => {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            id="SvgjsSvg2914"
            x={0}
            y={0}
            viewBox="0 0 512 512"
            width={200}
            height={200}
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlnsSvgjs="http://svgjs.dev/svgjs"
            {...props}
        >
            <Path
                d="M369.214 159.814c-91.389-55.601-48.533-134.078-46.693-137.34A14.999 14.999 0 0 0 309.515 0c-47.043 0-83.881 13.366-109.49 39.729-43.759 45.044-41.729 115.151-40.862 145.088.097 3.317.179 6.182.179 8.311 0 22.228 3.566 42.748 6.713 60.854 2.028 11.668 3.779 21.744 4.091 29.664.333 8.482-1.216 10.424-1.281 10.503-.221.263-2.062 1.241-7.036 1.241-5.674 0-9.856-1.854-13.563-6.009-14.476-16.233-15.477-60.554-12.709-84.667a14.999 14.999 0 0 0-14.898-16.732c-38.945 0-68.047 63.688-68.047 120.632 0 26.769 5.385 52.991 16.004 77.94 10.266 24.119 24.904 45.885 43.512 64.696C150.877 490.425 201.97 512 255.993 512c54.242 0 105.321-21.27 143.831-59.889 38.41-38.521 59.564-89.482 59.564-143.499 0-68.921-53.927-126.746-90.174-148.798z"
                fill='url("#SvgjsLinearGradient2915")'
            />
            <Defs>
                <LinearGradient
                    gradientTransform="rotate(270 0.5 0.5)"
                    id="SvgjsLinearGradient2915"
                >
                    <Stop stopOpacity={1} stopColor="rgba(186, 87, 21)" offset={0} />
                    <Stop
                        stopOpacity={1}
                        stopColor="rgba(218, 0, 0)"
                        offset={0.666015625}
                    />
                    <Stop
                        stopOpacity={1}
                        stopColor="rgba(255, 0, 0)"
                        offset={0.881015625}
                    />
                    <Stop stopOpacity={1} stopColor="rgba(255, 94, 0)" offset={1} />
                </LinearGradient>
            </Defs>
        </Svg>
    );
};

export default Fire;