import type { AccordionProps, AccordionItemProps } from "./types";
import {
  useState,
  Children,
  cloneElement,
  createContext,
  type FC,
  type ReactElement,
} from "react";
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

const Accordion: FC<AccordionProps> = (props) => {
  const { expandMode = "single", children, onChange } = props;

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
          const itemChild = child as ReactElement<AccordionItemProps>;
          const itemProps = itemChild.props;
          const style =
            itemProps.style &&
            typeof itemProps.style === "object" &&
            "container" in itemProps.style
              ? (itemProps.style as {
                  container?: object;
                  element?: object;
                  header?: object;
                })
              : undefined;
          return cloneElement(itemChild, {
            style: {
              container: {
                borderTopWidth: index === 0 ? 1 : 0,
                borderBottomWidth: 1,
                ...style?.container,
              },
              element: {
                ...style?.element,
              },
              header: {
                ...style?.header,
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
