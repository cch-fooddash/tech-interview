import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { Button, ButtonProps } from './button';

type DialogContextType = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
};
const DialogContext = createContext<DialogContextType>({} as DialogContextType);

type TriggerProps = ButtonProps & {
  type?: 'open' | 'close';
};
export function Trigger(props: TriggerProps) {
  const { onOpen, onClose } = useContext(DialogContext);
  return (
    <Button {...props} onClick={props.type === 'close' ? onClose : onOpen}>
      {props.children}
    </Button>
  );
}

export function Content({ children }: PropsWithChildren) {
  const { open } = useContext(DialogContext);
  return open ? (
    <div className="absolute w-full h-full bg-gray-950 bg-opacity-50 top-0 left-0 flex items-center justify-center ">
      <div className="bg-white w-2/3 h-1/4 rounded-xl overflow-hidden">{children}</div>
    </div>
  ) : (
    <></>
  );
}

type WrapperProps = PropsWithChildren;
export function Wrapper({ children }: WrapperProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <DialogContext.Provider
      value={{
        open: open,
        onOpen: () => setOpen(true),
        onClose: () => setOpen(false),
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}
