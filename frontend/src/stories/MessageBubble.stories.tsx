import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MessageBubble } from "../components/MessageBubble";

export default {
  title: "Example/MessageBubble",
  component: MessageBubble,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MessageBubble>;

const Template: ComponentStory<typeof MessageBubble> = (args) => (
  <MessageBubble {...args} />
);

export const Default = Template.bind({});
Default.args = {
  message: "Hello World",
  timestamp: "2023-01-03 19:17:56.145",
}

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
