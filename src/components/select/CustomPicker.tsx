import React, { useMemo } from "react";
import { View, Pressable, FlatList } from "react-native";
import { BottomSheet, Slot, Button } from "@phaselis/components";
import { ComponentSize, SlotIconName } from "@phaselis/types";
import HeaderSlotDefault from "./lib/HeaderSlotDefault";

interface CustomPickerProps {
  showPicker: boolean;
  setShowPicker: React.Dispatch<React.SetStateAction<boolean>>;
  maxHeightModal?: number | string;
  fullScreenModal?: boolean;
  options: any[];
  HeaderSlot?: React.ComponentType<{
    closeIcon: SlotIconName;
    closeIconSize: ComponentSize;
    CloseIconSlot?: React.ComponentType;
  }>;
  closeIcon?: SlotIconName;
  closeIconSize?: ComponentSize;
  CloseIconSlot?: React.ComponentType;
  OptionSlot: React.ComponentType<{ option: any }>;
  NoOptionSlot?: React.ComponentType;
  onChange?: (e: any, value?: any, data?: any) => any;
  selectedItem?: any;
  getCombinedStyle: any;
  closeOnSelect?: boolean;
}

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
  getCombinedStyle,
  closeOnSelect,
  NoOptionSlot,
  OptionSlot,
  HeaderSlot = <HeaderSlotDefault text="123" />,
  CloseIconSlot,
}) => {
  const memorizedOptions = useMemo(() => {
    return options.map((option) => {
      return {
        ...option,
      };
    });
  }, [options]);

  const noOptionLayout = useMemo(() => {
    return memorizedOptions.length > 0;
  }, [memorizedOptions]);

  const cloneSlot = (slot: any, props: any) => {
    if (!slot) {
      return null;
    }
    if (typeof slot === "function") {
      return slot(props);
    } else if (React.isValidElement(slot)) {
      return React.cloneElement(slot, props);
    }
  };

  return (
    <BottomSheet
      show={showPicker}
      onClose={() => setShowPicker(false)}
      maxHeightModal={maxHeightModal}
      fullScreenModal={fullScreenModal}
    >
      <View style={getCombinedStyle("headerSlot")}>
        {!closeOnSelect ? (
          <Pressable
            onPress={() => {
              setShowPicker(false);
            }}
          >
            <Slot
              style={getCombinedStyle("rightSlot")}
              icon={closeIcon as any}
              size={closeIconSize}
            >
              {CloseIconSlot && <CloseIconSlot />}
            </Slot>
          </Pressable>
        ) : null}
        <View style={getCombinedStyle("headerInnerSlot")}>
          {cloneSlot(HeaderSlot, {
            closeIcon,
            closeIconSize,
            CloseIconSlot,
          })}
        </View>
        {closeOnSelect ? (
          <Pressable
            onPress={() => {
              setShowPicker(false);
            }}
          >
            <Slot
              style={getCombinedStyle("rightSlot")}
              icon={closeIcon as any}
              size={closeIconSize}
            >
              {CloseIconSlot && <CloseIconSlot />}
            </Slot>
          </Pressable>
        ) : (
          <Button
            text="Done"
            size="sm"
            outline
            onPress={() => {
              setShowPicker(false);
            }}
          />
        )}
      </View>
      {noOptionLayout ? (
        <FlatList
          data={memorizedOptions}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
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
              <OptionSlot option={item} />
            </Pressable>
          )}
          keyExtractor={(item) => item.value.toString()}
        />
      ) : (
        NoOptionSlot && <NoOptionSlot />
      )}
    </BottomSheet>
  );
};

export default CustomPicker;
