import React, { useState } from "react";
import PrivateVMeetOnlineSideOptionSubHeaderPageComponent from "./page.vmeet-online-side-option-subheader.component";
import PrivateVMeetOnlineSideOptionUsersOptionsPageComponent from "./page.vmeet-online-side-option-users-option.component";
import PrivateVMeetOnlineInvitePopupPageComponent from "./page.vmeet-online-invite-popup.component";
import PrivateVMeetOnlineUserCardDetailsPageComponent from "./page.vmeet-online-user-card-details.component";
import PrivateVMeetOnlineUserListDetailsPageComponent from "./page.vmeet-online-user-list-details.component";
import PrivateVMeetOnlineParticipantsPingToStartVideoPopupPageComponent from "./participants-component/page.vmeet-online-participants-ping-to-start-video-popup.component";

type StreamWebCamState = {
  video: MediaStream | null;
  audio: MediaStream | null;
};

type props = {
  isGridView: boolean;
  onClickGridView: () => void;
  onClickListView: () => void;
  onClickInvite: () => void;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  isMicOn: boolean;
  isCameraOn: boolean;
  videoCamRef: React.RefObject<HTMLVideoElement>;
  streamWebCam: StreamWebCamState | null;
};

const PrivateVMeetOnlineParticipantsPageComponent = ({
  isGridView,
  onClickGridView,
  onClickListView,
  onClickInvite,
  isOpen,
  setIsOpen,
  isMicOn,
  isCameraOn,
  videoCamRef,
  streamWebCam,
}: props) => {
  const [isPopupOpen, setIsPopupOpen] = useState<string>("hide");
  return (
    <div className="p-4 w-full h-full flex flex-col gap-2">
      <div>
        <PrivateVMeetOnlineSideOptionSubHeaderPageComponent
          isGridView={isGridView}
          onClickGridView={onClickGridView}
          onClickListView={onClickListView}
        />
      </div>

      <div>
        <PrivateVMeetOnlineSideOptionUsersOptionsPageComponent
          onClickInvite={onClickInvite}
          onClickPingToStartVideo={() => setIsPopupOpen("visible")}
        />
        <PrivateVMeetOnlineInvitePopupPageComponent
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <PrivateVMeetOnlineParticipantsPingToStartVideoPopupPageComponent
          isOpen={isPopupOpen}
          setIsOpen={setIsPopupOpen}
        />
      </div>

      <div className="mt-3 flex flex-col gap-2">
        {isGridView ? (
          <div className="grid grid-cols-2 gap-2">
            <PrivateVMeetOnlineUserCardDetailsPageComponent
              isMicOn={isMicOn}
              isCameraOn={isCameraOn}
              userName="Jenny Ferr"
              userProfileImageVideo="https://randomuser.me/api/portraits/women/18.jpg"
              isRole="CO-HOST"
              videoCamRef={videoCamRef}
              streamWebCam={streamWebCam}
              onClickMakeHost={() => alert("Host")}
              onClickMakeCoHost={() => alert("Co-host")}
              onClickMic={() => alert("Mic on")}
              onClickKick={() => alert("Kick")}
            />
          </div>
        ) : (
          <PrivateVMeetOnlineUserListDetailsPageComponent
            isMicOn={isMicOn}
            isCameraOn={isCameraOn}
            userName="Jenny Ferr"
            userProfileImageVideo="https://randomuser.me/api/portraits/women/18.jpg"
            isRole="CO-HOST"
            videoCamRef={videoCamRef}
            streamWebCam={streamWebCam}
            onClickMakeHost={() => alert("Host")}
            onClickMakeCoHost={() => alert("Co-host")}
            onClickMic={() => alert("Mic on")}
            onClickKick={() => alert("Kick")}
          />
        )}
      </div>
    </div>
  );
};

export default PrivateVMeetOnlineParticipantsPageComponent;
