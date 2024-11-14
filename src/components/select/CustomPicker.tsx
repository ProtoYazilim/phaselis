import React, { useEffect, useMemo } from "react";
import { View, FlatList } from "react-native";
import { BottomSheet } from "@phaselis/components";
import HeaderSlotDefault from "./lib/HeaderSlotDefault";
import { cloneSlot } from "@phaselis/utils/lib/util/index";
import OptionSlotDefault from "./lib/OptionSlotDefault";
import NoOptionSlotDefault from "./lib/NoOptionSlotDefault";
import { RadioGroup } from "@phaselis/components";
import { useCombinedStyle } from "@phaselis/hooks";
import { PhaselisHOC } from "@phaselis/components";
import { stylesheet_picker_options_slot } from "./assets/styles";
import { CustomPickerProps } from "./types";

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
  disabled,
  contextValue,
  style,
  showError,
  isFocus,
  size,
  setIsFocus,
  ...extraProps
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
        <FlatList
          data={memorizedOptions}
          renderItem={({ item }) => (
            <View style={getCombinedStyle("subContainer")}>
              <RadioGroup
                value={selectedItem?.value}
                onChange={(e) => {
                  if (selectedItem?.value !== item.value && onChange) {
                    onChange(
                      {
                        target: {
                          value: item.value,
                        },
                      },
                      item.value,
                      item,
                    );
                  }
                  if (closeOnSelect) {
                    setShowPicker(false);
                  }
                }}
              >
                {cloneSlot(OptionSlot, {
                  item,
                  selectedItem,
                })}
              </RadioGroup>
            </View>
          )}
          keyExtractor={(item) => item.value.toString()}
        />
      ) : (
        cloneSlot(NoOptionSlot, {})
      )}
    </BottomSheet>
  );
};

export default PhaselisHOC<CustomPickerProps, any>(CustomPicker);
