import { X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import CustomFileInputField from "../../../components/custom-file-input-field/custom-file-input-field.component";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import * as XLSX from "xlsx";

interface eventType {
  id: string;
  class: string;
  title: string;
  start: string;
  end: string;
  roomNo: string;
  url?: string | null;
}

const PrivateTimeTablePageLayout = () => {
  const calendarRef = useRef<FullCalendar>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const [events, setEvents] = useState<Array<eventType>>([]);

  const readExcelFile = (file: File) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          const binaryStr = event.target.result;
          const workbook = XLSX.read(binaryStr, { type: "binary" });
          const worksheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[worksheetName];
          const jsonData: Array<eventType> =
            XLSX.utils.sheet_to_json(worksheet);
          const fromExcelDate = (serial: number) => {
            const utc_days = Math.floor(serial - 25569);
            const utc_value = utc_days * 86400;
            const date_info = new Date(utc_value * 1000);
            const fractional_day = serial - Math.floor(serial) + 0.0000001;
            let total_seconds = Math.floor(86400 * fractional_day);
            const seconds = total_seconds % 60;
            total_seconds -= seconds;
            const hours = Math.floor(total_seconds / (60 * 60));
            const minutes = Math.floor(total_seconds / 60) % 60;
            return new Date(
              Date.UTC(
                date_info.getFullYear(),
                date_info.getMonth(),
                date_info.getDate(),
                hours,
                minutes,
                seconds
              )
            ).toISOString();
          };
          jsonData.forEach((item) => {
            if (typeof item.start === "number") {
              item.start = fromExcelDate(item.start);
            }
            if (typeof item.end === "number") {
              item.end = fromExcelDate(item.end);
            }
          });
          resolve(jsonData);
        } else {
          reject(new Error("Event target is null"));
        }
      };
      reader.onerror = (event) => {
        reject(event);
      };
      reader.readAsBinaryString(file);
    });
  };

  const handleChangeExcelData = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target?.files) {
        const file = event.target.files[0];
        if (file) {
          const data = await readExcelFile(file);
          setEvents(data as Array<eventType>);
          setIsOpen(false);
        }
      }
    },
    []
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
          selectable={false}
          selectMirror={false}
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
              <CustomFileInputField
                placeholder="upload excel file"
                onChange={handleChangeExcelData}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivateTimeTablePageLayout;
