import {
  useState,
  createContext,
  ReactNode,
  useContext,
  useCallback,
  useEffect,
  useId,
} from "react";
import { Popup } from "@phaselis/components";
import { SlotIconName } from "@phaselis/types";

const PopupTitleIcon: Record<
  PopupType,
  { leftIcon?: SlotIconName; title?: string }
> = {
  default: {},
  info: { leftIcon: "Info", title: "Info" },
  success: { leftIcon: "CheckCheck", title: "Success" },
  warning: { leftIcon: "MessageSquareWarning", title: "Warning" },
  error: { leftIcon: "Bomb", title: "Error" },
};

type PopupType = "default" | "info" | "success" | "warning" | "error";

interface PopupExtraProps {
  duration?: number;
  onClose?: () => void;
  fullScreen?: boolean;
  contextValue?: any;
  style?: any;
  leftIcon?: SlotIconName;
  LeftSlot?: ReactNode;
  title?: string;
}

interface PopupProps {
  id?: string;
  show: "show" | "hide";
  content: ReactNode;
  type: PopupType;
  extraProps?: PopupExtraProps;
}

interface PopupContextType {
  popups: PopupProps[];
  setPopups: React.Dispatch<React.SetStateAction<PopupProps[]>>;
  upgradePopup: (id: string, value: PopupProps) => void;
  updatePopupShow: (id: string, value: "show" | "hide") => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

interface PopupProviderProps {
  children: ReactNode;
}

const PopupProvider = ({ children }: PopupProviderProps) => {
  const [popups, setPopups] = useState<PopupProps[]>([]);
  const updatePopupShow = useCallback(
    (id: string | undefined, value: "show" | "hide") => {
      setPopups((popups) =>
        popups.map((popup) =>
          popup.id === id ? { ...popup, show: value } : popup,
        ),
      );
    },
    [],
  );

  const upgradePopup = useCallback(
    (id: string, updatedFields: Partial<PopupProps>) => {
      setPopups((popups) =>
        popups.map((popup) =>
          popup.id === id
            ? { ...popup, ...updatedFields, id: popup.id }
            : popup,
        ),
      );
    },
    [setPopups],
  );

  return (
    <PopupContext.Provider
      value={{
        popups,
        setPopups,
        updatePopupShow,
        upgradePopup,
      }}
    >
      {children}
      {popups.map((popup) => (
        <Popup
          key={popup.id}
          show={popup.show === "show"}
          onClose={() => updatePopupShow(popup.id, "hide")}
          title={PopupTitleIcon[popup.type].title}
          leftIcon={PopupTitleIcon[popup.type].leftIcon}
          type={popup.type}
          {...popup.extraProps}
        >
          {popup.content}
        </Popup>
      ))}
    </PopupContext.Provider>
  );
};

const usePopup = (
  type: PopupType,
  initialContent: ReactNode,
  extraProps?: PopupExtraProps,
) => {
  const context = useContext(PopupContext);
  const tempId = useId();

  useEffect(() => {
    const existingPopup = context?.popups.find((popup) => popup.id === tempId);
    if (!existingPopup) {
      context?.setPopups((prevPopups) => [
        ...prevPopups,
        {
          id: tempId,
          show: "hide",
          content: initialContent,
          type,
          extraProps,
        } as PopupProps,
      ]);
    } else {
      context?.upgradePopup(tempId, {
        show: "hide",
        content: initialContent,
        type,
        extraProps,
      });
    }
  }, []);

  const setShow = (value: "show" | "hide") => {
    context?.updatePopupShow(tempId, value);
  };

  const show = context?.popups.find((popup) => popup.id === tempId)?.show;

  return [show, setShow] as const;
};

export { PopupProvider };
export default usePopup;
