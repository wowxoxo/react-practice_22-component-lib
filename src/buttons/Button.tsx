import React from 'react'

export const Button = React.forwardRef<HTMLButtonElement>(
  ({ children }, ref) => {
    return (
      <button type="button" ref={ref}>
        {children}
      </button>
    )
  }
)

// const Header = ({ theme: string = "light" }) => {
//   return <header></header>
// }
{
  /* <Header theme="" /> */
}
