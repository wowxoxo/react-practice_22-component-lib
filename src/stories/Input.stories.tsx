import React from 'react'
import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { Field } from '../fields/Field'

export default {
  title: 'Example/Input',
  component: Field.Input,
  subcomponents: { Field, label: Field.Label }
} as ComponentMeta<typeof Field>

const Template: Story = ({ placeholder }) => {
  return (
    <Field>
      <Field.Label>Hello!</Field.Label>
      <Field.Input placeholder={placeholder} />
    </Field>
  )
}

export const Default  = Template.bind({})

Default.args = {  placeholder: "Placeholder content" }