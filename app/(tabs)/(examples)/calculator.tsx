import {
  Block,
  Col,
  Form,
  List,
  Row,
  Textfield,
  Button,
} from "@phaselis/components";
import { FormReference } from "@phaselis/components/form";
import { useColors } from "@phaselis/components/provider/lib/hooks";
import React, { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import { PhaselisColors } from "@phaselis/theme";

const CalculatorButton = ({
  text,
  onClick,
  type = "button",
}: {
  text: string;
  onClick?: Function;
  type?: any;
}) => {
  const [show, setShow] = useState(true);
  const handleOnClick = () => {
    setShow(false);
    onClick?.(text);
  };
  useEffect(() => {
    if (!show) {
      setTimeout(() => {
        setShow(true);
      }, 100);
    }
  }, [show]);

  return (
    show && (
      <Button
        text={text}
        type={type}
        size="sm"
        outline
        tertiary
        onClick={handleOnClick}
      />
    )
  );
};

const Calculator = () => {
  const numPad = useRef<FormReference>(null);

  const COLORS = useColors<PhaselisColors>();

  type DataItem = string | { id: string; math: string; result: string };
  const [data, setData] = useState<DataItem[]>([]);

  const updateCalc = (text: string) => {
    let { lcd } = numPad.current?.getValues();
    let lcdText = (lcd || "") + text;
    numPad.current?.setValues({ lcd: lcdText });
  };
  const resetCalc = (text: string) => {
    numPad.current?.setValues({ lcd: "" });
  };
  const calcCalc = () => {
    let { lcd } = numPad.current?.getValues();
    const evalResult = eval(lcd);
    numPad.current?.setValues({ lcd: "" });
    const newItem = {
      id: Date.now().toString(),
      math: lcd,
      result: evalResult,
    };
    setData([newItem, ...data]);
  };

  const delCalc = () => {
    let { lcd } = numPad.current?.getValues();
    if (lcd.length > 0) {
      const newLcdValue = lcd.slice(0, -1);
      numPad.current?.setValues({ lcd: newLcdValue });
    }
  };

  const clearCalc = () => {
    numPad.current?.setValues({ lcd: "" });
    setData([]);
  };

  return (
    <Form ref={numPad}>
      <Block
        style={{
          gap: 10,
          width: "100%",
          padding: 10,
        }}
      >
        <View
          style={{
            height: 300,
            borderColor: COLORS.Gray[500],
            borderWidth: 1,
            borderRadius: 8,
            borderStyle: "solid",
            padding: 4,
            gap: 4,
          }}
        >
          <Textfield name="lcd" size="md" />
          <View
            style={{
              height: 240,
              padding: 8,
            }}
          >
            <List
              data={data}
              renderItem={({ item, index }) => {
                return (
                  <Text>
                    {item.math}={item.result}
                  </Text>
                );
              }}
            ></List>
          </View>
        </View>
        <Row style={{ gap: 10 }}>
          <Col size={3}>
            <CalculatorButton text="AC" onClick={resetCalc} />
          </Col>
          <Col size={3}>
            <CalculatorButton text="<" onClick={delCalc} />
          </Col>
          <Col size={3}>
            <CalculatorButton text="CLS" onClick={clearCalc} />
          </Col>
          <Col size={3}>
            <CalculatorButton text="/" onClick={updateCalc} />
          </Col>
        </Row>
        <Row style={{ gap: 10 }}>
          <Col size={3}>
            <CalculatorButton text="7" onClick={updateCalc} />
          </Col>
          <Col size={3}>
            <CalculatorButton text="8" onClick={updateCalc} />
          </Col>
          <Col size={3}>
            <CalculatorButton text="9" onClick={updateCalc} />
          </Col>
          <Col size={3}>
            <CalculatorButton text="*" onClick={updateCalc} />
          </Col>
        </Row>
        <Row style={{ gap: 10 }}>
          <Col size={3}>
            <CalculatorButton text="4" onClick={updateCalc} />
          </Col>
          <Col size={3}>
            <CalculatorButton text="5" onClick={updateCalc} />
          </Col>
          <Col size={3}>
            <CalculatorButton text="6" onClick={updateCalc} />
          </Col>
          <Col size={3}>
            <CalculatorButton text="-" onClick={updateCalc} />
          </Col>
        </Row>
        <Row style={{ gap: 10 }}>
          <Col size={3}>
            <CalculatorButton text="1" onClick={updateCalc} />
          </Col>
          <Col size={3}>
            <CalculatorButton text="2" onClick={updateCalc} />
          </Col>
          <Col size={3}>
            <CalculatorButton text="3" onClick={updateCalc} />
          </Col>
          <Col size={3}>
            <CalculatorButton text="+" onClick={updateCalc} />
          </Col>
        </Row>
        <Row style={{ gap: 10 }}>
          <Col size={6}>
            <CalculatorButton text="0" onClick={updateCalc} />
          </Col>

          <Col size={3}>
            <CalculatorButton text="." onClick={updateCalc} />
          </Col>
          <Col size={3}>
            <CalculatorButton text="=" onClick={calcCalc} />
          </Col>
        </Row>
      </Block>
    </Form>
  );
};

export default Calculator;
