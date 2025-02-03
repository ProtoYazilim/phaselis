import type { FC } from "react";
import type { GridSize } from "phaselis";
import { Dimensions, Text } from "react-native";
import { Row, Block, Col, Colors } from "phaselis";
import StoryView from "../../../src/StoryView";

const RowColBlockStory = () => {
  const SpecialBlock: FC<{
    text: string;
    backgroundColor: string;
    textColor?: string;
    size?: GridSize;
    offset?: GridSize;
    // eslint-disable-next-line react/no-unstable-nested-components
  }> = ({
    text,
    backgroundColor,
    size,
    offset,
    textColor = Colors.Primary[600],
  }) => {
    return (
      <Col size={size} offset={offset}>
        <Block
          style={{
            backgroundColor: backgroundColor,
            width: "100%",
            height: Dimensions.get("screen").height / 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: textColor, textAlign: "center" }}>{text}</Text>
        </Block>
      </Col>
    );
  };

  return (
    <StoryView style={{ gap: 8 }}>
      <Row>
        <SpecialBlock text="Col-12" backgroundColor={Colors.Primary[300]} />
      </Row>
      <Row>
        <SpecialBlock text="Col-6" backgroundColor={Colors.Primary[200]} />
        <SpecialBlock text="Col-6" backgroundColor={Colors.Primary[100]} />
      </Row>
      <Row>
        <SpecialBlock text="Col-4" backgroundColor={Colors.Primary[100]} />
        <SpecialBlock text="Col-4" backgroundColor={Colors.Primary[300]} />
        <SpecialBlock text="Col-4" backgroundColor={Colors.Primary[200]} />
      </Row>
      <Row>
        <SpecialBlock text="Col-3" backgroundColor={Colors.Primary[200]} />
        <SpecialBlock
          text="Col-3"
          backgroundColor={Colors.Primary[400]}
          textColor={Colors.Primary[100]}
        />
        <SpecialBlock text="Col-3" backgroundColor={Colors.Primary[100]} />
        <SpecialBlock text="Col-3" backgroundColor={Colors.Primary[300]} />
      </Row>
      <Row>
        <SpecialBlock text="Col-2" backgroundColor={Colors.Primary[100]} />
        <SpecialBlock text="Col-2" backgroundColor={Colors.Primary[300]} />
        <SpecialBlock text="Col-2" backgroundColor={Colors.Primary[200]} />
        <SpecialBlock
          text="Col-2"
          backgroundColor={Colors.Primary[400]}
          textColor={Colors.Primary[100]}
        />
        <SpecialBlock
          text="Col-2"
          backgroundColor={Colors.Primary[500]}
          textColor={Colors.Primary[200]}
        />
        <SpecialBlock
          text="Col-2"
          backgroundColor={Colors.Primary[600]}
          textColor={Colors.Primary[100]}
        />
      </Row>
      <Row>
        <SpecialBlock
          text="Col-3 Offset-3"
          backgroundColor={Colors.Primary[200]}
          size={3}
          offset={3}
        />
        <SpecialBlock
          text="Col-4 Offset-2"
          backgroundColor={Colors.Primary[100]}
          size={4}
        />
      </Row>
      <Row>
        <SpecialBlock text="Col" backgroundColor={Colors.Primary[100]} />
        <SpecialBlock text="Col" backgroundColor={Colors.Primary[300]} />
        <SpecialBlock text="Col" backgroundColor={Colors.Primary[200]} />
        <SpecialBlock
          text="Col"
          backgroundColor={Colors.Primary[400]}
          textColor={Colors.Primary[100]}
        />
        <SpecialBlock
          text="Col"
          backgroundColor={Colors.Primary[500]}
          textColor={Colors.Primary[200]}
        />
      </Row>
    </StoryView>
  );
};

export default RowColBlockStory;
