import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ViewPanel } from 'ui';
import { ViewProps } from 'ui/src/core/ViewPanel/types';

const setup: ComponentMeta<typeof ViewPanel> = {
  title: 'Components/ViewPanel',
  component: ViewPanel,
  argTypes: {},
};

export default setup;

const Template: ComponentStory<typeof ViewPanel> = (args) => {
  return (
    <div>
      <ViewPanel {...args} />
    </div>
  );
};

export const ViewPanelComponent: ComponentStory<typeof ViewPanel> =
  Template.bind({});

const middle: React.FC<ViewProps> = ({ push }) => {
  return (
    <div className="p-3">
      <button
        type="button"
        onClick={() => {
          push({
            component: categories,
            uid: (Date.now() + Math.random() * 100000).toString(),
            title: 'Choose Style',
          });
        }}
      >
        Style {'=>'}
      </button>
    </div>
  );
};

const categories = () => (
  <div className="p-3">
    <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
    </ul>
  </div>
);

ViewPanelComponent.args = {
  initialView: { component: middle, uid: '', title: 'View All Filters' },
};
