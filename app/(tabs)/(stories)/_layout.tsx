import { PopupProvider } from "../../../src/hooks/usePopup";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <PopupProvider>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Phaselis",
            title: "Components",
          }}
        />
        <Drawer.Screen
          name="accordion-story"
          options={{
            drawerLabel: "Accordion",
            title: "Accordion Story",
          }}
        />
        <Drawer.Screen
          name="accordion-list-story"
          options={{
            drawerLabel: "Accordion List",
            title: "Accordion List Story",
          }}
        />
        <Drawer.Screen
          name="button-story"
          options={{
            drawerLabel: "Button",
            title: "Button Story",
          }}
        />
        <Drawer.Screen
          name="badge-story"
          options={{
            drawerLabel: "Badge",
            title: "Badge Story",
          }}
        />
        <Drawer.Screen
          name="bottom-sheet-story"
          options={{
            drawerLabel: "Bottom Sheet",
            title: "Bottom Sheet Story",
          }}
        />
        <Drawer.Screen
          name="checkbox-story"
          options={{
            drawerLabel: "Checkbox",
            title: "Checkbox Story",
          }}
        />
        <Drawer.Screen
          name="datepicker-story"
          options={{
            drawerLabel: "Datepicker",
            title: "Datepicker Story",
          }}
        />
        <Drawer.Screen
          name="image-background-story"
          options={{
            drawerLabel: "Image Background",
            title: "Image Background Story",
          }}
        />
        <Drawer.Screen
          name="image-story"
          options={{
            drawerLabel: "Image",
            title: "Image Story",
          }}
        />
        <Drawer.Screen
          name="label-story"
          options={{
            drawerLabel: "Label",
            title: "Label Story",
          }}
        />
        <Drawer.Screen
          name="link-story"
          options={{
            drawerLabel: "Link",
            title: "Link Story",
          }}
        />
        <Drawer.Screen
          name="list-story"
          options={{
            drawerLabel: "List",
            title: "List Story",
          }}
        />
        <Drawer.Screen
          name="popup-story"
          options={{
            drawerLabel: "Popup",
            title: "Popup Story",
          }}
        />
        <Drawer.Screen
          name="textfield-story"
          options={{
            drawerLabel: "Textfield",
            title: "Textfield Story",
          }}
        />
        <Drawer.Screen
          name="masked-textfield-story"
          options={{
            drawerLabel: "Masked Textfield",
            title: "Masked Textfield Story",
          }}
        />
        <Drawer.Screen
          name="textarea-story"
          options={{
            drawerLabel: "Textarea",
            title: "Textarea Story",
          }}
        />
        <Drawer.Screen
          name="switch-story"
          options={{
            drawerLabel: "Switch",
            title: "Switch Story",
          }}
        />
        <Drawer.Screen
          name="radio-story"
          options={{
            drawerLabel: "Radio / RadioGroup",
            title: "Radio Story",
          }}
        />
        <Drawer.Screen
          name="row-col-block"
          options={{
            drawerLabel: "Row / Col / Block",
            title: "Row / Col / Block Story",
          }}
        />
        <Drawer.Screen
          name="select-story"
          options={{
            drawerLabel: "Select",
            title: "Select Story",
          }}
        />
        <Drawer.Screen
          name="stepper-story"
          options={{
            drawerLabel: "Stepper",
            title: "Stepper Story",
          }}
        />
        <Drawer.Screen
          name="slider-story"
          options={{
            drawerLabel: "Slider",
            title: "Slider Story",
          }}
        />
        <Drawer.Screen
          name="tab-view-story"
          options={{
            drawerLabel: "Tab View",
            title: "Tab View Story",
          }}
        />
      </Drawer>
    </PopupProvider>
  );
}
