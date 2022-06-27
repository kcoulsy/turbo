import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListingProduct } from 'ui';

const setup: ComponentMeta<typeof ListingProduct> = {
  title: 'Components/ListingProduct',
  component: ListingProduct,
  argTypes: {},
};

export default setup;

const Template: ComponentStory<typeof ListingProduct> = (args) => (
  <div>
    <ListingProduct {...args} />
  </div>
);

export const ListingProductComponent: ComponentStory<typeof ListingProduct> =
  Template.bind({});

const sample = {
  brand: 'Apple',
  category: 'smartphones',
  description: 'An apple mobile which is nothing like apple',
  discountPercentage: 12.96,
  id: 1,
  // images: [
  //   'https://dummyjson.com/image/i/products/1/1.jpg',
  //   'https://dummyjson.com/image/i/products/1/2.jpg',
  //   'https://dummyjson.com/image/i/products/1/3.jpg',
  //   'https://dummyjson.com/image/i/products/1/4.jpg',
  //   'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
  // ],
  price: 549,
  rating: 4.69,
  stock: 94,
  image: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
  title: 'iPhone 9',
};
ListingProductComponent.args = {
  // variant: 'primary',
  // disabled: false,
  // label: 'Primary',
  ...sample,
};
