import React from "react";
import LucideIcon from "@phaselis/components/lucide-icon";
import SlotProps from "./types";

const Slot: React.FC<SlotProps> = ({
  children,
  icon,
  style,
  size,
  strokeWidth,
  onClick,
  parentStates,
  height,
  width,
}) => {
  if (children) {
    return (
      <>
        {React.cloneElement(children as React.ReactElement, {
          size: size || "md",
          defaultStyle: style?.[0],
          themeStyle: style?.[1],
          propStyle: style?.[2],
          parentStates,
          ...children?.props,
        })}
      </>
    );
  }
  if (icon) {
    return (
      <LucideIcon
        name={icon}
        style={style}
        width={width}
        height={height}
        size={size}
        strokeWidth={strokeWidth}
        onClick={onClick}
      />
    );
  }
  return null;
};

export default Slot;
