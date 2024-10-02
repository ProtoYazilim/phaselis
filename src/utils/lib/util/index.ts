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
