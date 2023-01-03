import Button, { IButton } from './index';
import { Meta, Story } from '@storybook/react/dist/ts3.9/client/preview/types-6-0';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<IButton> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  borderRadius: 'md',
  borderColor: 'primary',
  bgColor: 'primary',
  textContent: 'Button',
};

export const Info = Template.bind({});
Info.args = {
  size: 'md',
  borderRadius: 'md',
  borderColor: 'info',
  bgColor: 'info',
  textContent: 'Button',
};

export const Danger = Template.bind({});
Danger.args = {
  size: 'md',
  borderRadius: 'md',
  borderColor: 'danger',
  bgColor: 'danger',
  textContent: 'Button',
};
