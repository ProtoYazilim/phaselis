import React from "react";

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
