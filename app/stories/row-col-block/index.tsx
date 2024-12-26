import React from "react";
import { ScrollView, View, Text } from "react-native";
import { Row, Block, Col } from "phaselis";

const RowColBlockStory = () => {
  return (
    <ScrollView>
      <Row>
        <Col size={12} offset={0}>
          <Block
            style={{ height: 20, width: "100%", backgroundColor: "#c8bff3" }}
          >
            <Text>Col 12</Text>
          </Block>
        </Col>
      </Row>
      <Row>
        <Col size={6} offset={0}>
          <Block
            style={{ height: 20, width: "100%", backgroundColor: "#c8bff3" }}
          >
            <Text>Col 6</Text>
          </Block>
        </Col>
        <Col size={6} offset={0}>
          <View
            style={{ height: 20, width: "100%", backgroundColor: "#F57779" }}
          >
            <Text>Col 6</Text>
          </View>
        </Col>
      </Row>
      <Row>
        <Col size={3} offset={3}>
          <Block
            style={{ height: 20, width: "100%", backgroundColor: "#c8bff3" }}
          >
            <Text>Col 3 offset 3</Text>
          </Block>
        </Col>
        <Col size={3} offset={3}>
          <View
            style={{ height: 20, width: "100%", backgroundColor: "#F57779" }}
          >
            <Text>Col 3 offset 3</Text>
          </View>
        </Col>
      </Row>
      <Row>
        <Col size={2}>
          <Block
            style={{ height: 20, width: "100%", backgroundColor: "#c8bff3" }}
          >
            <Text>Col 2</Text>
          </Block>
        </Col>
        <Col size={2}>
          <View
            style={{ height: 20, width: "100%", backgroundColor: "#F57779" }}
          >
            <Text>Col 2</Text>
          </View>
        </Col>
        <Col size={2}>
          <Block
            style={{ height: 20, width: "100%", backgroundColor: "#c8bff3" }}
          >
            <Text>Col 2</Text>
          </Block>
        </Col>
        <Col size={2}>
          <View
            style={{ height: 20, width: "100%", backgroundColor: "#F57779" }}
          >
            <Text>Col 2</Text>
          </View>
        </Col>
        <Col size={2}>
          <Block
            style={{ height: 20, width: "100%", backgroundColor: "#c8bff3" }}
          >
            <Text>Col 2</Text>
          </Block>
        </Col>
        <Col size={2}>
          <Block
            style={{ height: 20, width: "100%", backgroundColor: "#F57779" }}
          >
            <Text>Col 2</Text>
          </Block>
        </Col>
      </Row>
    </ScrollView>
  );
};

export default RowColBlockStory;
