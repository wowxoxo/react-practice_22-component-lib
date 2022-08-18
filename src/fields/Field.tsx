import React from "react";
import { useUniqueId } from "../hooks/useUniqueId";
import { FieldContext } from "./FieldContext";


export const Field: React.FC = ({ children }) => {
  const id = useUniqueId()

  return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>
}