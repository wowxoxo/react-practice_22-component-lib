import React, { useContext } from "react";
import { FieldContext } from "./FieldContext";
import { StyledTextarea } from "./styles";
import PropTypes from 'prop-types'

export interface TextareaProps {
  isResizable?: boolean;
}


export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps & React.ComponentPropsWithoutRef<'textarea'>>((props, ref) => {
  const id = useContext(FieldContext)

  return <StyledTextarea as="textarea" ref={ref} id={id} {...props} />
})

Textarea.displayName = 'Field.Textarea'

Textarea.defaultProps = { isResizable: true }

Textarea.propTypes = { isResizable: PropTypes.bool}