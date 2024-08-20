"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface DrawerContextType {
  isOpen: boolean;
  handleDrawer: () => void;
  children: React.ReactNode;
}

const DrawerContext = createContext({});

function DrawerProvider({ children }: DrawerContextType) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <DrawerContext.Provider value={{ isOpen, handleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}

const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (context === undefined) {
    throw new Error("useDrawerContext must be used within a DrawerProvider");
  }
  return context;
};

export { DrawerProvider, useDrawerContext };
