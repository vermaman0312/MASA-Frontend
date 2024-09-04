import React, { useState } from "react";
import CustomSearchBox from "../../../../components/custom-searchbox/custom-searchbox.component";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";
import {
  CalendarCheck2,
  ChevronRight,
  Clipboard,
  NotebookTabs,
  Presentation,
  Timer,
  UserRoundCheck,
  Vote,
} from "lucide-react";
import "../../../../css/scroll-container.css";

const PrivateVMeetOnlineAppsPageComponent = () => {
  const [searchInput, setSearchInput] = useState<string>("");
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="p-4">
        <CustomSearchBox
          border="border-2 border-[#374151] border-opacity-50"
          borderRadius="rounded-xl"
          iconColor="text-[#6B7280]"
          textColor="text-[#6B7280]"
          placeholder="Search apps..."
          onChange={(event) => setSearchInput(event.target.value)}
          value={searchInput}
          type="text"
          onCancel={() => setSearchInput("")}
        />
      </div>
      <div className="p-4 bg-[#1F2937] bg-opacity-50 flex items-center justify-center">
        <CustomLabel className="text-lg font-display text-[#9CA3AF]">
          Active apps
        </CustomLabel>
      </div>

      <div className="w-full p-4 flex flex-col items-center gap-4">
        <div className="w-full flex items-center justify-between cursor-pointer">
          <div className="flex items-center justify-center gap-4">
            <div className="bg-[#374151] bg-opacity-50 p-3 rounded-lg">
              <UserRoundCheck className="w-4 h-4 text-[#D1D5DB]" />
            </div>
            <div className="flex flex-col">
              <CustomLabel className="text-[#D1D5DB] text-lg font-display cursor-pointer">
                Registration Form
              </CustomLabel>
              <CustomLabel className="text-[#6B7280] text-xs font-display cursor-pointer">
                Eros in nec, in tortor fames aenean arcu sed.
              </CustomLabel>
            </div>
          </div>
          <div>
            <ChevronRight className="text-[#9CA3AF]" />
          </div>
        </div>

        <div className="w-full flex items-center justify-between cursor-pointer">
          <div className="flex items-center justify-center gap-4">
            <div className="bg-[#374151] bg-opacity-50 p-3 rounded-lg">
              <Vote className="w-4 h-4 text-[#D1D5DB]" />
            </div>
            <div className="flex flex-col">
              <CustomLabel className="text-[#D1D5DB] text-lg font-display cursor-pointer">
                Polling
              </CustomLabel>
              <CustomLabel className="text-[#6B7280] text-xs font-display cursor-pointer">
                Lectus tellus congue cursus lorem tempor mattis id neque.
              </CustomLabel>
            </div>
          </div>
          <div>
            <ChevronRight className="text-[#9CA3AF]" />
          </div>
        </div>
      </div>

      <div className="p-4 bg-[#1F2937] bg-opacity-50 flex items-center justify-center">
        <CustomLabel className="text-lg font-display text-[#9CA3AF]">
          All apps
        </CustomLabel>
      </div>

      <div
        className="w-full p-4 flex flex-col items-center gap-4 scroll-container"
        style={{
          minHeight: "calc(100vh - 500px)",
          maxHeight: "calc(100vh - 500px)",
          overflowY: "auto",
          boxSizing: "border-box",
        }}
      >
        <div className="w-full flex items-center justify-between cursor-pointer">
          <div className="flex items-center justify-center gap-4">
            <div className="bg-[#374151] bg-opacity-50 p-3 rounded-lg">
              <Presentation className="w-4 h-4 text-[#D1D5DB]" />
            </div>
            <div className="flex flex-col">
              <CustomLabel className="text-[#D1D5DB] text-lg font-display cursor-pointer">
                Meeting guide
              </CustomLabel>
              <CustomLabel className="text-[#6B7280] text-xs font-display cursor-pointer">
                In quis mi venenatis gravida. Volutpat ultrices at proin dolor.
              </CustomLabel>
            </div>
          </div>
          <div>
            <ChevronRight className="text-[#9CA3AF]" />
          </div>
        </div>

        <div className="w-full flex items-center justify-between cursor-pointer">
          <div className="flex items-center justify-center gap-4">
            <div className="bg-[#374151] bg-opacity-50 p-3 rounded-lg">
              <NotebookTabs className="w-4 h-4 text-[#D1D5DB]" />
            </div>
            <div className="flex flex-col">
              <CustomLabel className="text-[#D1D5DB] text-lg font-display cursor-pointer">
                Smart notes
              </CustomLabel>
              <CustomLabel className="text-[#6B7280] text-xs font-display cursor-pointer">
                Lectus tellus congue cursus lorem tempor mattis id neque.
              </CustomLabel>
            </div>
          </div>
          <div>
            <ChevronRight className="text-[#9CA3AF]" />
          </div>
        </div>

        <div className="w-full flex items-center justify-between cursor-pointer">
          <div className="flex items-center justify-center gap-4">
            <div className="bg-[#374151] bg-opacity-50 p-3 rounded-lg">
              <Timer className="w-4 h-4 text-[#D1D5DB]" />
            </div>
            <div className="flex flex-col">
              <CustomLabel className="text-[#D1D5DB] text-lg font-display cursor-pointer">
                Timer
              </CustomLabel>
              <CustomLabel className="text-[#6B7280] text-xs font-display cursor-pointer">
                Lectus tellus congue cursus lorem tempor mattis id neque.
              </CustomLabel>
            </div>
          </div>
          <div>
            <ChevronRight className="text-[#9CA3AF]" />
          </div>
        </div>

        <div className="w-full flex items-center justify-between cursor-pointer">
          <div className="flex items-center justify-center gap-4">
            <div className="bg-[#374151] bg-opacity-50 p-3 rounded-lg">
              <CalendarCheck2 className="w-4 h-4 text-[#D1D5DB]" />
            </div>
            <div className="flex flex-col">
              <CustomLabel className="text-[#D1D5DB] text-lg font-display cursor-pointer">
                To-Do Lists
              </CustomLabel>
              <CustomLabel className="text-[#6B7280] text-xs font-display cursor-pointer">
                Lectus tellus congue cursus lorem tempor mattis id neque.
              </CustomLabel>
            </div>
          </div>
          <div>
            <ChevronRight className="text-[#9CA3AF]" />
          </div>
        </div>

        <div className="w-full flex items-center justify-between cursor-pointer">
          <div className="flex items-center justify-center gap-4">
            <div className="bg-[#374151] bg-opacity-50 p-3 rounded-lg">
              <Clipboard className="w-4 h-4 text-[#D1D5DB]" />
            </div>
            <div className="flex flex-col">
              <CustomLabel className="text-[#D1D5DB] text-lg font-display cursor-pointer">
                Whiteboard
              </CustomLabel>
              <CustomLabel className="text-[#6B7280] text-xs font-display cursor-pointer">
                Lectus tellus congue cursus lorem tempor mattis id neque.
              </CustomLabel>
            </div>
          </div>
          <div>
            <ChevronRight className="text-[#9CA3AF]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateVMeetOnlineAppsPageComponent;
