import { Button } from '../../core';

export interface ListingProductProps {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  image: string;
  brand: string;
  category: string;
}

export const ListingProduct: React.FC<ListingProductProps> = (props) => {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    image,
    brand,
    category,
  } = props;
  return (
    <div className="border border-gray-5 flex p-2 max-w-3xl">
      <div className="w-60">
        <img src={image} alt={title} />
      </div>
      <div className="flex flex-col flex-1 mx-2">
        <h3 className="font-bold text-xl">{title}</h3>
        <span className="flex-1 text-gray-900">{description}</span>
        <div>
          <span className="text-gray-700">Brand</span>{' '}
          <span className="text-gray-900">{brand}</span>
        </div>
        <div>
          <span className="text-gray-700">Category</span>{' '}
          <span className="text-gray-900">{category}</span>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <span>
          £{price}{' '}
          <span className="text-secondary-base">
            {discountPercentage ? `(${discountPercentage}% off)` : ''}
          </span>
        </span>
        <Button label="View Product" variant="primary" />
      </div>
    </div>
  );
};

export default ListingProduct;
