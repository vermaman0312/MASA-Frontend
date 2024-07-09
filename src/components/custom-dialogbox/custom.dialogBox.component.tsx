import { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./custom-dialogbox.ui";

type props = {
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  buttonComponent?: ReactNode;
  title?: string;
  description?: string;
  submitComponent?: ReactNode;
  children?: ReactNode;
  backgroundColor?: string;
  borderRadius?: string;
  textColor?: string;
  descriptionColor?: string;
};

export function CustomDialogBox({
  isOpen,
  onOpenChange,
  buttonComponent,
  title,
  description,
  submitComponent,
  children,
  backgroundColor,
  borderRadius,
  textColor,
  descriptionColor,
}: props) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{buttonComponent}</DialogTrigger>
      <DialogContent
        className={`sm:max-w-[425px] ${backgroundColor} ${borderRadius} border-none`}
      >
        <DialogHeader>
          <DialogTitle className={`text-3xl font-display ${textColor}`}>
            {title}
          </DialogTitle>
          <DialogDescription className={`font-display ${descriptionColor}`}>
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">{children}</div>
        <DialogFooter>{submitComponent}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
