import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "../../utils/motion-framer/cn";
import { Button } from "../custom-button/custom-button.component";
import { Calendar } from "../custom-calender/custom-calender.component";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../custom-popover/custom-popover.component";

type props = {
  title?: string;
  color?: string;
  borderColor?: string;
  isError?: boolean;
  onSelect?: (date: Date | undefined) => void;
  selected?: Date;
  disabled?: (date: Date) => boolean;
};

export function CustomDatePicker({
  title,
  color,
  borderColor,
  isError,
  onSelect,
  selected,
  disabled,
}: props) {
  return (
    <Popover>
      <PopoverTrigger
        asChild
        className={
          isError ? `border-red-500` : borderColor && `border-[${borderColor}]`
        }
      >
        <Button
          variant={"outline"}
          className={cn(
            `w-full justify-start text-left font-normal ${
              isError && "text-red-500"
            }`,
            !selected && "text-muted-foreground"
          )}
        >
          <CalendarIcon
            className={
              selected
                ? `mr-2 h-4 w-4 text-${
                    isError ? `red-500` : color ? `[${color}]` : "neutral-700"
                  }`
                : `mr-2 h-4 w-4 text-${
                    isError ? `red-500` : color ? `[${color}]` : "neutral-400"
                  }`
            }
          />
          {selected ? (
            format(selected, "PPP")
          ) : (
            <span
              className={`text-${
                isError ? `red-500` : color ? `[${color}]` : "neutral-400"
              }`}
            >
              {title}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-[#ffff]">
        <Calendar
          mode="single"
          disabled={disabled}
          selected={selected}
          onSelect={onSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
