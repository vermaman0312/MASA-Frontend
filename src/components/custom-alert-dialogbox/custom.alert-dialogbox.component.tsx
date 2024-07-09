import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./custom-alert-dialogbox.ui";

type props = {
  isDeleteOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  title?: string;
  description?: string;
  buttonTitle1?: string;
  buttonTitle2?: string;
  onClick?: () => void;
};

const CustomAlertDialogBox = ({
  isDeleteOpen,
  onOpenChange,
  title,
  description,
  buttonTitle1,
  buttonTitle2,
  onClick,
}: props) => {
  return (
    <AlertDialog open={isDeleteOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="p-2 border rounded-lg font-display text-xs">
            {buttonTitle1}
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onClick}
            className="p-2 border rounded-lg font-display text-xs text-white bg-[#0d1b2a]"
          >
            {buttonTitle2}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CustomAlertDialogBox;
