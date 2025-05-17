import {
  DrawerContentScrollView,
  type DrawerContentComponentProps,
} from "@react-navigation/drawer";
import CustomDrawerItemList from "./CustomDrawerItemList";

export default function DrawerContent({
  descriptors,
  state,
  ...rest
}: DrawerContentComponentProps) {
  const focusedRoute = state.routes[state.index];
  //@ts-ignore
  const focusedDescriptor = descriptors[focusedRoute.key];
  //@ts-ignore
  const focusedOptions = focusedDescriptor.options;

  const { drawerContentStyle, drawerContentContainerStyle } = focusedOptions;

  return (
    <DrawerContentScrollView
      {...rest}
      contentContainerStyle={[
        drawerContentContainerStyle,
        { backgroundColor: "transparent" },
      ]}
      style={[
        drawerContentStyle,
        { borderTopRightRadius: 0, backgroundColor: "transparent" },
      ]}
    >
      <CustomDrawerItemList descriptors={descriptors} state={state} {...rest} />
    </DrawerContentScrollView>
  );
}
