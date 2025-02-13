import { Select, required, Row, Col } from "phaselis";
import StoryView from "../../../src/StoryView";
import StorySection from "../../../src/StorySection";

const SelectStory = () => {
  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
    { value: "4", label: "Option 4" },
    { value: "5", label: "Option 5" },
  ];

  return (
    <StoryView style={{ gap: 32 }}>
      <StorySection leftText="Default" rightText="MD" style={{ paddingTop: 8 }}>
        <Select
          name="1"
          size="md"
          validations={[required("required")]}
          options={options}
        />
      </StorySection>
      <StorySection
        leftText="Left Slot"
        rightText="MD"
        style={{ paddingTop: 8 }}
      >
        <Select
          name="2"
          leftIcon="Star"
          size="md"
          validations={[required("required")]}
          options={options}
        />
      </StorySection>
      <StorySection
        leftText="Sizes"
        rightText="Default"
        style={{ paddingTop: 8 }}
      >
        <Row style={{ alignItems: "center", gap: 16, marginBottom: 16 }}>
          <Col>
            <Select
              name="3"
              size="xs"
              placeholder="XS"
              validations={[required("required")]}
              options={options}
            />
          </Col>
          <Col>
            <Select
              name="4"
              size="sm"
              placeholder="SM"
              validations={[required("required")]}
              options={options}
            />
          </Col>
          <Col>
            <Select
              name="5"
              size="md"
              placeholder="MD"
              validations={[required("required")]}
              options={options}
            />
          </Col>
        </Row>
        <Row style={{ alignItems: "center", gap: 16, marginBottom: 16 }}>
          <Col>
            <Select
              name="6"
              size="lg"
              placeholder="LG"
              validations={[required("required")]}
              options={options}
            />
          </Col>
          <Col>
            <Select
              name="7"
              size="xl"
              placeholder="XL"
              validations={[required("required")]}
              options={options}
            />
          </Col>
        </Row>
        <Row style={{ alignItems: "center" }}>
          <Select
            name="8"
            size="xxl"
            placeholder="XXL"
            validations={[required("required")]}
            options={options}
          />
        </Row>
      </StorySection>
      <StorySection leftText="Focus" rightText="MD" style={{ paddingTop: 8 }}>
        <Select
          name="9"
          size="md"
          validations={[required("required")]}
          focus
          options={options}
        />
      </StorySection>
      <StorySection
        leftText="Disabled"
        rightText="MD"
        style={{ paddingTop: 8 }}
      >
        <Select
          name="10"
          size="md"
          validations={[required("required")]}
          disabled
          options={options}
        />
      </StorySection>
      <StorySection leftText="Error" rightText="MD">
        <Select
          name="11"
          size="md"
          validations={[required("required")]}
          error
          isChanged
          isUsed
          options={options}
        />
      </StorySection>
    </StoryView>
  );
};

export default SelectStory;
