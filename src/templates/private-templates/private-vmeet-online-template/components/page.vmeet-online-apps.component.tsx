import React, { useState } from "react";
import CustomSearchBox from "../../../../components/custom-searchbox/custom-searchbox.component";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";
import {
  CalendarCheck2,
  Clipboard,
  NotebookTabs,
  Presentation,
  Timer,
  UserRoundCheck,
  Vote,
} from "lucide-react";
import "../../../../css/scroll-container.css";
import PrivateVMeetOnlineAppActiveAppDetailsComponent from "./app-component/page.vmeet-online-app-active-app-details.component";

interface appType {
  appId: string;
  appName: string;
  appDescription: string;
  appIcon: React.ReactNode;
}

const appData: appType[] = [
  {
    appId: "1",
    appName: "Registration Form",
    appDescription: "Fill out the form to complete your registration.",
    appIcon: <UserRoundCheck className="w-4 h-4 text-[#D1D5DB]" />,
  },
  {
    appId: "2",
    appName: "Polling",
    appDescription: "Create and submit your poll here.",
    appIcon: <Vote className="w-4 h-4 text-[#D1D5DB]" />,
  },
  {
    appId: "3",
    appName: "Meeting guide",
    appDescription: "Learn create and manage meetings with ease.",
    appIcon: <Presentation className="w-4 h-4 text-[#D1D5DB]" />,
  },
  {
    appId: "4",
    appName: "Smart notes",
    appDescription: "Capture, organize, and access your notes effortlessly.",
    appIcon: <NotebookTabs className="w-4 h-4 text-[#D1D5DB]" />,
  },
  {
    appId: "5",
    appName: "Timer",
    appDescription: "Set and manage your timers with ease.",
    appIcon: <Timer className="w-4 h-4 text-[#D1D5DB]" />,
  },
  {
    appId: "6",
    appName: "To-Do Lists",
    appDescription: "Organize and track your tasks effortlessly.",
    appIcon: <CalendarCheck2 className="w-4 h-4 text-[#D1D5DB]" />,
  },
  {
    appId: "7",
    appName: "Whiteboard",
    appDescription: "Draw, plan, and brainstorm with ease.",
    appIcon: <Clipboard className="w-4 h-4 text-[#D1D5DB]" />,
  },
];

const PrivateVMeetOnlineAppsPageComponent = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  const filteredAndSortedApps = appData
    .filter(
      (app) =>
        app.appName.toLowerCase().includes(searchInput.toLowerCase()) ||
        app.appDescription.toLowerCase().includes(searchInput.toLowerCase())
    )
    .sort((a, b) => {
      const aMatches =
        a.appName.toLowerCase().includes(searchInput.toLowerCase()) ||
        a.appDescription.toLowerCase().includes(searchInput.toLowerCase());
      const bMatches =
        b.appName.toLowerCase().includes(searchInput.toLowerCase()) ||
        b.appDescription.toLowerCase().includes(searchInput.toLowerCase());
      if (aMatches && !bMatches) return -1;
      if (!aMatches && bMatches) return 1;
      return 0;
    });

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
          All apps
        </CustomLabel>
      </div>

      {filteredAndSortedApps.length > 0 ? (
        <div
          className="w-full p-4 flex flex-col items-center gap-4 scroll-container"
          style={{
            height: "calc(100vh - 215px)",
            overflowY: "auto",
            boxSizing: "border-box",
          }}
        >
          {filteredAndSortedApps.map((app, index) => {
            return (
              <div key={index} className="w-full">
                <PrivateVMeetOnlineAppActiveAppDetailsComponent
                  appName={app.appName}
                  appDescription={app.appDescription}
                  appIcon={app.appIcon}
                  onClick={() => alert(app.appName)}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="w-full p-4 flex flex-col items-center gap-4">
          <CustomLabel className="text-lg font-display text-[#9CA3AF]">
            App not found!
          </CustomLabel>
        </div>
      )}
    </div>
  );
};

export default PrivateVMeetOnlineAppsPageComponent;
