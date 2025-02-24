import {
  Block,
  Row,
  useColors,
  Col,
  useShadows,
  type PhaselisShadows,
  type PhaselisColors,
  useTheme,
} from "phaselis";
import { Text } from "react-native";
import StorySection from "../../../src/StorySection";
import StoryView from "../../../src/StoryView";

const ShadowExample = () => {
  const Colors = useColors<PhaselisColors>();
  const Shadows = useShadows<PhaselisShadows>();
  const { themeName } = useTheme();
  const EffectBox = ({
    frontText,
    backText,
    shadow,
  }: {
    frontText: string;
    backText: string;
    shadow?: any;
  }) => {
    return (
      <>
        <Block
          style={{
            position: "absolute",
            top: 30,
            left: 30,
            width: "100%",
            aspectRatio: 1,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: Colors.Primary[600],
            backgroundColor: themeName === "light" ? "white" : "black",
            justifyContent: "center",
            alignItems: "center",
            shadows: shadow ? [shadow] : [],
          }}
        >
          <Text style={{ color: Colors.Primary[600], fontSize: 14 }}>
            {backText}
          </Text>
        </Block>
        <Block
          style={{
            width: "100%",
            zIndex: 2,
            aspectRatio: 1,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: Colors.Primary[600],
            backgroundColor: themeName === "light" ? "white" : "black",
            justifyContent: "center",
            alignItems: "center",
            //box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.12);
            shadows: shadow ? [shadow] : [],
          }}
        >
          <Text style={{ color: Colors.Primary[600], fontSize: 14 }}>
            {frontText}
          </Text>
        </Block>
      </>
    );
  };

  return (
    <StoryView>
      <StorySection
        leftText="Shadow"
        rightText="Solid MD"
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 60,
        }}
      >
        <Row style={{ gap: 60, paddingRight: 30 }}>
          <Col>
            <EffectBox
              frontText={"Shadow XS"}
              backText={""}
              shadow={Shadows.XS}
            />
          </Col>
          <Col>
            <EffectBox
              frontText={"Shadow SM"}
              backText={""}
              shadow={Shadows.SM}
            />
          </Col>
        </Row>
        <Row style={{ gap: 60, paddingRight: 30 }}>
          <Col>
            <EffectBox
              frontText={"Shadow XS"}
              backText={""}
              shadow={Shadows.MD}
            />
          </Col>
          <Col>
            <EffectBox
              frontText={"Shadow SM"}
              backText={""}
              shadow={Shadows.LG}
            />
          </Col>
        </Row>
        <Row style={{ gap: 60, paddingRight: 30 }}>
          <Col>
            <EffectBox
              frontText={"Shadow XS"}
              backText={""}
              shadow={Shadows.XL}
            />
          </Col>
          <Col>
            <EffectBox
              frontText={"Shadow SM"}
              backText={""}
              shadow={Shadows.XXL}
            />
          </Col>
        </Row>
      </StorySection>
    </StoryView>
  );
};

export default ShadowExample;
