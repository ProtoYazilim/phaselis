import React, { FC } from "react";
import { ScrollView, Text } from "react-native";
import { Row, Block, Col, Colors, GridSize } from "phaselis";

const RowColBlockStory = () => {
  const SpecialBlock: FC<{
    text: string;
    backgroundColor: string;
    textColor?: string;
    size?: GridSize;
    offset?: GridSize;
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
            height: 106,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: textColor }}>{text}</Text>
        </Block>
      </Col>
    );
  };

  return (
    <ScrollView style={{ padding: 24 }}>
      <Row>
        <SpecialBlock text="Col-12" backgroundColor={Colors.Primary[300]} />
      </Row>
      <Row style={{ marginTop: 8 }}>
        <SpecialBlock text="Col-6" backgroundColor={Colors.Primary[200]} />
        <SpecialBlock text="Col-6" backgroundColor={Colors.Primary[100]} />
      </Row>
      <Row style={{ marginTop: 8 }}>
        <SpecialBlock text="Col-4" backgroundColor={Colors.Primary[100]} />
        <SpecialBlock text="Col-4" backgroundColor={Colors.Primary[300]} />
        <SpecialBlock text="Col-4" backgroundColor={Colors.Primary[200]} />
      </Row>
      <Row style={{ marginTop: 8 }}>
        <SpecialBlock text="Col-3" backgroundColor={Colors.Primary[200]} />
        <SpecialBlock
          text="Col-3"
          backgroundColor={Colors.Primary[400]}
          textColor={Colors.Primary[100]}
        />
        <SpecialBlock text="Col-3" backgroundColor={Colors.Primary[100]} />
        <SpecialBlock text="Col-3" backgroundColor={Colors.Primary[300]} />
      </Row>
      <Row style={{ marginTop: 8 }}>
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
      <Row style={{ marginTop: 8 }}>
        <SpecialBlock
          text="Col-3 Offset-3"
          backgroundColor={Colors.Primary[200]}
          size={3}
          offset={3}
        />
        <SpecialBlock
          text="Col-2 Offset-4"
          backgroundColor={Colors.Primary[100]}
          size={2}
          offset={4}
        />
      </Row>
      <Row style={{ marginTop: 8 }}>
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
    </ScrollView>
  );
};

export default RowColBlockStory;
