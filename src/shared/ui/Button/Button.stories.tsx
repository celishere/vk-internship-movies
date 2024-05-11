import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";

const meta = {
    title: 'shared/Button',
    component: Button,
    args: { onClick: fn() }
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>

export const Outline: Story = {
    args: {
        variant: "outlined"
    }
}

export const Filled: Story = {
    args: {
        variant: "filled"
    }
}

export const HasBorder: Story = {
    args: {
        hasBorder: true
    }
}