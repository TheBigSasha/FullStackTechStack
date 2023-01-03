import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Messages } from "../components/Messages";

export default {
  title: "Example/Messages",
  component: Messages,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Messages>;

const Template: ComponentStory<typeof Messages> = (args) => (
  <Messages {...args} />
);

export const Default = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
