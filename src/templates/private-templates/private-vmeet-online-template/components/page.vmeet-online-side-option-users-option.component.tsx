type props = {
  onClickInvite?: () => void;
  onClickMuteAll?: () => void;
  onClickPingToStartVideo?: () => void;
};

const PrivateVMeetOnlineSideOptionUsersOptionsPageComponent = ({
  onClickInvite,
  onClickMuteAll,
  onClickPingToStartVideo,
}: props) => {
  return (
    <div className="flex items-center justify-end flex-wrap gap-2">
      <button
        onClick={onClickInvite}
        className="px-4 p-2 bg-[#374151] bg-opacity-50 text-nowrap rounded-xl text-xs font-display text-[#D1D5DB]"
      >
        Invite
      </button>
      <button
        onClick={onClickMuteAll}
        className="px-4 p-2 bg-[#374151] bg-opacity-50 text-nowrap rounded-xl text-xs font-display text-[#D1D5DB]"
      >
        Mute all
      </button>
      <button
        onClick={onClickPingToStartVideo}
        className="px-4 p-2 bg-[#374151] bg-opacity-50 text-nowrap rounded-xl text-xs font-display text-[#D1D5DB]"
      >
        Ping to start video
      </button>
    </div>
  );
};

export default PrivateVMeetOnlineSideOptionUsersOptionsPageComponent;
