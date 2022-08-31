import React from 'react';
import { render, screen } from "@testing-library/react"
import { Field } from "./Field"

jest.mock('../hooks/useUniqueId')

describe('Field', () => {
  describe('Label', () => {
    it('applies unique ID to htmlFor attribute', () => {
      render(<Field><Field.Label>Label</Field.Label></Field>)

      expect(screen.getByText('Label')).toHaveAttribute('for', 'unique-id')
    })
  })

  describe('Input', () => {
    it('applies unique ID to id attribute', () => {
      render(<Field><Field.Label>Input</Field.Label><Field.Input role="input"  /></Field>)

      expect(screen.getByRole('input')).toHaveAttribute('id', 'unique-id')
    })
  })

  describe('Textarea', () => {
    it('applies unique ID to id attribute', () => {
      render(<Field><Field.Label>Textarea</Field.Label><Field.Textarea role="textarea"  /></Field>)

      expect(screen.getByRole('textarea')).toHaveAttribute('id', 'unique-id')
    })

    it('remove resize ability if provided', () => {
      render(<Field><Field.Label>Textarea</Field.Label><Field.Textarea isResizable={false}  /></Field>)

      // screen.debug()

      expect(screen.getByLabelText('Textarea')).toHaveStyle ('resize: none')
    })
  })
})