import { List } from "phaselis";
import React from "react";
import { View, Text } from "react-native";

const ListStory = () => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <List
        data={[
          { name: "necati", surname: "sarhanli" },
          { name: "volkan", surname: "alay" },
          { name: "Gorkem", surname: "Elmas" },
        ]}
        style={{
          header: { backgroundColor: "red" },
          footer: { backgroundColor: "blue" },
          element: { backgroundColor: "green" },
        }}
        ListHeaderComponent={() => <Text>Header</Text>}
        ListFooterComponent={() => <Text>Footer</Text>}
        renderItem={({ item, index }) => {
          return (
            <Text>
              {item.name}`/` {item.surname}
            </Text>
          );
        }}
      ></List>
    </View>
  );
};

export default ListStory;
