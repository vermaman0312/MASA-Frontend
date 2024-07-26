import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import CustomFileInputField from "../../../components/custom-file-input-field/custom-file-input-field.component";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

interface eventType {
  id: string;
  class: string;
  title: string;
  start: string;
  end: string;
  roomNo: string;
  url?: string | null;
}

const timetable = [
  {
    id: "1",
    class: "7th",
    title: "Math",
    start: "2024-07-26T08:00:00",
    end: "2024-07-26T09:00:00",
    teacherName: "Satish Kumar",
    roomNo: "Room-101",
    url: null,
  },
  {
    id: "2",
    class: "7th",
    title: "Science",
    start: "2024-07-26T09:00:00",
    end: "2024-07-26T10:00:00",
    teacherName: "Satish Kumar",
    roomNo: "Lab-11",
    url: null,
  },
  {
    id: "3",
    class: "7th",
    title: "Socail Studies",
    start: "2024-07-26T10:00:00",
    end: "2024-07-26T11:00:00",
    teacherName: "Satish Kumar",
    roomNo: "Room-05",
    url: null,
  },
  {
    id: "4",
    class: "7th",
    title: "Socail Studies",
    start: "2024-07-26T11:00:00",
    end: "2024-07-26T12:00:00",
    teacherName: "Satish Kumar",
    roomNo: "Room-05",
    url: null,
  },
];

const PrivateTimeTablePageLayout = () => {
  const calendarRef = useRef<FullCalendar>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [events, setEvents] = useState<Array<eventType>>(
    timetable as Array<eventType>
  );

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.body.classList.add("no-scroll");
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);
  // useEffect(() => {
  //   if (isOpen) {
  //     document.body.classList.add("no-scroll");
  //   } else {
  //     document.body.classList.remove("no-scroll");
  //   }

  //   // Clean up the class when the component unmounts
  //   return () => {
  //     document.body.classList.remove("no-scroll");
  //   };
  // }, [isOpen]);

  const renderEventContent = (eventInfo: any) => {
    return (
      <div className="w-full flex flex-col items-start justify-between gap-2 hover:bg-none">
        <span className="w-full text-xs font-display truncate flex flex-wrap items-center justify-between">
          <p>{`${eventInfo.event.title}(${new Date(
            eventInfo.event.start
          ).toLocaleTimeString()} - ${new Date(
            eventInfo.event.end
          ).toLocaleTimeString()}) - ${
            eventInfo.event.extendedProps.teacherName
          }`}</p>
          <p>{`${eventInfo.event.extendedProps.roomNo}`}</p>
        </span>
      </div>
    );
  };

  const handleDateClick = (arg: any) => {};

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full flex items-center justify-end">
        <button
          onClick={() => setIsOpen(true)}
          className="text-xs font-display font-medium text-white bg-gray-700 p-2 rounded-lg hover:bg-gray-600"
        >
          Upload new timetable
        </button>
      </div>

      <div className="w-full h-full mt-5">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridDay"
          initialDate={new Date()}
          editable={false}
          events={events as any}
          height="auto"
          eventContent={renderEventContent}
          dateClick={handleDateClick}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          slotMinTime="08:00:00"
          slotMaxTime="17:00:00"
        />
      </div>

      {isOpen && (
        <div
          ref={modalRef}
          className={`w-96 h-5/6 absolute right-2 top-32 bg-white shadow-2xl rounded-lg border flex flex-col items-start justify-start z-50 transition-transform ${
            isOpen && "animate-zoomIn"
          } ${!isOpen && "animate-zoomOut"}`}
        >
          <div className="w-full flex items-center justify-end p-1">
            <X onClick={() => setIsOpen(false)} className="cursor-pointer" />
          </div>
          <div className="w-full h-full p-4">
            <div>
              <CustomLabel className="text-xl font-display font-semibold text-gray-700">
                Upload Excel File
              </CustomLabel>
            </div>
            <div className="mt-3">
              <CustomLabel className="text-xs font-display font-light text-justify">
                To ensure your file is an Excel file and properly formatted,
                first check that it has a .xlsx or .xls extension. Open it with
                Excel or compatible software to confirm it can be read. Ensure
                the first row contains descriptive headers and that data is
                consistent within each column (e.g., dates in date format,
                numbers as numerical values). Avoid empty cells or rows unless
                intentional, and ensure there are no unnecessary duplicates.
                This will ensure your data is valid and well-structured.
              </CustomLabel>
            </div>
            <div className="mt-5">
              <CustomFileInputField placeholder="upload excel file" />
            </div>
            <div className="mt-5 w-full flex items-center justify-end">
              <button className="text-xs font-display font-medium bg-gray-700 p-2 text-white rounded-lg w-32">
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivateTimeTablePageLayout;
