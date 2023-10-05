import Button from "../../../components/molecules/button/button";
import '../../../../src/app/globals.css';

import { Meta, StoryObj } from "@storybook/react";


const meta = {
  title: "Components/Molecules/Button",
  layout: 'centered',
  component: Button,
} as Meta;

export default meta;
type Story = StoryObj<typeof Button>;

const Template = (args: any) => <Button {...args} />;

export const Default = Template.bind({});
