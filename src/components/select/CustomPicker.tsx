import React, { useEffect, useMemo } from "react";
import { View, FlatList } from "react-native";
import Block from "src/components/block";
import BottomSheet from "src/components/bottom-sheet";
import { PhaselisHOC } from "src/components/provider";
import HeaderSlotDefault from "./lib/HeaderSlotDefault";
import OptionSlotDefault from "./lib/OptionSlotDefault";
import NoOptionSlotDefault from "./lib/NoOptionSlotDefault";
import { stylesheet_picker_options_slot } from "./assets/styles";
import { CustomPickerProps } from "./types";
import { useCombinedStyle } from "src/hooks";
import { cloneSlot } from "src/utils";

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
  ..._extraProps
}) => {
  const memorizedOptions = useMemo(() => {
    return options.map((option) => {
      return {
        ...option,
      };
    });
  }, [options?.length]);

  const noOptionLayout = useMemo(() => {
    return memorizedOptions.length > 0;
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
        <Block style={getCombinedStyle("element")}>
          <FlatList
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
        </Block>
      ) : (
        cloneSlot(NoOptionSlot, {})
      )}
    </BottomSheet>
  );
};

export default PhaselisHOC<CustomPickerProps, any>(CustomPicker);
