const isValid = (value: any) => {
  return typeof value !== "undefined" && value !== null;
};

export { isValid };
