import { useCallback } from "react";
import { CustomLabel } from "../custom-label/custom-label.component";
import {
  AppWindowMac,
  BookOpen,
  CalendarDays,
  ClipboardList,
  Contact,
  GalleryVertical,
  Layers3,
  LayoutDashboard,
  MessageCircleMore,
  Notebook,
  PersonStanding,
  Radio,
  RectangleEllipsis,
  Settings,
  SmartphoneNfc,
  Timer,
  Users,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/redux-index";
import { menuAction } from "../../redux/actions/private-actions/private-menuItems.action";
import "../../css/scroll-container.css";
import { authenticatedUserRole } from "../../utils/token/token";
import { useNavigate, useLocation } from "react-router-dom";

const DesktopMenuItems = () => {
  const location = useLocation();
  const url = `${location.pathname}${location.search}${location.hash}`;
  const role = authenticatedUserRole();
  const token = "123";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const menuItem = useSelector((state: RootState) => state.menuItem.menuItem);
  const handleSelect = useCallback(
    (value: string, url: string) => {
      dispatch(menuAction(value));
      navigate(url);
    },
    [dispatch, navigate]
  );
  return (
    <div className="w-full h-full p-2 flex flex-col gap-1 scroll-container">
      <div
        onClick={() =>
          handleSelect("dashboard", `/user/auth/dashboard?token=${token}`)
        }
        className={`w-full flex items-center justify-start gap-4 cursor-pointer ${
          url === `/user/auth/dashboard?token=${token}` && "bg-gray-700"
        } hover:bg-gray-700 p-2 rounded-lg hover:transition-all`}
      >
        <LayoutDashboard className="text-white w-5 h-5" />
        <CustomLabel className="text-white font-display font-light text-md cursor-pointer">
          Dashboard
        </CustomLabel>
      </div>
      <div
        onClick={() =>
          handleSelect("calender", `/user/auth/calender?token=${token}`)
        }
        className={`w-full flex items-center justify-start gap-4 cursor-pointer ${
          url === `/user/auth/calender?token=${token}` && "bg-gray-700"
        } hover:bg-gray-700 p-2 rounded-lg hover:transition-all`}
      >
        <CalendarDays className="text-white w-5 h-5" />
        <CustomLabel className="text-white font-display font-light text-md cursor-pointer">
          Calender
        </CustomLabel>
      </div>
      <div
        onClick={() =>
          handleSelect("attendance", `/user/auth/attendance?token=${token}`)
        }
        className={`w-full flex items-center justify-start gap-4 cursor-pointer ${
          url === `/user/auth/attendance?token=${token}` && "bg-gray-700"
        } hover:bg-gray-700 p-2 rounded-lg hover:transition-all`}
      >
        <PersonStanding className="text-white w-5 h-5" />
        <CustomLabel className="text-white font-display font-light text-md cursor-pointer">
          Attendance
        </CustomLabel>
      </div>
      {role === "admin" && (
        <div
          onClick={() =>
            handleSelect("users", `/user/auth/users?token=${token}`)
          }
          className={`w-full flex items-center justify-start gap-4 cursor-pointer ${
            url === `/user/auth/users?token=${token}` && "bg-gray-700"
          } hover:bg-gray-700 p-2 rounded-lg hover:transition-all`}
        >
          <Users className="text-white w-5 h-5" />
          <CustomLabel className="text-white font-display font-light text-md cursor-pointer">
            Users
          </CustomLabel>
        </div>
      )}
      <div
        onClick={() =>
          handleSelect("application", `/user/auth/application?token=${token}`)
        }
        className={`w-full flex items-center justify-start gap-4 cursor-pointer ${
          url === `/user/auth/application?token=${token}` && "bg-gray-700"
        } hover:bg-gray-700 p-2 rounded-lg hover:transition-all`}
      >
        <AppWindowMac className="text-white w-5 h-5" />
        <CustomLabel className="text-white font-display font-light text-md cursor-pointer">
          Application
        </CustomLabel>
      </div>
      <div
        onClick={() =>
          handleSelect("tasksheet", `/user/auth/tasksheet?token=${token}`)
        }
        className={`w-full flex items-center justify-start gap-4 cursor-pointer ${
          url === `/user/auth/tasksheet?token=${token}` && "bg-gray-700"
        } hover:bg-gray-700 p-2 rounded-lg hover:transition-all`}
      >
        <ClipboardList className="text-white w-5 h-5" />
        <CustomLabel className="text-white font-display font-light text-md cursor-pointer">
          Tasksheet
        </CustomLabel>
      </div>
      {role !== "admin" && (
        <div
          onClick={() =>
            handleSelect("courses", `/user/auth/courses?token=${token}`)
          }
          className={`w-full flex items-center justify-start gap-4 cursor-pointer ${
            url === `/user/auth/courses?token=${token}` && "bg-gray-700"
          } hover:bg-gray-700 p-2 rounded-lg hover:transition-all`}
        >
          <BookOpen className="text-white w-5 h-5" />
          <CustomLabel className="text-white font-display font-light text-md cursor-pointer">
            Courses
          </CustomLabel>
        </div>
      )}
      {role !== "teacher" && (
        <div
          onClick={() =>
            handleSelect(
              "feespayment",
              `/user/auth/fees-payment?token=${token}`
            )
          }
          className={`w-full flex items-center justify-start gap-4 cursor-pointer ${
            url === `/user/auth/fees-payment?token=${token}` && "bg-gray-700"
          } hover:bg-gray-700 p-2 rounded-lg hover:transition-all`}
        >
          <SmartphoneNfc className="text-white w-5 h-5" />
          <CustomLabel className="text-white font-display font-light text-md cursor-pointer">
            Fees payement
          </CustomLabel>
        </div>
      )}
      <div
        onClick={() =>
          handleSelect("onlinexam", `/user/auth/online-exam?token=${token}`)
        }
        className={`w-full flex items-center justify-start gap-4 cursor-pointer ${
          url === `/user/auth/online-exam?token=${token}` && "bg-gray-700"
        } hover:bg-gray-700 p-2 rounded-lg hover:transition-all`}
      >
        <Layers3 className="text-white w-5 h-5" />
        <CustomLabel className="text-white font-display font-light text-md cursor-pointer">
          Online Exam
        </CustomLabel>
      </div>
      <div
        onClick={() =>
          handleSelect("onlinemeet", `/user/auth/online-meet?token=${token}`)
        }
        className={`w-full flex items-center justify-start gap-4 cursor-pointer ${
          url === `/user/auth/online-meet?token=${token}` && "bg-gray-700"
        } hover:bg-gray-700 p-2 rounded-lg hover:transition-all`}
      >
        <Radio className="text-white w-5 h-5" />
        <CustomLabel className="text-white font-display font-light text-md cursor-pointer">
          Online Meet
        </CustomLabel>
      </div>
      <div
        onClick={() =>
          handleSelect("timetable", `/user/auth/time-table?token=${token}`)
        }
        className={`w-full flex items-center justify-start gap-4 cursor-pointer ${
          url === `/user/auth/time-table?token=${token}` && "bg-gray-700"
        } hover:bg-gray-700 p-2 rounded-lg hover:transition-all`}
      >
        <Timer className="text-white w-5 h-5" />
        <CustomLabel className="text-white font-display font-light text-md cursor-pointer">
          Time Table
        </CustomLabel>
      </div>
      <div
        onClick={() =>
          handleSelect("result", `/user/auth/results?token=${token}`)
        }
        className={`w-full flex items-center justify-start gap-4 cursor-pointer ${
          url === `/user/auth/results?token=${token}` && "bg-gray-700"
        } hover:bg-gray-700 p-2 rounded-lg hover:transition-all`}
      >
        <RectangleEllipsis className="text-white w-5 h-5" />
        <CustomLabel className="text-white font-display font-light text-md cursor-pointer">
          Results
        </CustomLabel>
      </div>
      <div
        onClick={() =>
          handleSelect("message", `/user/auth/message?token=${token}`)
        }
        className={`w-full flex items-center justify-start gap-4 cursor-pointer ${
          url === `/user/auth/message?token=${token}` && "bg-gray-700"
        } hover:bg-gray-700 p-2 rounded-lg hover:transition-all`}
      >
        <MessageCircleMore className="text-white w-5 h-5" />
        <CustomLabel className="text-white font-display font-light text-md cursor-pointer">
          Message
        </CustomLabel>
      </div>
      <div
        onClick={() =>
          handleSelect("contact", `/user/auth/contact-details?token=${token}`)
        }
        className={`w-full flex items-center justify-start gap-4 cursor-pointer ${
          url === `/user/auth/contact-details?token=${token}` && "bg-gray-700"
        } hover:bg-gray-700 p-2 rounded-lg hover:transition-all`}
      >
        <Contact className="text-white w-5 h-5" />
        <CustomLabel className="text-white font-display font-light text-md cursor-pointer">
          Contacts
        </CustomLabel>
      </div>
      <div
        onClick={() =>
          handleSelect("note", `/user/auth/notepad?token=${token}`)
        }
        className={`w-full flex items-center justify-start gap-4 cursor-pointer ${
          url === `/user/auth/notepad?token=${token}` && "bg-gray-700"
        } hover:bg-gray-700 p-2 rounded-lg hover:transition-all`}
      >
        <Notebook className="text-white w-5 h-5" />
        <CustomLabel className="text-white font-display font-light text-md cursor-pointer">
          Notes
        </CustomLabel>
      </div>
      <div
        onClick={() => handleSelect("vnxt", `/user/auth/v-nxt?token=${token}`)}
        className={`w-full flex items-center justify-start gap-4 cursor-pointer ${
          url === `/user/auth/v-nxt?token=${token}` && "bg-gray-700"
        } hover:bg-gray-700 p-2 rounded-lg hover:transition-all`}
      >
        <GalleryVertical className="text-white w-5 h-5" />
        <CustomLabel className="text-white font-display font-light text-md cursor-pointer">
          V.NXT
        </CustomLabel>
      </div>
      <div
        onClick={() =>
          handleSelect("setting", `/user/auth/settings?token=${token}`)
        }
        className={`w-full flex items-center justify-start gap-4 cursor-pointer ${
          url === `/user/auth/settings?token=${token}` && "bg-gray-700"
        } hover:bg-gray-700 p-2 rounded-lg hover:transition-all`}
      >
        <Settings className="text-white w-5 h-5" />
        <CustomLabel className="text-white font-display font-light text-md cursor-pointer">
          Settings
        </CustomLabel>
      </div>
    </div>
  );
};

export default DesktopMenuItems;
