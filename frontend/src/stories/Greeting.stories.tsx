import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Greeting } from "../components/Greeting";

export default {
  title: "Example/Greeting",
  component: Greeting,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Greeting>;

const Template: ComponentStory<typeof Greeting> = (args) => (
  <Greeting {...args} />
);

export const Default = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
