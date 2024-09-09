import React from "react";
import CustomSearchBox from "../../../../../components/custom-searchbox/custom-searchbox.component";
import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";
import PrivateVMeetOnlineAppActiveAppDetailsComponent from "./page.vmeet-online-app-active-app-details.component";

interface appType {
  appId: string;
  appName: string;
  appDescription: string;
  appIcon: React.ReactNode;
}

type props = {
  setSearchInput: (value: string) => void;
  searchInput: string;
  filteredAndSortedApps: Array<appType>;
  onClick: (value: string) => void;
};

const PrivateVMeetOnlineAppListPageComponent = ({
  setSearchInput,
  searchInput,
  filteredAndSortedApps,
  onClick,
}: props) => {
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
            height: "calc(100vh - 235px)",
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
                  onClick={() => onClick(app.appId)}
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

export default PrivateVMeetOnlineAppListPageComponent;
