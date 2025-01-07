import { Colors, List } from "phaselis";
import React from "react";
import { View, Text } from "react-native";

const ListStory = () => {
  return (
    <View style={{ backgroundColor: "white", padding: 24 }}>
      <List
        data={[
          { name: "Pompeii", location: "Italy", period: "7th Century BCE" },
          { name: "Ephesus", location: "Turkey", period: "10th Century BCE" },
          { name: "Phaselis", location: "Turkey", period: "7th Century BCE" },
          { name: "Petra", location: "Jordan", period: "4th Century BCE" },
          { name: "Athens", location: "Greece", period: "5th Millennium BCE" },
          { name: "Carthage", location: "Tunisia", period: "9th Century BCE" },
          { name: "Babylon", location: "Iraq", period: "18th Century BCE" },
          { name: "Persepolis", location: "Iran", period: "6th Century BCE" },
          { name: "Machu Picchu", location: "Peru", period: "15th Century CE" },
          { name: "Angkor", location: "Cambodia", period: "9th Century CE" },
          { name: "Pompeii", location: "Italy", period: "7th Century BCE" },
          { name: "Ephesus", location: "Turkey", period: "10th Century BCE" },
          { name: "Petra", location: "Jordan", period: "4th Century BCE" },
          { name: "Athens", location: "Greece", period: "5th Millennium BCE" },
          { name: "Carthage", location: "Tunisia", period: "9th Century BCE" },
          { name: "Babylon", location: "Iraq", period: "18th Century BCE" },
          { name: "Persepolis", location: "Iran", period: "6th Century BCE" },
          { name: "Machu Picchu", location: "Peru", period: "15th Century CE" },
          { name: "Angkor", location: "Cambodia", period: "9th Century CE" },
        ]}
        style={{
          header: {
            backgroundColor: Colors.Primary[50],
            padding: 8,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          },
          footer: {
            backgroundColor: Colors.Primary[50],
            padding: 8,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          },
          element: {},
        }}
        ListHeaderComponent={() => (
          <Text
            style={{
              color: Colors.Primary[950],
              fontSize: 16,
              fontWeight: 700,
              lineHeight: 20,
            }}
          >
            Ancient Cities
          </Text>
        )}
        ListFooterComponent={() => (
          <Text style={{ color: Colors.Primary[950] }}>36 records found</Text>
        )}
        renderItem={({
          item,
        }: {
          item: { name: string; location: string; period: string };
        }) => {
          return (
            <View
              style={{
                paddingHorizontal: 8,
                paddingVertical: 4,
                marginVertical: 4,
                gap: 10,
                borderRadius: 8,
                backgroundColor:
                  item.name === "Phaselis" ? Colors.Primary[100] : undefined,
              }}
            >
              <Text
                style={{
                  color: Colors.Primary[950],
                  fontSize: 16,
                  lineHeight: 22,
                  fontWeight: 400,
                }}
              >
                {item.name} - {item.location} - {item.period}
              </Text>
            </View>
          );
        }}
      ></List>
    </View>
  );
};

export default ListStory;
