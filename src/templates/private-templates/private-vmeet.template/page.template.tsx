import { EventClickArg } from "@fullcalendar/common";
import FullCalendar from "@fullcalendar/react";
import { X } from "lucide-react";
import { useRef, useState } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import CustomDialogBox2 from "../../../components/custom-dialogbox/customDialogBox2.component";
import { Textarea } from "../../../components/custom-textarea/custom-textarea.component";
import { CustomDatePicker } from "../../../components/custom-datepicker/custom-datepicker.component";
import CustomTimePicker from "../../../components/custom-time-picker/custom-time-picker.component";

interface eventType {
  id: string;
  title: string;
  start: string;
  end: string;
  url?: string;
}

const PrivateVMeetPageTemplate = () => {
  const [isNewMeeting, setIsNewMeeting] = useState<boolean>(false);
  const calendarRef = useRef<FullCalendar>(null);
  const [events, setEvents] = useState<Array<eventType>>([]);
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [singleEvent, setSingleEvent] = useState<eventType>();

  const handleEventClick = (clickInfo: EventClickArg) => {
    clickInfo.jsEvent.preventDefault();
    if (clickInfo.event.url) {
      window.open(clickInfo.event.url, "_blank");
    } else {
      alert(
        `Event booked: ${clickInfo.event.title} on ${clickInfo.event.startStr}`
      );
    }
  };

  const handleDateClick = (arg: any) => {
    const newEvent: eventType = {
      id: String(events.length + 1),
      title: `Booked Seminar from Aman Verma.`,
      start: arg.dateStr,
      end: arg.dateStr,
    };
    setEvents([...events, newEvent]);
    setSingleEvent({
      id: String(events.length + 1),
      title: `Booked Seminar from Aman Verma.`,
      start: arg.dateStr,
      end: arg.dateStr,
    });
    setOpenForm(true);
  };

  const handleCancelClick = (eventId: string) => {
    setEvents(events.filter((event) => event.id !== eventId));
    setOpenForm(false);
  };

  const renderEventContent = (eventInfo: any) => {
    return (
      <>
        <div className="flex items-start justify-between gap-2 overflow-hidden">
          <span className="truncate">{eventInfo.event.title}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCancelClick(eventInfo.event.id);
            }}
            className="text-xs font-display p-1 bg-red-500 text-white rounded-full"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="w-full h-full">
      <div className="w-full flex items-center justify-center">
        <div className="w-[20rem] bg-gray-300 flex items-center justify-between p-1 rounded-lg">
          <button
            disabled={events.length <= 0 ? false : true}
            onClick={() => setIsNewMeeting(true)}
            className={`w-full ${
              isNewMeeting && "bg-white"
            } text-xs font-display rounded-lg p-1`}
          >
            New Meeting
          </button>
          <button
            onClick={() => setIsNewMeeting(false)}
            className={`w-full ${
              !isNewMeeting && "bg-white"
            } text-xs font-display rounded-lg p-1`}
          >
            Booking Calender
          </button>
        </div>
      </div>

      <div className="w-full mt-1">
        {!isNewMeeting && (
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            initialDate={new Date()}
            headerToolbar={{
              left: `prev,next today`,
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay",
            }}
            validRange={{
              start: new Date().toISOString().split("T")[0],
            }}
            editable={true}
            events={events as any}
            eventClick={(arg) => handleEventClick(arg as any)}
            dateClick={handleDateClick}
            slotMinTime="08:00:00"
            slotMaxTime="20:00:00"
            height="auto"
            eventContent={renderEventContent}
          />
        )}

        <CustomDialogBox2
          isOpen={openForm}
          onClose={() => singleEvent && handleCancelClick(singleEvent.id)}
          title="Booking Details"
        >
          <div className="w-full flex items-center justify-between gap-2">
            <div className="w-full">
              <CustomLabel
                className="font-medium text-xs font-display text-[#0d1b2a]"
                htmlFor="email"
              >
                From Date:
              </CustomLabel>
              <CustomDatePicker
                selected={
                  singleEvent &&
                  new Date(singleEvent.start as string).toLocaleDateString()
                }
              />
            </div>
            <div className="w-full">
              <CustomLabel
                className="font-medium text-xs font-display text-[#0d1b2a]"
                htmlFor="email"
              >
                To Date:
              </CustomLabel>
              <CustomDatePicker
                selected={
                  singleEvent &&
                  new Date(singleEvent.end as string).toLocaleDateString()
                }
              />
            </div>
          </div>
          <div className="w-full flex items-center justify-between gap-2">
            <div className="w-full">
              <CustomLabel
                className="font-medium text-xs font-display text-[#0d1b2a]"
                htmlFor="email"
              >
                From Time:
              </CustomLabel>
              <CustomTimePicker value={singleEvent?.start} />
            </div>
            <div className="w-full">
              <CustomLabel
                className="font-medium text-xs font-display text-[#0d1b2a]"
                htmlFor="email"
              >
                To Time:
              </CustomLabel>
              <CustomTimePicker value={singleEvent?.end} />
            </div>
          </div>

          <div className="w-full">
            <CustomLabel
              className="font-medium text-xs font-display text-[#0d1b2a]"
              htmlFor="email"
            >
              Reason:
            </CustomLabel>
            <Textarea
              className="border-2 rounded-lg p-2 text-xs font-display h-32"
              style={{ maxHeight: "200px" }}
            />
          </div>

          <div className="mt-5 w-full flex items-center justify-end">
            <button className="text-xs text-white font-display bg-gray-700 p-2 w-full rounded-lg">
              Book calender
            </button>
          </div>
        </CustomDialogBox2>
      </div>
    </div>
  );
};

export default PrivateVMeetPageTemplate;
