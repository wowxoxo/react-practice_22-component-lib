import React, { ButtonHTMLAttributes } from 'react'
import { StyledButton } from './styles'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'secondary' | 'primary' | 'danger'
  isFullWidth?: boolean
}

// export const Button = React.forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, isFullWidth, ...props }, ref) => {
    return (
      <StyledButton
        variant={variant}
        isFullWidth={isFullWidth}
        type="button"
        {...props}
        ref={ref}
      >
        {children}
      </StyledButton>
    )
  }
)

// const Header = ({ theme: string = "light" }) => {
//   return <header></header>
// }
{
  /* <Header theme="" /> */
}

Button.defaultProps = {
  variant: "secondary",
  isFullWidth: false
}
