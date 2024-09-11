import React, { useState } from "react";
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
import PrivateVMeetOnlineAppListPageComponent from "./app-component/page.vmeet-online-app-list.component";
import PrivateVMeetOnlineAppFormDetailsPageComponent from "./app-component/components/registration-form-component/page.vmeet-online-app-form-details.component";
import PrivateVMeetOnlineAppPollingPageComponent from "./app-component/components/polling-component/page.vmeet-online-app-polling.component";
import PrivateVMeetOnlineAppMeetingGuidePageComponent from "./app-component/components/meeting-guide-component/page.vmeet-online-app-meeting-guide.component";
import PrivateVMeetOnlineAppSmartNotesPageComponent from "./app-component/components/smart-notes-component/page.vmeet-online-app-smart-notes.component";
import PrivateVMeetOnlineAppTimerPageComponent from "./app-component/components/timer-component/page.vmeet-online-app-timer.component";

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
  const [openAppId, setOpenAppId] = useState<string>("");
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
    <div className="w-full h-full flex flex-col">
      {openAppId === "1" ? (
        <PrivateVMeetOnlineAppFormDetailsPageComponent
          onClickBack={() => setOpenAppId("")}
        />
      ) : openAppId === "2" ? (
        <PrivateVMeetOnlineAppPollingPageComponent
          onClickBack={() => setOpenAppId("")}
        />
      ) : openAppId === "3" ? (
        <PrivateVMeetOnlineAppMeetingGuidePageComponent
          onClickBack={() => setOpenAppId("")}
        />
      ) : openAppId === "4" ? (
        <PrivateVMeetOnlineAppSmartNotesPageComponent
          onClickBack={() => setOpenAppId("")}
        />
      ) : openAppId === "5" ? (
        <PrivateVMeetOnlineAppTimerPageComponent
          onClickBack={() => setOpenAppId("")}
        />
      ) : openAppId === "6" ? null : openAppId === "7" ? null : (
        <PrivateVMeetOnlineAppListPageComponent
          setSearchInput={setSearchInput}
          searchInput={searchInput}
          filteredAndSortedApps={filteredAndSortedApps}
          onClick={(appId) => setOpenAppId(appId)}
        />
      )}
    </div>
  );
};

export default PrivateVMeetOnlineAppsPageComponent;
