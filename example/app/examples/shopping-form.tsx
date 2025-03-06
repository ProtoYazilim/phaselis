import type { PhaselisColors } from "phaselis";
import { Text } from "react-native";
import {
  ProgressStep,
  Row,
  Stepper,
  useColors,
  Button,
  AccordionItem,
  Accordion,
  Col,
  InputGroup,
  Switch,
  Select,
  Checkbox,
  Block,
  List,
  Radio,
  Textfield,
  Label,
  RadioGroup,
} from "phaselis";
import StoryView from "../../src/StoryView";
import SectionDivider from "../../src/SectionDivider";

const data = [
  {
    id: "1",
    monthly: "$500.00",
    total: "$500.00",
  },
  {
    id: "2",
    monthly: "$260.00",
    total: "$510.00",
  },
  {
    id: "3",
    monthly: "$183.30",
    total: "$550.00",
  },
  {
    id: "4",
    monthly: "$150.00",
    total: "$600.00",
  },
  {
    id: "5",
    monthly: "$140.00",
    total: "$700.00",
  },
  {
    id: "6",
    monthly: "$130.00",
    total: "$780.00",
  },
];

const ShoppingFormStory = () => {
  const Colors = useColors<PhaselisColors>();

  return (
    <StoryView>
      <Stepper
        renderFooter={({
          nextButtonProps,
          //   previousButtonProps,
          stepperState,
        }) => (
          <>
            {stepperState?.activeStepIndex === 1 && (
              <Row style={{ justifyContent: "flex-end", marginTop: 8 }}>
                <Button
                  text="Payment"
                  rightIcon="ChevronRight"
                  disabled={nextButtonProps.disabled}
                  onClick={nextButtonProps.onPress}
                />
              </Row>
            )}
            {stepperState?.activeStepIndex === 2 && (
              <Row style={{ justifyContent: "center", marginTop: 8 }}>
                <Button
                  text="Pay Now"
                  disabled={nextButtonProps.disabled}
                  onClick={nextButtonProps.onPress}
                />
              </Row>
            )}
            {/* <Button
              disabled={previousButtonProps.disabled}
              onClick={previousButtonProps.onPress}
            /> */}
          </>
        )}
        lastTrailShown
        activeStep={1}
      >
        <ProgressStep text="Cart">
          <Text>Cart</Text>
        </ProgressStep>
        <ProgressStep text="Shipping">
          <Accordion>
            <AccordionItem headerText="Shipping Address">
              <Text style={{ color: Colors.Primary[950] }}>
                Shipping Address
              </Text>
            </AccordionItem>
            <AccordionItem
              headerText="Billing Address"
              style={{ element: { gap: 32 } }}
            >
              <Row
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: Colors.Primary[950] }}>
                  Same as Shipping
                </Text>
                <Switch name="switch-1" showIcons />
              </Row>
              <Row style={{ justifyContent: "space-between", gap: 8 }}>
                <Col>
                  <InputGroup label="Firstname">
                    <Textfield name="firstname" placeholder="İsim" />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup label="Lastname">
                    <Textfield name="lastname" placeholder="Soyisim" />
                  </InputGroup>
                </Col>
              </Row>
              <Row style={{ justifyContent: "space-between", gap: 8 }}>
                <Col>
                  <InputGroup label="Country">
                    <Select
                      name="country"
                      options={[
                        { label: "Turkey", value: "TR" },
                        { label: "United States", value: "US" },
                      ]}
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup label="City">
                    <Select
                      name="city"
                      options={[
                        { label: "Istanbul", value: "IST" },
                        { label: "New York", value: "NY" },
                      ]}
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col>
                  <InputGroup label="Address">
                    <Textfield
                      name="address"
                      placeholder="Type here..."
                      textarea
                      rightIcon="MapPin"
                    />
                  </InputGroup>
                </Col>
              </Row>
              <Row style={{ justifyContent: "space-between", gap: 8 }}>
                <Col>
                  <InputGroup label="Zip">
                    <Textfield name="zip" keyboardType="number-pad" />
                  </InputGroup>
                </Col>
                <Col />
              </Row>
              <Row style={{ justifyContent: "space-between", gap: 8 }}>
                <Col>
                  <Checkbox name="gift" text="Send as gift" />
                </Col>
                <Col />
              </Row>
            </AccordionItem>
          </Accordion>
        </ProgressStep>
        <ProgressStep text="Payment">
          <Block
            style={{
              borderWidth: 1,
              borderColor: Colors.Primary[200],
              borderRadius: 8,
              padding: 16,
              gap: 32,
            }}
          >
            <Row
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: 8,
              }}
            >
              <Label variation="h5">Payment Amount</Label>
              <Label variation="h3">$500.00</Label>
            </Row>
            <SectionDivider leftText={""} rightText={""} />
            <Row>
              <Col>
                <InputGroup label="Cardholder Name">
                  <Textfield name="cardholder-name" />
                </InputGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <InputGroup label="Card Number">
                  <Textfield name="card-number" keyboardType="number-pad" />
                </InputGroup>
              </Col>
            </Row>
            <Row style={{ gap: 15 }}>
              <Col size={9}>
                <InputGroup label="Expiry Date">
                  <Row
                    style={{
                      gap: 8,
                      justifyContent: "flex-start",
                      alignItems: "center",
                    }}
                  >
                    <Text>MM</Text>
                    <Textfield
                      name="month"
                      style={{ container: { width: "23%" } }}
                      keyboardType="number-pad"
                    />
                    <Text>YY</Text>
                    <Textfield
                      name="year"
                      style={{ container: { width: "23%" } }}
                      keyboardType="number-pad"
                    />
                  </Row>
                </InputGroup>
              </Col>
              <Col size={3}>
                <InputGroup label="CVV">
                  <Textfield name="card-number" keyboardType="number-pad" />
                </InputGroup>
              </Col>
            </Row>
          </Block>
          <Accordion>
            <AccordionItem
              headerText="Installment"
              style={{ container: { borderRadius: 8, marginTop: 8 } }}
            >
              <RadioGroup name="installment">
                <List
                  data={data}
                  style={{
                    header: {
                      backgroundColor: Colors.Primary[50],
                      paddingVertical: 4,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                    },
                    footer: {
                      padding: 8,
                    },
                    container: {
                      marginVertical: 24,
                      marginHorizontal: 16,
                    },
                    element: { paddingVertical: 4 },
                  }}
                  ListHeaderComponent={() => (
                    <Row style={{ paddingVertical: 4, paddingHorizontal: 8 }}>
                      <Col>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: 700,
                            lineHeight: 20,
                            color: Colors.Primary[950],
                          }}
                        >
                          Installment
                        </Text>
                      </Col>
                      <Col>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: 700,
                            lineHeight: 20,
                            color: Colors.Primary[950],
                            textAlign: "right",
                          }}
                        >
                          Monthly
                        </Text>
                      </Col>
                      <Col>
                        <Text
                          style={{
                            fontSize: 15,
                            fontWeight: 700,
                            lineHeight: 20,
                            color: Colors.Primary[950],
                            textAlign: "right",
                          }}
                        >
                          Total
                        </Text>
                      </Col>
                    </Row>
                  )}
                  renderItem={({
                    item,
                  }: {
                    item: { id: string; monthly: string; total: string };
                  }) => {
                    return (
                      <Row style={{ paddingHorizontal: 4, paddingVertical: 8 }}>
                        <Col style={{ justifyContent: "center" }}>
                          <Radio text={item.id} value={item.id} />
                        </Col>
                        <Col style={{ justifyContent: "center" }}>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: 600,
                              lineHeight: 18,
                              color: Colors.Primary[950],
                              textAlign: "right",
                            }}
                          >
                            {item.monthly}
                          </Text>
                        </Col>
                        <Col style={{ justifyContent: "center" }}>
                          <Text
                            style={{
                              fontSize: 14,
                              fontWeight: 400,
                              lineHeight: 18,
                              color: Colors.Primary[950],
                              textAlign: "right",
                            }}
                          >
                            {item.total}
                          </Text>
                        </Col>
                      </Row>
                    );
                  }}
                />
              </RadioGroup>
            </AccordionItem>
          </Accordion>
        </ProgressStep>
        <ProgressStep text="Delivery" disabled>
          <Text>Delivery</Text>
        </ProgressStep>
      </Stepper>
    </StoryView>
  );
};

export default ShoppingFormStory;
