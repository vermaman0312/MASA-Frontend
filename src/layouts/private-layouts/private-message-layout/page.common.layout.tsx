import { useEffect, useState } from "react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import {
  Archive,
  ArchiveX,
  BringToFront,
  CornerUpLeft,
  CornerUpRight,
  EllipsisVertical,
  File,
  Inbox,
  MessageCircleMore,
  MousePointer2,
  NotebookTabs,
  Package2,
  Paperclip,
  Save,
  Search,
  Send,
  SquareCheck,
  SquareLibrary,
  SquarePen,
  Trash2,
  Users,
} from "lucide-react";
import "../../../css/scroll-container.css";
import CustomMenuDropdown from "../../../components/custom-menu-dropdown/custom-menu-dropdown.component";
import { DropdownMenuItem } from "../../../components/custom-menu-dropdown/custom-menu-dropdown.ui";
import moment from "moment";
import CustomToolTip from "../../../components/custom-tooltip/custom-tooltip.component";
import CustomAvatar from "../../../components/custom-avatar/custom-avatar.component";
import { Textarea } from "../../../components/custom-textarea/custom-textarea.component";
import CustomMarkDown from "../../../components/custom-markdown/custom-markdown.component";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../../../components/custom-context-menu/custom-context-menu.ui";

const PrivateMessagePageLayout = () => {
  const [isUnread, setIsUnread] = useState<boolean>(false);
  const [isMailSelected, setIsMailSelected] = useState<Array<string>>([
    "1",
    "",
  ]);
  const [text, setText] = useState("");
  const [linkedText, setLinkedText] = useState("");
  const [isCompose, setIsCompose] = useState<boolean>(false);
  const maxWords = 800;
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value.length <= maxWords) {
      setText(event.target.value);
    }
  };
  useEffect(() => {
    const urlRegex = /\b(https?:\/\/[^\s]+)/g;
    const linkedText = text.replace(urlRegex, (url) => {
      return `<a href="${url}" style="color: blue;">${url}</a>`;
    });
    setLinkedText(linkedText);
  }, [text]);

  return (
    <div className="w-full h-full">
      <div className="w-full h-full border rounded-lg flex flex-col items-center justify-between">
        <div className="w-full border-b p-2 flex items-center justify-between">
          <div>
            <CustomLabel className="font-display font-bold text-xl">
              {isCompose ? "New Message" : "Inbox"}
            </CustomLabel>
          </div>
          <div className="flex items-center gap-2">
            {!isCompose && (
              <div className="border flex items-center gap-1 p-2 rounded-full">
                <input
                  type="text"
                  className="outline-none border-none text-xs ml-1 font-display"
                  placeholder="Search..."
                />
                <Search className="w-4 h-4" />
              </div>
            )}
            {!isCompose && (
              <div className="p-1 flex items-center justify-between rounded-md bg-gray-200 gap-1 hidden md:flex">
                <CustomLabel
                  onClick={() => setIsUnread(false)}
                  className={`w-24 flex items-center justify-center font-display text-xs p-1 ${
                    !isUnread && "bg-white rounded-md shadow-md"
                  } cursor-pointer ${
                    !isUnread ? "text-gray-700" : "text-gray-500"
                  }`}
                >
                  All Message
                </CustomLabel>
                <CustomLabel
                  onClick={() => setIsUnread(true)}
                  className={`w-24 flex items-center justify-center font-display text-xs p-1 ${
                    isUnread && "bg-white rounded-md shadow-md"
                  } cursor-pointer ${
                    isUnread ? "text-gray-700" : "text-gray-500"
                  }`}
                >
                  Unread
                </CustomLabel>
              </div>
            )}
            {!isCompose && (
              <div
                onClick={() => setIsCompose(true)}
                className="w-24 bg-[#222222] flex items-center justify-center gap-1 p-2 rounded-lg hidden md:flex cursor-pointer"
              >
                <CustomLabel className="font-display text-xs text-white cursor-pointer">
                  Compose
                </CustomLabel>
              </div>
            )}
            <div className="md:hidden flex items-center">
              <CustomMenuDropdown
                buttonComponent={<EllipsisVertical />}
                marginRight="mr-4"
                marginTop="mt-4"
              >
                <DropdownMenuItem className="hover:bg-gray-100 rounded-lg cursor-pointer">
                  {/* <FilePenLine className="mr-2 h-4 w-4" /> */}
                  <span className="font-display text-xs">Compose</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 rounded-lg cursor-pointer">
                  {/* <FilePenLine className="mr-2 h-4 w-4" /> */}
                  <span className="font-display text-xs">All Message</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer">
                  {/* <User className="mr-2 h-4 w-4" /> */}
                  <span className="font-display text-xs">Unread</span>
                </DropdownMenuItem>
              </CustomMenuDropdown>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex items-center justify-between">
          <div className="h-full w-full md:w-[30%] border-r flex flex-col items-center gap-2">
            <div className="w-full h-full flex flex-col gap-2">
              <div className="flex flex-row items-center justify-start gap-2 border-b p-[0.33rem] scroll-container">
                <div className="p-2 hover:bg-gray-200 flex items-center justify-center rounded-md transition-all hover:transition-all">
                  <CustomToolTip
                    icon={<Inbox className="w-4 h-4 cursor-pointer" />}
                    className="bg-[#0d1b2a] border-none"
                  >
                    <CustomLabel className="text-white font-display text-xs">
                      Inbox
                    </CustomLabel>
                  </CustomToolTip>
                </div>
                <div className="p-2 hover:bg-gray-200 flex items-center justify-center rounded-md transition-all hover:transition-all">
                  <CustomToolTip
                    icon={<Users className="w-4 h-4 cursor-pointer" />}
                    className="bg-[#0d1b2a] border-none"
                  >
                    <CustomLabel className="text-white font-display text-xs">
                      Social
                    </CustomLabel>
                  </CustomToolTip>
                </div>
                <div className="p-2 hover:bg-gray-200 flex items-center justify-center rounded-md transition-all hover:transition-all">
                  <CustomToolTip
                    icon={<Archive className="w-4 h-4 cursor-pointer" />}
                    className="bg-[#0d1b2a] border-none"
                  >
                    <CustomLabel className="text-white font-display text-xs">
                      Archive
                    </CustomLabel>
                  </CustomToolTip>
                </div>
                <div className="p-2 hover:bg-gray-200 flex items-center justify-center rounded-md transition-all hover:transition-all">
                  <CustomToolTip
                    icon={<ArchiveX className="w-4 h-4 cursor-pointer" />}
                    className="bg-[#0d1b2a] border-none"
                  >
                    <CustomLabel className="text-white font-display text-xs">
                      Junk
                    </CustomLabel>
                  </CustomToolTip>
                </div>
                <div className="p-2 hover:bg-gray-200 flex items-center justify-center rounded-md transition-all hover:transition-all">
                  <CustomToolTip
                    icon={<Send className="w-4 h-4 cursor-pointer" />}
                    className="bg-[#0d1b2a] border-none"
                  >
                    <CustomLabel className="text-white font-display text-xs">
                      Sent
                    </CustomLabel>
                  </CustomToolTip>
                </div>
                <div className="p-2 hover:bg-gray-200 flex items-center justify-center rounded-md transition-all hover:transition-all">
                  <CustomToolTip
                    icon={<SquarePen className="w-4 h-4 cursor-pointer" />}
                    className="bg-[#0d1b2a] border-none"
                  >
                    <CustomLabel className="text-white font-display text-xs">
                      Draft
                    </CustomLabel>
                  </CustomToolTip>
                </div>
                <div className="p-2 hover:bg-gray-200 flex items-center justify-center rounded-md transition-all hover:transition-all">
                  <CustomToolTip
                    icon={<Package2 className="w-4 h-4 cursor-pointer" />}
                    className="bg-[#0d1b2a] border-none"
                  >
                    <CustomLabel className="text-white font-display text-xs">
                      Promotion
                    </CustomLabel>
                  </CustomToolTip>
                </div>
                <div className="p-2 hover:bg-gray-200 flex items-center justify-center rounded-md transition-all hover:transition-all">
                  <CustomToolTip
                    icon={<Trash2 className="w-4 h-4 cursor-pointer" />}
                    className="bg-[#0d1b2a] border-none"
                  >
                    <CustomLabel className="text-white font-display text-xs">
                      Deleted
                    </CustomLabel>
                  </CustomToolTip>
                </div>
              </div>
              <div className="w-full h-full p-2">
                <div>
                  <ContextMenu>
                    <ContextMenuTrigger>
                      <div className="border w-full rounded-lg p-2 bg-gray-100">
                        <div className="w-full flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {isMailSelected[0] && (
                              <SquareCheck className="w-5 h-5 text-[#0d1b2a] rounded-md" />
                            )}
                            <CustomLabel className="font-display text-md text-gray-600">
                              Aman Verma
                            </CustomLabel>
                            <div className="w-2 h-2 bg-blue-700 rounded-full" />
                          </div>
                          <CustomLabel className="font-display text-xs font-light text-gray-400">
                            {moment(new Date()).fromNow()}
                          </CustomLabel>
                        </div>
                        <div className="w-full flex items-center justify-between">
                          <CustomLabel className="font-display text-xs text-gray-600">
                            Parent Meeting
                          </CustomLabel>
                        </div>
                        <div className="w-full flex items-center justify-between mt-3">
                          <CustomLabel className="font-display text-xs font-light text-gray-600 truncate-2-lines">
                            Dear parent, good morning, I want to inform you
                            that, tommorow we have meeting at 12 pm. so kindly
                            request to you please come to school. thankyou for
                            your understanding.
                          </CustomLabel>
                        </div>
                        <div className="w-full flex items-center flex-wrap justify-start gap-2 mt-3">
                          <button className="bg-[#0d1b2a] rounded-md flex items-center justify-center">
                            <CustomLabel className="text-xs text-white font-light font-display p-1">
                              Meeting
                            </CustomLabel>
                          </button>
                          <button className="bg-[#0d1b2a] rounded-md flex items-center justify-center">
                            <CustomLabel className="text-xs text-white font-light font-display p-1">
                              Important
                            </CustomLabel>
                          </button>
                          <button className="bg-[#0d1b2a] rounded-md flex items-center justify-center">
                            <CustomLabel className="text-xs text-white font-light font-display p-1">
                              Work
                            </CustomLabel>
                          </button>
                          <button className="bg-[#0d1b2a] rounded-md flex items-center justify-center">
                            <CustomLabel className="text-xs text-white font-light font-display p-1">
                              Tasksheet
                            </CustomLabel>
                          </button>
                          <button className="bg-[#0d1b2a] rounded-md flex items-center justify-center">
                            <CustomLabel className="text-xs text-white font-light font-display p-1">
                              Attendance
                            </CustomLabel>
                          </button>
                          <button className="bg-[#0d1b2a] rounded-md flex items-center justify-center">
                            <CustomLabel className="text-xs text-white font-light font-display p-1">
                              Complaint
                            </CustomLabel>
                          </button>
                          <button className="bg-[#0d1b2a] rounded-md flex items-center justify-center">
                            <CustomLabel className="text-xs text-white font-light font-display p-1">
                              Announcement
                            </CustomLabel>
                          </button>
                        </div>
                      </div>
                    </ContextMenuTrigger>
                    <ContextMenuContent className="w-[10rem] hover:border-none focus:border-none">
                      <ContextMenuItem
                        inset
                        className="w-full flex items-center justify-between"
                      >
                        <CustomLabel className="text-xs font-display text-gray-500 cursor-pointer">
                          Select
                        </CustomLabel>
                        <MousePointer2 className="w-4 h-4 text-gray-500" />
                      </ContextMenuItem>
                      <ContextMenuItem
                        inset
                        className="w-full flex items-center justify-between"
                      >
                        <CustomLabel className="text-xs font-display text-gray-500 cursor-pointer">
                          Mark as read
                        </CustomLabel>
                        <SquareLibrary className="w-4 h-4 text-gray-500" />
                      </ContextMenuItem>
                      <ContextMenuItem
                        inset
                        className="w-full flex items-center justify-between"
                      >
                        <CustomLabel className="text-xs font-display text-gray-500 cursor-pointer">
                          Move to archive
                        </CustomLabel>
                        <BringToFront className="w-4 h-4 text-gray-500" />
                      </ContextMenuItem>
                      <ContextMenuItem
                        inset
                        className="w-full flex items-center justify-between"
                      >
                        <CustomLabel className="text-xs font-display text-gray-500 cursor-pointer">
                          Move to junk
                        </CustomLabel>
                        <BringToFront className="w-4 h-4 text-gray-500" />
                      </ContextMenuItem>
                      <ContextMenuItem
                        inset
                        className="w-full flex items-center justify-between"
                      >
                        <CustomLabel className="text-xs font-display text-gray-500 cursor-pointer">
                          Save
                        </CustomLabel>
                        <Save className="w-4 h-4 text-gray-500" />
                      </ContextMenuItem>
                      <ContextMenuItem
                        inset
                        className="w-full flex items-center justify-between text-red-500"
                      >
                        <CustomLabel className="text-xs font-display cursor-pointer text-red-500">
                          Delete
                        </CustomLabel>
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </ContextMenuItem>
                    </ContextMenuContent>
                  </ContextMenu>
                </div>
              </div>
            </div>
          </div>

          {isCompose ? (
            <div className="h-full w-full md:w-[70%] flex flex-col items-center justify-between">
              <div className="border-b w-full p-2 flex items-center justify-end">
                <div className="flex gap-2">
                  <button className="w-24 bg-blue-900 text-white text-xs font-display p-1 flex items-center justify-center rounded-lg">
                    Send
                  </button>
                  <button className="w-24 bg-gray-900 text-white text-xs font-display p-1 flex items-center justify-center rounded-lg">
                    Save Draft
                  </button>
                  <button
                    onClick={() => setIsCompose(false)}
                    className="w-24 bg-gray-900 text-white text-xs font-display p-1 flex items-center justify-center rounded-lg"
                  >
                    Cancel
                  </button>
                </div>
              </div>
              <div className="w-full h-full flex flex-col items-center justify-start p-2 gap-2">
                <div className="w-full p-2 flex flex-col gap-2 items-center justify-center">
                  <div className="w-full flex items-center justify-start gap-1">
                    <CustomLabel className="text-xs font-display text-gray-600">
                      Signature:
                    </CustomLabel>
                    <input
                      type="text"
                      value="Aman Verma"
                      placeholder="Signature"
                      className="outline-none border p-1 text-xs w-full font-display rounded-md"
                    />
                    <File />
                  </div>
                  <div className="w-full flex items-center justify-start gap-1">
                    <CustomLabel className="text-xs font-display text-gray-600">
                      To:
                    </CustomLabel>
                    <input
                      type="text"
                      value=""
                      placeholder="username"
                      className="outline-none border p-1 text-xs w-full font-display rounded-md"
                    />
                    <NotebookTabs />
                  </div>
                  <div className="w-full flex items-center justify-start gap-1">
                    <CustomLabel className="text-xs font-display text-gray-600">
                      Subject:
                    </CustomLabel>
                    <input
                      type="text"
                      value=""
                      placeholder="Subject"
                      className="outline-none border p-1 text-xs w-full font-display rounded-md"
                    />
                  </div>
                  <div className="w-full flex items-center justify-start gap-1">
                    <CustomLabel className="text-xs font-display text-gray-600">
                      5 attachment are included with this message.
                    </CustomLabel>
                  </div>
                </div>
                <div className="w-full h-full">
                  <Textarea
                    className={`w-full h-full rounded-md bg-gray-100 outline-none p-2 text-xs text-start placeholder:text-gray-400 flex items-center justify-start resize-none`}
                    placeholder="write a message..."
                    value={text}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full w-full md:w-[70%] flex flex-col items-center justify-between">
              <div className="w-full flex flex-col gap-2">
                <div className="flex items-center justify-between border-b">
                  <div className="flex gap-4 p-2">
                    <div className="flex items-center justify-center">
                      <CustomAvatar
                        className="w-6 h-6"
                        src="https://github.com/shadcn.png"
                        title="Aman Verma"
                      />
                    </div>
                    <div className="border-r flex items-center justify-center">
                      <CustomLabel className="font-display mr-2">
                        Aman Verma
                      </CustomLabel>
                    </div>
                    <div className="flex items-center justify-center">
                      <CustomLabel className="font-display text-gray-400 font-light text-xs mr-2">
                        {moment(new Date()).fromNow()}
                      </CustomLabel>
                    </div>
                  </div>
                  <div className="flex gap-4 p-2">
                    <div className="flex items-center justify-center">
                      <CustomToolTip
                        icon={<Trash2 className="w-4 h-4 cursor-pointer" />}
                        className="bg-[#0d1b2a] border-none"
                      >
                        <CustomLabel className="text-white font-display text-xs">
                          Delete
                        </CustomLabel>
                      </CustomToolTip>
                    </div>
                    <div className="flex items-center justify-center">
                      <CustomToolTip
                        icon={
                          <CornerUpLeft className="w-4 h-4 cursor-pointer" />
                        }
                        className="bg-[#0d1b2a] border-none"
                      >
                        <CustomLabel className="text-white font-display text-xs">
                          Reply
                        </CustomLabel>
                      </CustomToolTip>
                    </div>
                    <div className="flex items-center justify-center">
                      <CustomToolTip
                        icon={
                          <CornerUpRight className="w-4 h-4 cursor-pointer" />
                        }
                        className="bg-[#0d1b2a] border-none"
                      >
                        <CustomLabel className="text-white font-display text-xs">
                          Forward
                        </CustomLabel>
                      </CustomToolTip>
                    </div>
                    <div className="border-l flex items-center justify-center">
                      <EllipsisVertical className="w-4 h-4 cursor-pointer ml-2" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-full w-full flex flex-col items-center justify-end">
                <div className="w-full h-full flex flex-col items-center justify-start">
                  <div className="border-b w-full p-2 flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                      <CustomLabel className="font-display text-xs text-gray-600">
                        Re: Request about question
                      </CustomLabel>
                      <CustomLabel className="font-display text-xs text-gray-600">
                        Reply to: aman.verma@thegatewaycorp.co.in
                      </CustomLabel>
                    </div>
                    <div className="h-full flex items-end justify-end gap-2">
                      <Paperclip className="w-4 h-4" />
                      <CustomLabel className="font-display text-xs text-gray-600">
                        5 Attachment are included with this message
                      </CustomLabel>
                    </div>
                  </div>
                  <div className="w-full h-full p-2 flex items-start justify-start overflow-x-hidden">
                    <CustomLabel
                      className="font-display text-justify font-light text-xs"
                      dangerouslySetInnerHTML={{ __html: linkedText }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* <div className="h-full w-full md:w-[70%] border-l flex items-center justify-center hidden md:flex">
              <MessageCircleMore className="w-16 h-16 text-gray-500" />
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default PrivateMessagePageLayout;
