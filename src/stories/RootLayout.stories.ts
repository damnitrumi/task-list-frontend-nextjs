import type { Meta, StoryObj } from "@storybook/react";
import RootLayout from "@/app/layout";

const meta = {
  title: "RootLayout",
  component: RootLayout,
  parameters: {
    layout: "fullscreen"
  },
  args:{
    children: "",
  }
} satisfies Meta<typeof RootLayout>

export default meta;
type Story = StoryObj<typeof meta>

export const Template: Story = {};
