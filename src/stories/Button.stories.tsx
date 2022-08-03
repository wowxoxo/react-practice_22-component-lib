import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../buttons/Button'

export default {
  title: 'Example/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>dsds</Button>

export const Default  = Template.bind({})

// export const Primary = Template.bind({})
// Primary.args = {
//   primary: true,
//   label: 'Button',
// }

// export const Secondary = Template.bind({})
// Secondary.args = {
//   label: 'Button',
// }

// export const Large = Template.bind({})
// Large.args = {
//   size: 'large',
//   label: 'Button',
// }

// export const Small = Template.bind({})
// Small.args = {
//   size: 'small',
//   label: 'Button',
// }
