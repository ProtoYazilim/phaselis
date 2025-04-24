import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  Block,
  Button,
  Checkbox,
  Col,
  InputGroup,
  Label,
  Link,
  List,
  Radio,
  RadioGroup,
  Row,
  Textfield,
  useColors,
  type PhaselisColors,
} from "phaselis";
import LinearGradient from "react-native-linear-gradient";
import StoryView from "../../src/StoryView";
import {
  BankIconSVG,
  ContactlessIconSVG,
  MastercardLogoSVG,
} from "../../assets/svg";

type CreditCardProps = {
  bankName: string;
  cardType: string;
  creditCardNumber: string;
  validThru: string;
  cvc: string;
  cardHolderName: string;
};

const DEFAULT_CARD_DATA = {
  bankName: "PROTOBANK",
  cardType: "CREDIT",
  creditCardNumber: "0000 0000 0000 0000",
  validThru: "01/25",
  cvc: "999",
  cardHolderName: "Name Surname",
};

const CreditCardView = ({
  bankName,
  cardType,
  creditCardNumber,
  validThru,
  cvc,
  cardHolderName,
}: CreditCardProps) => {
  return (
    <LinearGradient
      colors={["#0A397E", "#703C6D"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.linearGradient}
    >
      <Block style={styles.cardView}>
        <Block style={styles.bankNameContainer}>
          <BankIconSVG />
          <View style={styles.bankNameInnerContainer}>
            <Text style={styles.bankNameText}>{bankName}</Text>
            <Text style={styles.cardTypeText}>{cardType}</Text>
          </View>
        </Block>

        <Block style={styles.cardNumbersContainer}>
          <View style={styles.cardNumberRow}>
            <Text style={styles.cardNumberText}>{creditCardNumber}</Text>
            <View style={styles.contactlessContainer}>
              <ContactlessIconSVG />
            </View>
          </View>
          <View style={styles.detailsRow}>
            <View style={styles.validThruContainer}>
              <View style={styles.validThruLabels}>
                <Text style={styles.smallText}>VALID</Text>
                <Text style={styles.smallText}>THRU</Text>
              </View>
              <Text style={styles.cardNumberText}>{validThru}</Text>
            </View>
            <Text style={styles.cardNumberText}>{cvc}</Text>
          </View>
        </Block>

        <Block style={styles.footerContainer}>
          <Text style={styles.cardNumberText}>{cardHolderName}</Text>
          <View style={styles.mastercardContainer}>
            <MastercardLogoSVG />
            <Text style={styles.mastercardText}>mastercard</Text>
          </View>
        </Block>
      </Block>
    </LinearGradient>
  );
};

const CardDetailsForm = ({
  onCardholderNameChange,
  onCardNumberChange,
  onExpiryMonthChange,
  onExpiryYearChange,
  onCvcChange,
}: {
  onCardholderNameChange: (name: string) => void;
  onCardNumberChange: (number: string) => void;
  onExpiryMonthChange: (month: string) => void;
  onExpiryYearChange: (year: string) => void;
  onCvcChange: (cvc: string) => void;
}) => {
  const Colors = useColors<PhaselisColors>();

  const handleCardNumberChange = (text: string) => {
    const numericText = text.replace(/[^0-9]/g, "");
    onCardNumberChange(numericText);
  };

  return (
    <Block
      style={{
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Colors.Primary[200],
        gap: 32,
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 32,
      }}
    >
      <Label variation="h4">Enter Card Details</Label>

      <InputGroup label="Cardholder Name">
        <Textfield
          name="cardholder-name"
          onChangeText={onCardholderNameChange}
        />
      </InputGroup>

      <InputGroup label="Card Number">
        <Textfield
          name="card-number"
          keyboardType="number-pad"
          onChangeText={handleCardNumberChange}
          maxLength={16}
        />
      </InputGroup>

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
                onChangeText={onExpiryMonthChange}
                maxLength={2}
              />
              <Text>YY</Text>
              <Textfield
                name="year"
                style={{ container: { width: "23%" } }}
                keyboardType="number-pad"
                onChangeText={onExpiryYearChange}
                maxLength={2}
              />
            </Row>
          </InputGroup>
        </Col>
        <Col size={3}>
          <InputGroup label="CCV">
            <Textfield
              name="ccv"
              keyboardType="number-pad"
              onChangeText={onCvcChange}
              maxLength={3}
            />
          </InputGroup>
        </Col>
      </Row>
    </Block>
  );
};

const InstallmentListHeader = ({ Colors }: { Colors: PhaselisColors }) => (
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
);

const InstallmentItem = ({
  item,
  Colors,
}: {
  item: { id: string; monthly: string; total: string };
  Colors: PhaselisColors;
}) => (
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

const CreditCardPayment = () => {
  const Colors = useColors<PhaselisColors>();
  const [cardholderName, setCardholderName] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiryMonth, setExpiryMonth] = useState<string>("");
  const [expiryYear, setExpiryYear] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");

  const {
    bankName,
    cardType,
    creditCardNumber: defaultCardNumber,
    validThru: defaultValidThru,
    cvc: defaultCvc,
    cardHolderName: defaultCardHolderName,
  } = DEFAULT_CARD_DATA;

  const formattedExpiryDate =
    expiryMonth || expiryYear
      ? `${expiryMonth || "0"}/${expiryYear || "00"}`
      : defaultValidThru;

  const formatCardNumber = (number: string) => {
    if (!number) return defaultCardNumber;

    const formatted = number.replace(/(.{4})/g, "$1 ").trim();

    if (number.length < 16) {
      const paddedNumber = number + "0".repeat(16 - number.length);
      return paddedNumber.replace(/(.{4})/g, "$1 ").trim();
    }

    return formatted;
  };

  const formattedCardNumber = formatCardNumber(cardNumber);

  const installmentOptions = [
    { id: "1", monthly: "$500.00", total: "$500.00" },
    { id: "2", monthly: "$260.00", total: "$510.00" },
    { id: "3", monthly: "$183.30", total: "$550.00" },
    { id: "4", monthly: "$150.00", total: "$600.00" },
    { id: "5", monthly: "$140.00", total: "$700.00" },
    { id: "6", monthly: "$130.00", total: "$780.00" },
  ];

  const listStyle = {
    header: {
      backgroundColor: Colors.Primary[50],
      paddingVertical: 4,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
    },
    footer: { padding: 8 },
    container: { marginHorizontal: 16 },
    element: { paddingVertical: 4 },
  };

  return (
    <StoryView style={{ gap: 16 }}>
      <CreditCardView
        bankName={bankName}
        cardType={cardType}
        creditCardNumber={formattedCardNumber}
        validThru={formattedExpiryDate}
        cvc={cvc || defaultCvc}
        cardHolderName={cardholderName || defaultCardHolderName}
      />
      <CardDetailsForm
        onCardholderNameChange={(name) => setCardholderName(name)}
        onCardNumberChange={(number) => setCardNumber(number)}
        onExpiryMonthChange={(month) => setExpiryMonth(month)}
        onExpiryYearChange={(year) => setExpiryYear(year)}
        onCvcChange={(newCvc) => setCvc(newCvc)}
      />
      <Accordion>
        <AccordionItem
          headerText="Installment"
          style={{ container: { borderRadius: 8, marginTop: 8 } }}
        >
          <RadioGroup name="installment">
            <List
              data={installmentOptions}
              style={listStyle}
              ListHeaderComponent={() => (
                <InstallmentListHeader Colors={Colors} />
              )}
              renderItem={({ item }) => (
                <InstallmentItem item={item} Colors={Colors} />
              )}
            />
          </RadioGroup>
        </AccordionItem>
      </Accordion>
      <Block style={{ flexDirection: "row", gap: 4 }}>
        <Checkbox name="terms-checkbox" size="sm" value={true}>
          <Link
            text="I agree to the Terms and Conditions"
            rightIcon="ExternalLink"
          />
        </Checkbox>
      </Block>
      <Checkbox name="save-card-checkbox" text="Save card details" size="sm" />
      <Button text="Pay Now" />
    </StoryView>
  );
};

export default CreditCardPayment;

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 10,
  },
  cardView: {
    height: 192,
    padding: 16,
    borderRadius: 10,
    justifyContent: "space-between",
  },
  bankNameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  bankNameInnerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 8,
  },
  bankNameText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "400",
  },
  cardTypeText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
  cardNumbersContainer: {
    marginTop: 12,
  },
  cardNumberRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardNumberText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
  },
  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 32,
    marginTop: 12,
    paddingHorizontal: 16,
  },
  validThruContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  validThruLabels: {
    flexDirection: "column",
    marginRight: 2,
  },
  smallText: {
    color: "#FFF",
    fontSize: 8,
    fontWeight: "500",
    marginRight: 2,
  },
  contactlessContainer: {
    width: 32,
    height: 30,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mastercardContainer: {
    alignItems: "center",
  },
  mastercardText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "600",
  },
});
