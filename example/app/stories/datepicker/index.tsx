import { useRef } from "react";
import { StyleSheet, Text } from "react-native";
import type { FormReference } from "phaselis";
import { Block, Form, Datepicker, Colors, Row, Col } from "phaselis";
import StoryView from "../../../src/StoryView";
import StorySection from "../../../src/StorySection";

const DatepickerStory = () => {
  const refForm = useRef<FormReference>(null);

  return (
    <StoryView>
      <Form ref={refForm}>
        <StorySection leftText="Default" rightText="MD">
          <Row style={{ gap: 16 }}>
            <Col>
              <Datepicker
                name="datepicker1"
                format={"dd / MM / yyyy"}
                value={new Date(2026, 6, 4)}
                rightIconVisible={false}
                full
              />
            </Col>
            <Col>
              <Datepicker
                name="datepicker2"
                format={"dd / MM / yyyy"}
                value={new Date(2028, 5, 14)}
                rightIconVisible={false}
                full
              />
            </Col>
          </Row>
        </StorySection>
        <StorySection leftText="Date Format" rightText="MD">
          <Row
            style={{
              justifyContent: "space-between",
              paddingBottom: 32,
            }}
          >
            <Block style={{ alignItems: "center" }}>
              <Text style={styles.upperText}>DD</Text>
              <Datepicker
                name="datepicker16"
                format={"dd"}
                value={new Date(2026, 6, 4)}
                rightIconVisible={false}
              />
            </Block>
            <Block style={{ alignItems: "center" }}>
              <Text style={styles.upperText}>MM</Text>
              <Datepicker
                name="datepicker17"
                format={"MM"}
                value={new Date(2026, 6, 4)}
                rightIconVisible={false}
              />
            </Block>
            <Block style={{ alignItems: "center" }}>
              <Text style={styles.upperText}>YYYY</Text>
              <Datepicker
                name="datepicker18"
                format={"yyyy"}
                value={new Date(2026, 6, 4)}
                rightIconVisible={false}
              />
            </Block>
            <Block style={{ alignItems: "center" }}>
              <Text style={styles.upperText}>YY</Text>
              <Datepicker
                name="datepicker19"
                format={"yy"}
                value={new Date(2026, 6, 4)}
                rightIconVisible={false}
              />
            </Block>
            <Block style={{ alignItems: "center" }}>
              <Text style={styles.upperText}>MM/YY</Text>
              <Datepicker
                name="datepicker20"
                format={"MM / yy"}
                value={new Date(2026, 6, 4)}
                rightIconVisible={false}
              />
            </Block>
          </Row>
          <Row style={{ marginBottom: 4, justifyContent: "space-between" }}>
            <Block style={{ alignItems: "center" }}>
              <Text style={styles.upperText}>DD/MM/YYYY</Text>
              <Datepicker
                name="datepicker3"
                format={"dd / MM / yyyy"}
                value={new Date(2026, 6, 4)}
                rightIconVisible={false}
              />
            </Block>
            <Block style={{ alignItems: "center" }}>
              <Text style={styles.upperText}>YYYY/MM/DD</Text>
              <Datepicker
                name="datepicker4"
                format={"yyyy / MM / dd"}
                value={new Date(2026, 6, 4)}
                rightIconVisible={false}
              />
            </Block>
          </Row>
        </StorySection>
        <StorySection leftText="Left Right Slot" rightText="MD">
          <Block
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Datepicker
              name="datepicker5"
              format={"dd / MM / yyyy"}
              value={new Date(2026, 6, 4)}
              leftIcon="CalendarDays"
              rightIconVisible={false}
            />
            <Datepicker
              name="datepicker6"
              format={"dd / MM / yyyy"}
              value={new Date(2028, 5, 14)}
              rightIcon="Calendar"
            />
          </Block>
        </StorySection>
        <StorySection leftText="Sizes" style={{ gap: 16 }}>
          <Block
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Datepicker
              name="datepicker7"
              size="xs"
              format={"dd / MM / yyyy"}
              value={new Date(2026, 6, 4)}
              leftIcon="CalendarDays"
              rightIconVisible={false}
            />
            <Text style={styles.upperText}>XS</Text>
          </Block>
          <Block
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Datepicker
              name="datepicker8"
              size="sm"
              format={"dd / MM / yyyy"}
              value={new Date(2026, 6, 4)}
              leftIcon="CalendarDays"
              rightIconVisible={false}
            />
            <Text style={styles.upperText}>SM</Text>
          </Block>
          <Block
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Datepicker
              name="datepicker9"
              size="md"
              format={"dd / MM / yyyy"}
              value={new Date(2026, 6, 4)}
              leftIcon="CalendarDays"
              rightIconVisible={false}
            />
            <Text style={styles.upperText}>MD</Text>
          </Block>
          <Block
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Datepicker
              name="datepicker10"
              size="lg"
              format={"dd / MM / yyyy"}
              value={new Date(2026, 6, 4)}
              leftIcon="CalendarDays"
              rightIconVisible={false}
            />
            <Text style={styles.upperText}>LG</Text>
          </Block>
          <Block
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Datepicker
              name="datepicker11"
              size="xl"
              format={"dd / MM / yyyy"}
              value={new Date(2026, 6, 4)}
              leftIcon="CalendarDays"
              rightIconVisible={false}
            />
            <Text style={styles.upperText}>XL</Text>
          </Block>
          <Block
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Datepicker
              name="datepicker12"
              size="xxl"
              format={"dd / MM / yyyy"}
              value={new Date(2026, 6, 4)}
              leftIcon="CalendarDays"
              rightIconVisible={false}
            />
            <Text style={styles.upperText}>XXL</Text>
          </Block>
        </StorySection>
        <StorySection leftText="States" rightText="MD" style={{ gap: 16 }}>
          <Block
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Datepicker
              name="datepicker13"
              format={"dd / MM / yyyy"}
              value={new Date(2026, 6, 4)}
              leftIcon="CalendarDays"
              rightIconVisible={false}
              focus
            />
            <Text style={styles.upperText}>Focus</Text>
          </Block>
          <Block
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Datepicker
              name="datepicker14"
              format={"dd / MM / yyyy"}
              value={new Date(2026, 6, 4)}
              leftIcon="CalendarDays"
              rightIconVisible={false}
              disabled
            />
            <Text style={styles.upperText}>Disabled</Text>
          </Block>
          <Block
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Datepicker
              name="datepicker15"
              format={"dd / MM / yyyy"}
              value={new Date(2026, 6, 4)}
              leftIcon="CalendarDays"
              rightIconVisible={false}
              error
            />
            <Text style={styles.upperText}>Error</Text>
          </Block>
        </StorySection>
      </Form>
    </StoryView>
  );
};

const styles = StyleSheet.create({
  upperText: {
    marginBottom: 4,
    color: Colors.Primary[300],
    fontSize: 14,
    fontWeight: 400,
  },
});

export default DatepickerStory;
