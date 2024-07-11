import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../../../../components/custom-context-menu/custom-context-menu.ui";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";
import { Check, EyeOff, Pin, SquareMousePointer, Trash2 } from "lucide-react";
import { getRandomColor } from "../../../../themes/color";
import moment from "moment";
import MDEditor from "@uiw/react-md-editor";

type props = {
  key?: number;
  onClick?: () => void;
  title?: string;
  isSelected?: boolean;
  isPinned?: boolean;
  isHide?: boolean;
  timeStamp?: Date;
  description?: string;
  onClickSelectUnSelect?: () => void;
  onClickHideUnhide?: () => void;
  onClickPinnedUnPinned?: () => void;
  onClickDelete?: () => void;
};

const PrivateNoteDetailsPageComponent = ({
  key,
  onClick,
  title,
  isSelected,
  isPinned,
  isHide,
  timeStamp,
  description,
  onClickSelectUnSelect,
  onClickHideUnhide,
  onClickPinnedUnPinned,
  onClickDelete,
}: props) => {
  return (
    <ContextMenu key={key}>
      <ContextMenuTrigger
        style={{ backgroundColor: getRandomColor(), opacity: 5 }}
        onClick={onClick}
        className="w-full h-40 flex flex-col items-center justify-center gap-2 rounded-xl p-1 cursor-pointer shadow-md"
      >
        <div className="w-full">
          <div className="w-full p-1 truncate flex items-center justify-between">
            <CustomLabel className="text-2xl font-display text-gray-700">
              {title}
            </CustomLabel>
            {isSelected && (
              <div className="w-3 h-3 border border-[#0d1b2a] rounded-sm flex items-center justify-center">
                <Check />
              </div>
            )}
            {isPinned && (
              <div className="w-4 h-4 rounded-sm flex items-center justify-center">
                <Pin fill="#0d1b2a" className="w-4 h-4" />
              </div>
            )}
          </div>
          <div className="w-full p-1 truncate -mt-4">
            <CustomLabel className="text-xs font-display font-light text-gray-700">
              {moment(timeStamp).fromNow()}
            </CustomLabel>
          </div>
        </div>
        <div className="w-full h-full p-1 truncate-3-lines">
          <MDEditor.Markdown
            source={description}
            style={{
              whiteSpace: "pre-wrap",
              background: "transparent",
              fontSize: 12,
              fontFamily: "Poppins",
            }}
          />
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-[5rem] hover:border-none focus:border-none">
        <ContextMenuItem
          inset
          className="w-full flex items-center justify-between"
          onClick={onClickSelectUnSelect}
        >
          <CustomLabel className="text-xs font-display text-gray-500 cursor-pointer">
            {isSelected ? "Unselect" : "Select"}
          </CustomLabel>

          <SquareMousePointer className="w-4 h-4 text-gray-500" />
        </ContextMenuItem>
        <ContextMenuItem
          inset
          className="w-full flex items-center justify-between"
          onClick={onClickHideUnhide}
        >
          <CustomLabel className="text-xs font-display text-gray-500 cursor-pointer">
            {isHide ? "Unhide" : "Hide"}
          </CustomLabel>

          <EyeOff className="w-4 h-4 text-gray-500" />
        </ContextMenuItem>
        <ContextMenuItem
          inset
          className="w-full flex items-center justify-between"
          onClick={onClickPinnedUnPinned}
        >
          <CustomLabel className="text-xs font-display text-gray-500 cursor-pointer">
            {isPinned ? "Unpin" : "Pin"}
          </CustomLabel>

          <Pin className="w-4 h-4 text-gray-500" />
        </ContextMenuItem>
        <ContextMenuItem
          inset
          className="text-red-500 w-full flex items-center justify-between"
          onClick={onClickDelete}
        >
          <CustomLabel className="text-xs font-display text-red-500 cursor-pointer">
            Delete
          </CustomLabel>
          <Trash2 className="w-4 h-4" />
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default PrivateNoteDetailsPageComponent;
