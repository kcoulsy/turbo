import React from 'react';
import clsx from 'clsx';

export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'tertiary' | 'link';
  label: string;
  disabled?: boolean;
}
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  disabled = false,
  label,
}) => (
  <button
    type="button"
    className={clsx(
      'text-xl h-10 w-fit px-4 align-middle leading-tight',
      'transition-colors duration-100',
      {
        'bg-primary-base hover:bg-primary-800 text-white':
          variant === 'primary' && !disabled,
        'bg-secondary-base hover:bg-secondary-800 text-white':
          variant === 'secondary' && !disabled,
        'bg-gray-600 text-white cursor-default': disabled,
      },
    )}
    {...(disabled && { disabled })}
  >
    {label}
  </button>
);

export default Button;
