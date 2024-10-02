import React, { useState } from "react";
import { AccordionProps } from "./types";
import { PhaselisHOC } from "@phaselis/components/provider";
import { useStyles } from "react-native-unistyles";
import stylesheet from "./assets/styles";
import { createContext } from "react";

const AccordionContext = createContext<{
  onChange: (value: any, index: number) => void;
  expandedIndex?: number[];
  addToExapandedIndex?: (value: number) => void;
  expandMode?: "single" | "multiple";
}>({
  onChange: () => {},
  expandedIndex: [],
  addToExapandedIndex: () => {},
  expandMode: "single",
});

const Accordion = ({
  onChange,
  style,
  disabled,
  size = "md",
  contextValue,
  expandMode = "single",
  data,
  children,
}: AccordionProps) => {
  const { styles: defaultStyles } = useStyles(stylesheet, {
    disabled,
    size,
  });

  const { styles: themeStyles } = useStyles(
    contextValue?.theme?.switch as typeof stylesheet,
    {
      disabled,
      size,
    },
  );

  const { styles: propStyle } = useStyles(style as typeof stylesheet, {
    disabled,
    size,
  });

  const handleOnChange = (expand: boolean, index: number) => {
    if (expandMode === "single") {
      setExpandedIndex(expand ? [index] : []);
      return;
    } else {
      if (expand) {
        setExpandedIndex([...expandedIndex, index]);
      } else {
        setExpandedIndex(expandedIndex.filter((i) => i !== index));
      }
    }
  };

  const [expandedIndex, setExpandedIndex] = useState<number[]>([]);

  const addToExapandedIndex = (index: number) => {
    const newValues = new Set([...expandedIndex, index]);
    setExpandedIndex(Array.from(newValues));
  };

  return (
    <AccordionContext.Provider
      value={{
        onChange: handleOnChange,
        expandedIndex: expandedIndex,
        addToExapandedIndex: addToExapandedIndex,
        expandMode: expandMode,
      }}
    >
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          style: {
            container: {
              borderTopWidth: index === 0 ? 1 : 0,
              borderBottomWidth: 1,
              ...child.props.style?.container,
            },
            element: {
              ...child.props.style?.element,
            },
            header: {
              ...child.props.style?.header,
            },
          },
          index: index,
          inContext: true,
        });
      })}
    </AccordionContext.Provider>
  );
};

export default PhaselisHOC<AccordionProps>(Accordion);
export { AccordionContext };
