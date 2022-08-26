import React from "react";
import { useUniqueId } from "../hooks/useUniqueId";
import { FieldContext } from "./FieldContext";
import { Input } from "./Input";
import { Label } from "./Label";
import { Textarea } from "./Textarea";

interface FieldComposition {
  Label: typeof Label;
  Input: typeof Input;
  Textarea: typeof Textarea;
}


export const Field: React.FC & FieldComposition = ({ children }) => {
  const id = useUniqueId()

  return <FieldContext.Provider value={id}>{children}</FieldContext.Provider>
}

Field.Label = Label
Field.Input = Input
Field.Textarea = Textarea