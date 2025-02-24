import {
  List,
  Row,
  Col,
  Block,
  useColors,
  type PhaselisColors,
} from "phaselis";
import { StyleSheet, Text } from "react-native";
import StoryView from "../../../src/StoryView";

const ListStory = () => {
  const Colors = useColors<PhaselisColors>();

  return (
    <StoryView>
      <List
        data={[
          {
            date: "01/02/25",
            description: (
              <>
                <Text
                  style={[styles.boldListText, { color: Colors.Primary[950] }]}
                >
                  Previous Balance
                </Text>
                <Text
                  style={[styles.boldListText, { color: Colors.Primary[950] }]}
                >
                  BANK ACCOUNT DETAIL
                </Text>
              </>
            ),
            amount: "25,000.00",
          },
          {
            date: "01/02/25",
            description: (
              <>
                <Text
                  style={[styles.boldListText, { color: Colors.Primary[950] }]}
                >
                  BERGL M. SCUBO - 1000 0000 0000 1000 0001
                </Text>
                <Text style={[styles.listText, { color: Colors.Primary[950] }]}>
                  INSTL 1/12 SMART PHONE TECH CENTER
                </Text>
              </>
            ),
            amount: "2,500.00",
          },
          {
            date: "01/08/25",
            description: (
              <Text style={[styles.listText, { color: Colors.Primary[950] }]}>
                Egypt
              </Text>
            ),
            amount: "600.00",
          },
          {
            date: "01/09/25",
            description: (
              <Text style={[styles.listText, { color: Colors.Primary[950] }]}>
                CLUB MEMBERSHIP
              </Text>
            ),
            amount: "150.00",
          },
          {
            date: "01/17/25",
            description: (
              <Text style={[styles.listText, { color: Colors.Primary[950] }]}>
                HYPERMARKET MARIKI
              </Text>
            ),
            amount: "900.00",
          },
          {
            date: "01/18/25",
            description: (
              <Text
                style={[styles.boldListText, { color: Colors.Primary[950] }]}
              >
                PAYMENT - Thank You
              </Text>
            ),
            amount: "-25,000.00",
            bold: true,
          },
          {
            date: "01/19/25",
            description: (
              <Text style={[styles.listText, { color: Colors.Primary[950] }]}>
                INSTL 1/3 FASHION MALL DESIGN & SHOW
              </Text>
            ),
            amount: "1,230.00",
          },
          {
            date: "01/19/25",
            description: (
              <Text style={[styles.listText, { color: Colors.Primary[950] }]}>
                INSTL 1/12 SMART PHONE TECH CENTER
              </Text>
            ),
            amount: "500.00",
          },
          {
            date: "01/22/25",
            description: (
              <Text style={[styles.listText, { color: Colors.Primary[950] }]}>
                CLUB MEMBERSHIP
              </Text>
            ),
            amount: "200.00",
          },
          {
            date: "01/23/25",
            description: (
              <Text style={[styles.listText, { color: Colors.Primary[950] }]}>
                HYPERMARKET MARIKI
              </Text>
            ),
            amount: "300.00",
          },
          {
            date: "01/23/25",
            description: (
              <Text style={[styles.listText, { color: Colors.Primary[950] }]}>
                INSTL 1/3 FASHION MALL DESIGN & SHOW
              </Text>
            ),
            amount: "850.00",
          },
          {
            date: "",
            description: (
              <Text
                style={[styles.boldListText, { color: Colors.Primary[950] }]}
              >
                TOTAL AMOUNT DUE
              </Text>
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
              <Text style={[styles.headerText, { color: Colors.Primary[950] }]}>
                Date
              </Text>
            </Col>
            <Col size={6}>
              <Text style={[styles.headerText, { color: Colors.Primary[950] }]}>
                Description
              </Text>
            </Col>
            <Col size={3}>
              <Text
                style={[
                  [styles.headerText, { color: Colors.Primary[950] }],
                  { textAlign: "right" },
                ]}
              >
                Amount
              </Text>
            </Col>
          </Row>
        )}
        ListFooterComponent={() => (
          <Block style={{ paddingTop: "10%" }}>
            <Block style={{ padding: 8 }}>
              <Text style={[styles.listText, { color: Colors.Primary[950] }]}>
                PROTO BANK CARD CO.
              </Text>
              <Text style={[styles.listText, { color: Colors.Primary[950] }]}>
                ISTANBUL, TURKEY
              </Text>
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
                <Text style={[styles.listText, { color: Colors.Primary[950] }]}>
                  {item.date}
                </Text>
              </Col>
              <Col size={6}>{item.description}</Col>
              <Col size={3}>
                {item.bold ? (
                  <Text
                    style={[
                      styles.boldListText,
                      { color: Colors.Primary[950] },
                    ]}
                  >
                    {item.amount}
                  </Text>
                ) : (
                  <Text
                    style={[styles.listText, { color: Colors.Primary[950] }]}
                  >
                    {item.amount}
                  </Text>
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
