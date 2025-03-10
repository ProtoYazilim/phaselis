import { Radio, RadioGroup, InputGroup, required } from "phaselis";
import FormStoryView from "../../../src/FormStoryView";

const FormUsage = () => {
  return (
    <FormStoryView
      values={{
        test: "2",
      }}
    >
      <InputGroup label="Preferred Language">
        <RadioGroup
          name="test"
          resetValue={""}
          validations={[required("En az bi deger seciniz")]}
        >
          <Radio text={"Turkish"} value={"1"} />
          <Radio text={"English"} value={"2"} />
          <Radio text={"Spanish"} value={"3"} />
          <Radio text={"Chinese"} value={"4"} />
        </RadioGroup>
      </InputGroup>
    </FormStoryView>
  );
};

export default FormUsage;
