"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type StateContextProps = {
  mounted: boolean;
  setMounted: Dispatch<SetStateAction<boolean>>;
  vendorModal: boolean;
  setVendorModal: Dispatch<SetStateAction<boolean>>;
  waitlistModal: boolean;
  setWaitlistModal: Dispatch<SetStateAction<boolean>>;
  successModal: boolean;
  setSuccessModal: Dispatch<SetStateAction<boolean>>;
};

const defaultState = {
  mounted: false,
} as StateContextProps;

const StateContext = createContext(defaultState);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const [mounted, setMounted] = useState(false);
  const [vendorModal, setVendorModal] = useState(false);
  const [waitlistModal, setWaitlistModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <StateContext.Provider
      value={{
        mounted,
        setMounted,
        vendorModal,
        setVendorModal,
        waitlistModal,
        setWaitlistModal,
        successModal,
        setSuccessModal,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
