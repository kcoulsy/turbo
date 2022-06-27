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
      'text-md h-9 w-fit px-4 align-middle leading-tight',
      'transition-colors duration-100',
      {
        'bg-primary-base hover:bg-primary-darker text-white':
          variant === 'primary' && !disabled,
        'bg-primary-lighter  text-white': variant === 'primary' && disabled,
        'bg-secondary-base hover:bg-secondary-darker text-white':
          variant === 'secondary' && !disabled,
        'bg-secondary-lighter  text-white': variant === 'secondary' && disabled,
        // 'bg-gray-600 text-white cursor-default': disabled,
      },
    )}
    {...(disabled && { disabled })}
  >
    {label}
  </button>
);

export default Button;
