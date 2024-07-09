import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./custom-side-drawer.ui";

type props = {
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  title?: string;
  description?: string;
  children?: React.ReactNode;
};

const CustomSideDrawer = ({
  isOpen,
  onOpenChange,
  title,
  description,
  children,
}: props) => {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetContent className="w-[50%]">
        <SheetHeader>
          <SheetTitle className="font-display text-3xl text-[#0d1b2a]">
            {title}
          </SheetTitle>
          <SheetDescription className="font-display text-lg text-[#0d1b2a]">
            {description}
          </SheetDescription>
        </SheetHeader>
        <div className="w-full h-full grid gap-4 py-4">{children}</div>
      </SheetContent>
    </Sheet>
  );
};

export default CustomSideDrawer;
