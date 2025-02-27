/* eslint-disable react-hooks/exhaustive-deps */
import type { CustomPickerProps } from "./types";
import { useEffect, useMemo } from "react";
import { View, FlatList } from "react-native";
import PhaselisHOC from "../provider/lib/hoc";
import { BottomSheet } from "../index";
import HeaderSlotDefault from "./lib/HeaderSlotDefault";
import OptionSlotDefault from "./lib/OptionSlotDefault";
import NoOptionSlotDefault from "./lib/NoOptionSlotDefault";
import { stylesheet_picker_options_slot } from "./assets/styles";
import { useCombinedStyle } from "../../hooks";
import { cloneSlot } from "../../utils";
import LinearGradient from "react-native-linear-gradient";

const CustomPicker: React.FC<CustomPickerProps> = ({
  showPicker,
  setShowPicker,
  maxHeightModal,
  fullScreenModal,
  options,
  closeIcon,
  closeIconSize,
  onChange,
  selectedItem,
  closeOnSelect,
  NoOptionSlot = <NoOptionSlotDefault />,
  OptionSlot = <OptionSlotDefault />,
  HeaderSlot = <HeaderSlotDefault />,
  CloseIconSlot,
  contextValue,
  style,
  setIsFocus,
  variation = "default",
  topLinearGradientProps = {
    locations: [0, 0.5, 1],
    colors: ["#F2F8FD", "rgba(255,255,255,0)"],
  },
  bottomLinearGradientProps = {
    locations: [0, 0.5, 1],
    colors: ["rgba(255,255,255,0)", "#F2F8FD", "#F2F8FD"],
  },
  showTopBlur = true,
  showBottomBlur = true,
}) => {
  const memorizedOptions = useMemo(() => {
    return options.map((option) => {
      return {
        ...option,
      };
    });
  }, [options?.length]);

  const noOptionLayout = useMemo(() => {
    return memorizedOptions.length <= 0;
  }, [memorizedOptions]);

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet_picker_options_slot,
    style,
    contextValue?.theme?.select?._picker?._optionsSlot,
    variation,
  );

  const { getFlattenStyle } = useCombinedStyle(
    stylesheet_picker_options_slot,
    style,
    contextValue?.theme?.select?._picker?._optionsSlot,
    variation,
  );

  const handleOnFocus = () => {
    setIsFocus(true);
  };

  const handleOnBlur = () => {
    setIsFocus(false);
  };

  useEffect(() => {
    if (showPicker) {
      handleOnFocus();
    }
  }, [showPicker]);

  return (
    <BottomSheet
      show={showPicker}
      onClose={() => {
        setShowPicker(false);
        handleOnBlur();
      }}
      maxHeightModal={maxHeightModal}
      fullScreenModal={fullScreenModal}
      backgroundColor={getFlattenStyle("container").backgroundColor}
    >
      <View style={getCombinedStyle("container")}>
        {cloneSlot(HeaderSlot, {
          closeIcon,
          closeIconSize,
          CloseIconSlot,
          setShowPicker,
          getCombinedStyle,
          closeOnSelect,
        })}
      </View>
      {noOptionLayout ? (
        cloneSlot(NoOptionSlot, {})
      ) : (
        <View>
          {showTopBlur && (
            <LinearGradient
              style={getCombinedStyle("topLinearGradient")}
              {...topLinearGradientProps}
            />
          )}
          <FlatList
            contentContainerStyle={[getCombinedStyle("element")]}
            data={memorizedOptions}
            renderItem={({ item }) =>
              cloneSlot(OptionSlot, {
                item,
                selectedItem,
                onChange,
                setShowPicker,
                closeOnSelect,
                contextValue,
              })
            }
            keyExtractor={(item) => item.value.toString()}
          />
          {showBottomBlur && (
            <LinearGradient
              style={getCombinedStyle("bottomLinearGradient")}
              {...bottomLinearGradientProps}
            />
          )}
        </View>
      )}
    </BottomSheet>
  );
};

export default PhaselisHOC<CustomPickerProps, any>(CustomPicker);
