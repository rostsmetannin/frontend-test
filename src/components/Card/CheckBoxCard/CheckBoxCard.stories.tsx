import React from "react"

import { ComponentStory, ComponentMeta } from "@storybook/react"

import { CheckBoxCard } from "./CheckBoxCard"

export default {
  title: "Example/CheckBoxCard",
  component: CheckBoxCard
} as ComponentMeta<typeof CheckBoxCard>

const Template: ComponentStory<typeof CheckBoxCard> = (args) => <CheckBoxCard {...args} />

export const Active = Template.bind({})
Active.args = {
  checked: true,
  label: "Flood zone 3",
  setChecked: () => {}
}
export const NotActive = Template.bind({})
NotActive.args = {
  checked: false,
  label: "Flood zone 3",
  setChecked: () => {}
}
