import React from "react"

import { ComponentStory, ComponentMeta } from "@storybook/react"

import { CardMediaItem } from "./CardMediaItem"

export default {
  title: "Example/CardMediaItem",
  component: CardMediaItem
} as ComponentMeta<typeof CardMediaItem>

const Template: ComponentStory<typeof CardMediaItem> = (args) => <CardMediaItem {...args} />

export const NotActive = Template.bind({})

NotActive.args = {
  label: "Flood zone 3",
  checked: false,
  setChecked: (value) => {
    console.log(value)
  }
}
export const Active = Template.bind({})

Active.args = {
  label: "Flood zone 3",
  checked: true,
  setChecked: (value) => {
    console.log(value)
  }
}
