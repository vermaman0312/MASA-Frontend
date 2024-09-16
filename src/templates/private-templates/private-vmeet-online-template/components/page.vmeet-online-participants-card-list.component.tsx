import React from "react";
import PrivateVMeetOnlineParticipantsCardDetailsPageComponent from "./page.vmeet-online-participants-card-details.component";

const PrivateVMeetOnlineParticipantsCardListPageComponent = () => {
  return (
    <div className="w-full h-full flex flex-wrap items-start justify-start gap-2 p-4">
      <div className="h-40 w-40">
        <PrivateVMeetOnlineParticipantsCardDetailsPageComponent />
      </div>
    </div>
  );
};

export default PrivateVMeetOnlineParticipantsCardListPageComponent;
