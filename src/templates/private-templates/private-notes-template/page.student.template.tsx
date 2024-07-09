import {
  Check,
  Eye,
  EyeOff,
  Notebook,
  Pin,
  Plus,
  SquareMousePointer,
  Trash2,
} from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import { CustomDialogBox } from "../../../components/custom-dialogbox/custom.dialogBox.component";
import React from "react";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../../../components/custom-context-menu/custom-context-menu.ui";
import moment from "moment";
import { getRandomColor } from "../../../themes/color";
import NoteIllustration from "../../../assets/illustrations/notes-illustration";
import CustomSideDrawer from "../../../components/custom-side-drawer/custom-side-drawer.component";
import CustomMarkDown from "../../../components/custom-markdown/custom-markdown.component";

type props = {
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  onClickAddNote?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitAddNot?: () => void;
  onClickUnhide?: () => void;
  onClickHide?: () => void;
  isHidden?: boolean;
};

export const PrivateNotesHeadingPageTemplate = ({
  isOpen,
  onOpenChange,
  onClickAddNote,
  onChange,
  onSubmitAddNot,
  onClickUnhide,
  onClickHide,
  isHidden,
}: props) => {
  return (
    <div className="w-full flex flex-col items-end justify-end">
      <div className="flex items-center gap-2">
        <div>
          <CustomDialogBox
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            buttonComponent={
              <button
                onClick={onClickAddNote}
                className="p-1 text-xs rounded-full w-24 font-display flex items-center justify-center gap-1"
              >
                <Plus className="w-4 h-4 text-[#0d1b2a] cursor-pointer" />
                <CustomLabel className="text-xs font-display text-[#0d1b2a] cursor-pointer">
                  Add note
                </CustomLabel>
              </button>
            }
            title="Give your title"
            description="Please give the title of notes and continue."
            backgroundColor="bg-[#3F7DFB]"
            borderRadius="rounded-xl"
            textColor="text-white"
            descriptionColor="text-white"
          >
            <div className="w-full border-2 p-2 rounded-full flex items-center">
              <input
                type="text"
                placeholder="Enter the title"
                onChange={onChange}
                className="w-full bg-transparent outline-none border-none active:outline-none active:border-none h-8 placeholder:text-white text-white font-display ml-2 mr-1"
              />
              <button
                onClick={onSubmitAddNot}
                className="w-28 p-1 rounded-full text-xs font-display h-8 text-white bg-[#0d1b2a]"
              >
                Create
              </button>
            </div>
          </CustomDialogBox>
        </div>
        <div className="flex items-center">
          <button
            onClick={onClickUnhide}
            className={`border border-gray-400 ${
              !isHidden && "bg-gray-400"
            } p-1 text-xs rounded-l-full w-12 font-display flex items-center justify-center gap-1`}
          >
            <Eye
              className={`w-4 h-4 ${
                !isHidden ? "text-white" : "text-gray-400"
              } cursor-pointer`}
            />
          </button>
          <button
            onClick={onClickHide}
            className={`border border-gray-400 ${
              isHidden && "bg-gray-400"
            } p-1 text-xs rounded-r-full w-12 font-display flex items-center justify-center gap-1`}
          >
            <EyeOff
              className={`w-4 h-4 ${
                isHidden ? "text-white" : "text-gray-400"
              } cursor-pointer`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

type detailProps = {
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

export const PrivateNoteDetailsPageTemplate = ({
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
}: detailProps) => {
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
          <CustomLabel className="text-xs font-display text-gray-500">
            {description}
          </CustomLabel>
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

export const PrivateNoteNotFoundPageTemplate = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-[18rem]">
        <NoteIllustration />
      </div>
      <div>
        <CustomLabel className="text-4xl font-display font-medium">
          No notes here...
        </CustomLabel>
      </div>
      <div>
        <CustomLabel className="text-xs font-display text-center">
          Add notes and get organize yourself in the best way!
        </CustomLabel>
      </div>
    </div>
  );
};

type noteType = {
  id: string;
  title: string;
  description: string | undefined;
  isSelected: boolean;
  isHide: boolean;
  isPinned: boolean;
  isDeleted: boolean;
  timeStamp: Date;
};

type listProps = {
  isHidden?: boolean;
  notes?: Array<noteType>;
  onClick?: (id: string, note: noteType) => void;
  onClickSelectUnSelect?: (id: string) => void;
  onClickHideUnhide?: (id: string) => void;
  onClickPinnedUnPinned?: (id: string) => void;
  onClickDelete?: (id: string) => void;
};

export const PrivateNoteListPageTemplate = ({
  isHidden,
  notes,
  onClick,
  onClickSelectUnSelect,
  onClickHideUnhide,
  onClickPinnedUnPinned,
  onClickDelete,
}: listProps) => {
  return (
    <div>
      {isHidden ? (
        <div
          className={`w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-7 gap-4 p-1`}
        >
          {notes &&
            notes
              .filter((note) => note.isHide && !note.isDeleted)
              ?.sort((a, b) => Number(b.isPinned) - Number(a.isPinned))
              ?.slice()
              ?.reverse()
              .map((note, index) => {
                return (
                  <PrivateNoteDetailsPageTemplate
                    key={index}
                    onClick={() => onClick && onClick(note.id, note)}
                    title={note.title}
                    isSelected={note.isSelected}
                    isPinned={note.isPinned}
                    isHide={note.isHide}
                    timeStamp={note.timeStamp}
                    description={note.description}
                    onClickSelectUnSelect={() =>
                      onClickSelectUnSelect && onClickSelectUnSelect(note.id)
                    }
                    onClickHideUnhide={() =>
                      onClickHideUnhide && onClickHideUnhide(note.id)
                    }
                    onClickPinnedUnPinned={() =>
                      onClickPinnedUnPinned && onClickPinnedUnPinned(note.id)
                    }
                    onClickDelete={() =>
                      onClickDelete && onClickDelete(note.id)
                    }
                  />
                );
              })}
        </div>
      ) : (
        <div
          className={`w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-7 gap-4 p-1`}
        >
          {notes &&
            notes
              .filter((note) => !note.isHide && !note.isDeleted)
              ?.sort((a, b) => Number(b.isPinned) - Number(a.isPinned))
              .map((note, index) => {
                return (
                  <PrivateNoteDetailsPageTemplate
                    key={index}
                    onClick={() => onClick && onClick(note.id, note)}
                    title={note.title}
                    isSelected={note.isSelected}
                    isPinned={note.isPinned}
                    isHide={note.isHide}
                    timeStamp={note.timeStamp}
                    description={note.description}
                    onClickSelectUnSelect={() =>
                      onClickSelectUnSelect && onClickSelectUnSelect(note.id)
                    }
                    onClickHideUnhide={() =>
                      onClickHideUnhide && onClickHideUnhide(note.id)
                    }
                    onClickPinnedUnPinned={() =>
                      onClickPinnedUnPinned && onClickPinnedUnPinned(note.id)
                    }
                    onClickDelete={() =>
                      onClickDelete && onClickDelete(note.id)
                    }
                  />
                );
              })}
        </div>
      )}
    </div>
  );
};

type formProps = {
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  title?: string;
  timeStamp?: Date;
  setValue?: (
    value?: string,
    event?: React.ChangeEvent<HTMLTextAreaElement>,
    state?: any
  ) => void;
  value?: string;
  onClick?: () => void;
};

export const PrivateNoteFormDrawerPageTemplate = ({
  isOpen,
  onOpenChange,
  title,
  timeStamp,
  setValue,
  value,
  onClick,
}: formProps) => {
  return (
    <CustomSideDrawer
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      title={title}
      description={moment(timeStamp).fromNow()}
    >
      <div className="w-full h-full flex flex-col items-center justify-start">
        <div className="w-full">
          <CustomMarkDown value={value} setValue={setValue} />
        </div>
        <div className="w-full mt-2 flex items-center justify-end">
          <button
            onClick={onClick}
            className="border p-2 w-28 text-sm font-display rounded-lg bg-[#0d1b2a] text-white"
          >
            Save
          </button>
        </div>
      </div>
    </CustomSideDrawer>
  );
};
