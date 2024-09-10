import { PropsWithChildren } from 'react';

type HeaderProps = PropsWithChildren;

export function Header({ children }: HeaderProps) {
  return <header className=" bg-amber-400 w-full h-[64px] p-4">{children}</header>;
}
