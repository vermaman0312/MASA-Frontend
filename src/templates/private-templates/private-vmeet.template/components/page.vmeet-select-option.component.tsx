import React from "react";

interface eventType {
  id: string;
  title: string;
  start: string;
  end: string;
  url?: string;
}

type props = {
  events: Array<eventType>;
  isNewMeeting?: boolean;
  onClickNewMeeting?: () => void;
  onClickBookingCalender?: () => void;
};

const PrivateVMeetSelectOptionPageComponent = ({
  events,
  isNewMeeting,
  onClickNewMeeting,
  onClickBookingCalender,
}: props) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[20rem] bg-gray-300 flex items-center justify-between p-1 rounded-lg">
        <button
          disabled={events.length <= 0 ? false : true}
          onClick={onClickNewMeeting}
          className={`w-full ${
            isNewMeeting && "bg-white"
          } text-xs font-display rounded-lg p-1`}
        >
          New Meeting
        </button>
        <button
          onClick={onClickBookingCalender}
          className={`w-full ${
            !isNewMeeting && "bg-white"
          } text-xs font-display rounded-lg p-1`}
        >
          Booking Calender
        </button>
      </div>
    </div>
  );
};

export default PrivateVMeetSelectOptionPageComponent;
