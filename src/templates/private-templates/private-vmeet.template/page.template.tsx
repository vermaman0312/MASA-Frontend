import { useState } from "react";
import PrivateVMeetSelectOptionPageComponent from "./components/page.vmeet-select-option.component";
import PrivateVMeetBookingCalenderPageTemplate from "./page.booking-calender.template";
import PrivateVMeetNewMettingPageTemplate from "./page.new-meeting.template";

interface eventType {
  id: string;
  title: string;
  start: string;
  end: string;
  url?: string;
}

const PrivateVMeetPageTemplate = () => {
  const [isNewMeeting, setIsNewMeeting] = useState<boolean>(false);
  const [events, setEvents] = useState<Array<eventType>>([]);

  return (
    <div className="w-full h-full flex flex-col">
      <div>
        <PrivateVMeetSelectOptionPageComponent
          events={events}
          isNewMeeting={isNewMeeting}
          onClickNewMeeting={() => setIsNewMeeting(true)}
          onClickBookingCalender={() => setIsNewMeeting(false)}
        />
      </div>

      <div className="w-full h-full mt-1">
        {!isNewMeeting ? (
          <PrivateVMeetBookingCalenderPageTemplate
            events={events}
            setEvents={setEvents}
          />
        ) : (
          <PrivateVMeetNewMettingPageTemplate />
        )}
      </div>
    </div>
  );
};

export default PrivateVMeetPageTemplate;
