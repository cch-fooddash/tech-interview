import { HTMLAttributes } from 'react';

type InputProps = HTMLAttributes<HTMLInputElement>;

export function Input(props: InputProps) {
  return <input {...props} className={`${props.className} h-[40px] w-full px-2`} />;
}
