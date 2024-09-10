import { MouseEventHandler, PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<{
  size?: 'small' | 'medium' | 'large' | 'full';
  variant?: 'primary' | 'secondary';
  shape?: 'circular' | 'rounded' | 'square';
  hasShadow?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}>;

export function Button({
  children,
  size = 'medium',
  variant = 'secondary',
  shape = 'rounded',
  hasShadow = false,
  onClick,
}: ButtonProps) {
  const variants = {
    primary: 'bg-amber-400 hover:bg-amber-500 transition-colors',
    secondary: 'bg-white hover:bg-neutral-100 transition-colors',
  };
  const sizes = {
    small: 'px-4 py-1 text-xs',
    medium: 'px-4 py-2 text-md ',
    large: 'px-6 py-2 text-lg font-bold',
    full: 'px-6 py-3 text-lg font-bold w-full',
  };
  const shapes = {
    circular: 'rounded-full',
    rounded: 'rounded-md',
    square: '',
  };

  return (
    <button
      className={`${variants[variant]} ${sizes[size]} ${shapes[shape]} ${hasShadow ? 'shadow' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
