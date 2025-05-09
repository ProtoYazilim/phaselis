import type { PhaselisColors, FormReference } from "phaselis";
import {
  Block,
  Col,
  Form,
  List,
  Row,
  Textfield,
  Button,
  useColors,
} from "phaselis";
import { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";

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
        variation="tertiary_outline"
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
  const resetCalc = () => {
    numPad.current?.setValues({ lcd: "" });
  };
  const calcCalc = () => {
    let { lcd } = numPad.current?.getValues();
    // eslint-disable-next-line no-eval
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
      <Button
        style={{
          borderWidth: 10,
          borderColor: "red",
        }}
      />
    </Form>
  );
};

export default Calculator;
