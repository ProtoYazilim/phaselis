import React, { useMemo, useState } from "react";
import { View } from "react-native";
import TestTabHeader from "./TestTabHeader";

const TabView = ({ children, ...extraProps }: any) => {
  const [activeTab, setActiveTab] = useState(0);
  const data = useMemo(() => {
    return children.map((item: any, index: any) => {
      return {
        text: item.props.title,
      };
    });
  }, [children]);

  const handleOnPress = (index: number) => {
    setActiveTab(index);
  };

  return (
    <View style={{ width: "100%", position: "relative" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {data.map((item: any, index: any) => {
          return (
            <TestTabHeader
              activeTabIndex={activeTab}
              handleOnPress={handleOnPress}
              item={item}
              index={index}
              key={index}
            />
          );
        })}
      </View>
      <View
        style={{
          backgroundColor: "#f3f5fb",
          height: "100%",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          padding: 30,
        }}
      >
        {React.Children.map(children, (child, index) => {
          if (child && child.type && child.type.displayName === "TABITEM") {
            if (activeTab === index) {
              return child.props.children;
            }
          }
        })}
      </View>
    </View>
  );
};

export default TabView;
