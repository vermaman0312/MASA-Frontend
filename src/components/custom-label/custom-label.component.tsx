import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "../../utils/motion-framer/cn";

const CustomLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 select-none",
      className
    )}
    {...props}
  />
));
CustomLabel.displayName = LabelPrimitive.Root.displayName;

export { CustomLabel };
