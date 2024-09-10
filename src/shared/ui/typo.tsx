import { PropsWithChildren } from 'react';

type TypoProps = PropsWithChildren<{
  font?: 'title' | 'subtitle' | 'body' | 'caption';
  color?: 'white' | 'blue' | 'black' | 'gray800' | 'gray500';
}>;

export function Typo({ font = 'body', color = 'black', children }: TypoProps) {
  const fonts = {
    title: 'font-bold text-4xl',
    subtitle: 'font-bold text-2xl',
    body: 'text-md',
    caption: 'text-xs',
  };

  const colors = {
    white: 'text-gray-50',
    blue: 'text-blue-600',
    black: 'text-gray-950',
    gray800: 'text-gray-800',
    gray500: 'text-gray-500',
  };

  return <p className={`${fonts[font]} ${colors[color]}`}>{children}</p>;
}
