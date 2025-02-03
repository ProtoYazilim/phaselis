/* eslint-disable react/no-unstable-nested-components */
import { Colors, List, Row, Col, Block } from "phaselis";
import { StyleSheet, Text } from "react-native";
import StoryView from "../../../src/StoryView";

const ListStory = () => {
  return (
    <StoryView>
      <List
        data={[
          {
            date: "01/02/25",
            description: (
              <>
                <Text style={styles.boldListText}>Previous Balance</Text>
                <Text style={styles.boldListText}>BANK ACCOUNT DETAIL</Text>
              </>
            ),
            amount: "25,000.00",
          },
          {
            date: "01/02/25",
            description: (
              <>
                <Text style={styles.boldListText}>
                  BERGL M. SCUBO - 1000 0000 0000 1000 0001
                </Text>
                <Text style={styles.listText}>
                  INSTL 1/12 SMART PHONE TECH CENTER
                </Text>
              </>
            ),
            amount: "2,500.00",
          },
          {
            date: "01/08/25",
            description: <Text style={styles.listText}>Egypt</Text>,
            amount: "600.00",
          },
          {
            date: "01/09/25",
            description: <Text style={styles.listText}>CLUB MEMBERSHIP</Text>,
            amount: "150.00",
          },
          {
            date: "01/17/25",
            description: (
              <Text style={styles.listText}>HYPERMARKET MARIKI</Text>
            ),
            amount: "900.00",
          },
          {
            date: "01/18/25",
            description: (
              <Text style={styles.boldListText}>PAYMENT - Thank You</Text>
            ),
            amount: "-25,000.00",
            bold: true,
          },
          {
            date: "01/19/25",
            description: (
              <Text style={styles.listText}>
                INSTL 1/3 FASHION MALL DESIGN & SHOW
              </Text>
            ),
            amount: "1,230.00",
          },
          {
            date: "01/19/25",
            description: (
              <Text style={styles.listText}>
                INSTL 1/12 SMART PHONE TECH CENTER
              </Text>
            ),
            amount: "500.00",
          },
          {
            date: "01/22/25",
            description: <Text style={styles.listText}>CLUB MEMBERSHIP</Text>,
            amount: "200.00",
          },
          {
            date: "01/23/25",
            description: (
              <Text style={styles.listText}>HYPERMARKET MARIKI</Text>
            ),
            amount: "300.00",
          },
          {
            date: "01/23/25",
            description: (
              <Text style={styles.listText}>
                INSTL 1/3 FASHION MALL DESIGN & SHOW
              </Text>
            ),
            amount: "850.00",
          },
          {
            date: "",
            description: (
              <Text style={styles.boldListText}>TOTAL AMOUNT DUE</Text>
            ),
            amount: "7,230.00",
            bold: true,
          },
        ]}
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
          element: { paddingVertical: 4 },
        }}
        ListHeaderComponent={() => (
          <Row style={{ paddingVertical: 4, paddingHorizontal: 8 }}>
            <Col size={3}>
              <Text style={styles.headerText}>Date</Text>
            </Col>
            <Col size={6}>
              <Text style={styles.headerText}>Description</Text>
            </Col>
            <Col size={3}>
              <Text style={[styles.headerText, { textAlign: "right" }]}>
                Amount
              </Text>
            </Col>
          </Row>
        )}
        ListFooterComponent={() => (
          <Block style={{ paddingTop: "10%" }}>
            <Block style={{ padding: 8 }}>
              <Text style={styles.listText}>PROTO BANK CARD CO.</Text>
              <Text style={styles.listText}>ISTANBUL, TURKEY</Text>
            </Block>
          </Block>
        )}
        renderItem={({
          item,
        }: {
          item: {
            date: string;
            description: string;
            amount: string;
            bold?: boolean;
          };
        }) => {
          return (
            <Row style={{ paddingVertical: 4, paddingHorizontal: 8 }}>
              <Col size={3}>
                <Text style={styles.listText}>{item.date}</Text>
              </Col>
              <Col size={6}>{item.description}</Col>
              <Col size={3}>
                {item.bold ? (
                  <Text style={styles.boldListText}>{item.amount}</Text>
                ) : (
                  <Text style={styles.listText}>{item.amount}</Text>
                )}
              </Col>
            </Row>
          );
        }}
      />
    </StoryView>
  );
};

export default ListStory;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 20,
  },
  boldListText: {
    fontSize: 14,
    fontWeight: 600,
    lineHeight: 18,
  },
  listText: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 18,
  },
});
