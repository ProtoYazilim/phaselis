import type { ViewStyle } from "react-native";
import type { PhaselisSpacings, FormReference } from "phaselis";
import React, { useRef } from "react";
import { Alert, ScrollView, View } from "react-native";
import { Button, Form, Block, useSpacings } from "phaselis";

const FormStoryView = ({
  children,
  values,
  style,
  scrollview,
}: {
  children: React.ReactNode;
  values: { [key: string]: any } | { [key: string]: any }[];
  style?: ViewStyle;
  scrollview?: boolean;
}) => {
  const refForm = useRef<FormReference>(null);
  const Spacings = useSpacings<PhaselisSpacings>();

  const handleOnSetValues = (v: any) => {
    refForm.current?.setValues(v);
  };

  const ContainerComponent = scrollview ? ScrollView : View;

  const renderSetters = () => {
    if (values?.length > 0) {
      return (values as any[]).map((v: any, index) => (
        <Button
          key={index}
          type="button"
          text={`Set : ${JSON.stringify(v)}`}
          onClick={() => handleOnSetValues(v)}
        />
      ));
    } else {
      return (
        <Button
          key={"setter"}
          type="button"
          text={`Set : ${JSON.stringify(values)}`}
          onClick={() => handleOnSetValues(values)}
        />
      );
    }
  };

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: "white" }}>
      <Form
        ref={refForm}
        onSubmit={(e, values) => {
          Alert.alert("Form Values", JSON.stringify(values));
        }}
      >
        <ContainerComponent
          style={scrollview ? null : { flex: 1, ...style }}
          contentContainerStyle={{ flex: 1, ...style }}
        >
          {children}
        </ContainerComponent>
        <Block style={{ gap: Spacings.MD }}>
          <Button type="submit" text="Submit" />
          {renderSetters()}
          <Button type="reset" text="Reset" />
        </Block>
      </Form>
    </View>
  );
};

export default FormStoryView;
