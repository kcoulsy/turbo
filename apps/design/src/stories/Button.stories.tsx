import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from 'ui';

const setup: ComponentMeta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
};

export default setup;

const Template: ComponentStory<typeof Button> = (args) => (
  <div>
    <Button {...args} />
    <div className="mb-1" />
    <Button {...args} disabled label="Disabled" />
  </div>
);

export const Primary: ComponentStory<typeof Button> = Template.bind({});

Primary.args = {
  variant: 'primary',
  disabled: false,
  label: 'Primary',
};

export const Secondary: ComponentStory<typeof Button> = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  disabled: false,
  label: 'Secondary',
};

// export const Disabled: ComponentStory<typeof Button> = Template.bind({});

// Disabled.args = {
//   variant: 'primary',
//   disabled: true,
//   label: 'Disabled',
// };
