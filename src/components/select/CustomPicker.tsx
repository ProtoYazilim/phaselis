import type { CustomPickerProps } from "./types";
import { useEffect, useMemo } from "react";
import { View, FlatList } from "react-native";
import PhaselisHOC from "../provider/lib/hoc";
import { BottomSheet, useColors, useTheme } from "../index";
import HeaderSlotDefault from "./lib/HeaderSlotDefault";
import OptionSlotDefault from "./lib/OptionSlotDefault";
import NoOptionSlotDefault from "./lib/NoOptionSlotDefault";
import { stylesheet_picker_options_slot } from "./assets/styles";
import { useCombinedStyle } from "../../hooks";
import { cloneSlot } from "../../utils";
import LinearGradient from "react-native-linear-gradient";
import type { PhaselisColors } from "../../theme";

const CustomPicker: React.FC<CustomPickerProps> = (props) => {
  const {
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
    setIsFocus,
    variation = "default",
    topLinearGradientProps,
    bottomLinearGradientProps,
    showTopBlur = true,
    showBottomBlur = true,
  } = props;
  const Colors = useColors<PhaselisColors>();
  const { themeName } = useTheme();
  const isDarkMode = themeName === "dark";

  const defaultTopGradientProps = {
    locations: [0, 0.5, 1],
    colors: [
      Colors.Primary[50],
      isDarkMode ? "rgba(17, 41, 64, 0)" : "rgba(255,255,255,0)",
    ],
  };

  const defaultBottomGradientProps = {
    locations: [0, 0.5, 1],
    colors: [
      isDarkMode ? "rgba(17, 41, 64, 0)" : "rgba(255,255,255,0)",
      Colors.Primary[50],
      Colors.Primary[50],
    ],
  };

  const finalTopGradientProps =
    topLinearGradientProps || defaultTopGradientProps;
  const finalBottomGradientProps =
    bottomLinearGradientProps || defaultBottomGradientProps;

  const memorizedOptions = useMemo(() => {
    return options.map((option) => {
      return {
        ...option,
      };
    });
  }, [options]);

  const noOptionLayout = useMemo(() => {
    return memorizedOptions.length <= 0;
  }, [memorizedOptions]);

  const { getCombinedStyle } = useCombinedStyle(
    stylesheet_picker_options_slot,
    "select._picker._optionsSlot",
    variation,
    { ...(props as any) },
  );

  const { getFlattenStyle } = useCombinedStyle(
    stylesheet_picker_options_slot,
    "select._picker._optionsSlot",
    variation,
    { ...(props as any) },
  );

  const handleOnBlur = () => {
    setIsFocus(false);
  };

  useEffect(() => {
    if (showPicker) {
      setIsFocus(true);
    }
  }, [showPicker, setIsFocus]);

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
              {...finalTopGradientProps}
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
              {...finalBottomGradientProps}
            />
          )}
        </View>
      )}
    </BottomSheet>
  );
};

export default PhaselisHOC<CustomPickerProps, any>(CustomPicker);
