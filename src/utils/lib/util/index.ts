import React, { useEffect, useState } from "react";
import { Appearance } from "react-native";

export const getEvent = function (event: any) {
  let eventToSend;
  if (event.nativeEvent && event.nativeEvent.key) {
    eventToSend = {
      target: {
        value: event.nativeEvent.key,
      },
    };
  } else if (event.nativeEvent) {
    eventToSend = {
      target: {
        value: event.nativeEvent.text,
        checked: event.nativeEvent.checked,
      },
    };
  } else {
    eventToSend = event;
  }

  return eventToSend;
};

export const cloneSlot = (slot: any, props: any) => {
  if (!slot) {
    return null;
  }
  if (typeof slot === "function") {
    return slot(props);
  } else if (React.isValidElement(slot)) {
    return React.cloneElement(slot, props);
  }
};

export const useColorScheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    Appearance.getColorScheme() === "dark",
  );

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDarkMode(colorScheme === "dark");
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return isDarkMode;
};
