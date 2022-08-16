import { Dimensions } from "react-native";
import {
  Canvas,
  RoundedRect,
  LinearGradient,
  vec,
  Circle,
  Group,
  useFont,
  Text,
  TextPath,
  Skia,
  Blur,
} from "@shopify/react-native-skia";

import CairoFont from "../../assets/fonts/Cairo-Regular.ttf";
import { LoadIndicator } from "../LoadIndicator";

const width = Dimensions.get("window").width - 24;
const height = 200;

export function CreditCard() {
  const font = useFont(CairoFont, 16);

  const circle = Skia.Path.Make();
  circle.addCircle(30, -10, 50);

  if (font === null) {
    return <LoadIndicator />;
  }

  return (
    <Canvas
      style={{
        width: width,
        height: height,
        marginTop: 24,
      }}
    >
      <RoundedRect x={0} y={0} width={width} height={height} r={10}>
        <LinearGradient
          start={vec(0, 0)}
          end={vec(256, 256)}
          colors={["#5B9A93", "#2E645F", "#40534D", "#5B9A93"]}
        />
      </RoundedRect>

      <Group blendMode={"overlay"}>
        <Circle cx={width - 60} cy={40} r={20} color="#D6A485" />
        <Circle cx={width - 35} cy={40} r={20} color="#98504B" />
      </Group>

      <Text x={20} y={50} font={font} color="#FFFFFF" text={"Credit Card"} />

      <Text
        x={20}
        y={height - 90}
        font={font}
        color="#FFFFFF"
        text={"5345 3456 7890 1234"}
      />

      <Text
        x={20}
        y={height - 30}
        font={font}
        color="#FFFFFF"
        text={"12/2024"}
      />

      <Text
        x={width - 60}
        y={height - 30}
        font={font}
        color="#FFFFFF"
        text={"000"}
      />

      <TextPath
        text="Testando escrita em texto"
        font={font}
        path={circle}
        color="#000000"
        opacity={0.3}
      >

      <Blur 
        blur={1}
      />
      </TextPath>
    </Canvas>
  );
}
