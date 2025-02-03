import type { AccordionProps } from "./types";
import { useState, Children, cloneElement } from "react";
import { createContext } from "react";
import PhaselisHOC from "../provider/lib/hoc";

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
  expandMode = "single",
  children,
  onChange,
}: AccordionProps) => {
  const handleOnChange = (expand: boolean, index: number) => {
    onChange?.(index);
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
      {Children.map(children, (child, index) => {
        if (child) {
          return cloneElement(child, {
            style: {
              container: {
                borderTopWidth: index === 0 ? 1 : 0,
                borderBottomWidth: 1,
                ...child?.props.style?.container,
              },
              element: {
                ...child?.props.style?.element,
              },
              header: {
                ...child?.props.style?.header,
              },
            },
            index: index,
            inContext: true,
          });
        }
        return null;
      })}
    </AccordionContext.Provider>
  );
};

export default PhaselisHOC(Accordion);
export { AccordionContext };
