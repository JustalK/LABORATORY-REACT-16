import React from 'react'
import Button from '.'

export default {
  title: 'UI/Button',
  component: Button
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  size: 'medium',
  children: 'This is a primary button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  size: 'small',
  children: 'This is a secondary button'
}

export const Large = Template.bind({})
Large.args = {
  size: 'large',
  children: 'This is a large button'
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true
}
