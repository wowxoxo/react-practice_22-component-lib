import React from 'react';
import { render, screen } from "@testing-library/react"
import { Button } from "./Button"

describe("Button", () => {
  it('applies default type of button', () => {
    render(<Button>Hello</Button>)

    expect(screen.getByRole('button')).toHaveAttribute('type', 'button')
  })

  it('applies specific type of button', () => {
    render(<Button type="submit">Hello</Button>)

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit')
  })

  it('applies valid attribute to element', () => {
    render(<Button aria-label="Test">Hello</Button>)

    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Test')
  })
})