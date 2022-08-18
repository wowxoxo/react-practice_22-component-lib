import React, { ButtonHTMLAttributes } from 'react'
import { StyledButton } from './styles'
import PropTypes from 'prop-types'

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

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['secondary', 'primary', 'danger']),
  isFullWidth: PropTypes.bool
}

Button.defaultProps = {
  variant: "secondary",
  isFullWidth: false
}
