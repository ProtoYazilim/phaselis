import { View, Text } from "react-native";

interface HeaderSlotDefaultProps {
  text: string;
}

const HeaderSlotDefault = ({ text = "Options" }: HeaderSlotDefaultProps) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "lightblue",
        padding: 10,
      }}
    >
      <Text>{text}</Text>
    </View>
  );
};

export default HeaderSlotDefault;
