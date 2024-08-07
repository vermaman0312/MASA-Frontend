import { useCallback } from "react";
import CustomMenuDropdown from "../custom-menu-dropdown/custom-menu-dropdown.component";
import {
  AlignJustify,
  AppWindowMac,
  BookOpen,
  CalendarDays,
  ClipboardList,
  Contact,
  GalleryVertical,
  Layers3,
  LayoutDashboard,
  LogOut,
  MessageCircleMore,
  Notebook,
  PersonStanding,
  Radio,
  RectangleEllipsis,
  Settings,
  SmartphoneNfc,
  Timer,
  User,
  Users,
} from "lucide-react";
import { DropdownMenuItem } from "../custom-menu-dropdown/custom-menu-dropdown.ui";
import { useDispatch } from "react-redux";
import { menuAction } from "../../redux/actions/private-actions/private-menuItems.action";
import { useNavigate } from "react-router-dom";
import { authenticatedUserRole } from "../../utils/token/token";

const MobileMenuItems = () => {
  const role = authenticatedUserRole();
  const token = "123";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSelect = useCallback(
    (value: string, url: string) => {
      dispatch(menuAction(value));
      navigate(url);
    },
    [dispatch, navigate]
  );
  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    navigate("/login");
    return;
  }, [navigate]);
  return (
    <div className="flex items-center md:hidden">
      <CustomMenuDropdown
        buttonComponent={<AlignJustify className="text-white" />}
        marginLeft="ml-2"
      >
        <DropdownMenuItem
          onClick={() =>
            handleSelect("dashboard", `/user/auth/dashboard?token=${token}`)
          }
          className="hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <LayoutDashboard className="mr-2 h-4 w-4" />
          <span className="font-display text-xs">Dashboard</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            handleSelect("profile", `/user/auth/profile?token=${token}`)
          }
          className="hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <User className="mr-2 h-4 w-4" />
          <span className="font-display text-xs">Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            handleSelect("calender", `/user/auth/calender?token=${token}`)
          }
          className="hover:bg-gray-100 cursor-pointer"
        >
          <CalendarDays className="mr-2 h-4 w-4" />
          <span className="font-display text-xs">Calender</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            handleSelect("attendance", `/user/auth/attendance?token=${token}`)
          }
          className="hover:bg-gray-100 cursor-pointer"
        >
          <PersonStanding className="mr-2 h-4 w-4" />
          <span className="font-display text-xs">Attendance</span>
        </DropdownMenuItem>
        {role === "admin" && (
          <DropdownMenuItem
            onClick={() =>
              handleSelect("users", `/user/auth/users?token=${token}`)
            }
            className="hover:bg-gray-100 cursor-pointer"
          >
            <Users className="mr-2 h-4 w-4" />
            <span className="font-display text-xs">Users</span>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem
          onClick={() =>
            handleSelect("application", `/user/auth/application?token=${token}`)
          }
          className="hover:bg-gray-100 cursor-pointer"
        >
          <AppWindowMac className="mr-2 h-4 w-4" />
          <span className="font-display text-xs">Application</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            handleSelect("tasksheet", `/user/auth/tasksheet?token=${token}`)
          }
          className="hover:bg-gray-100 cursor-pointer"
        >
          <ClipboardList className="mr-2 h-4 w-4" />
          <span className="font-display text-xs">Tasksheet</span>
        </DropdownMenuItem>
        {role !== "admin" && (
          <DropdownMenuItem
            onClick={() =>
              handleSelect("courses", `/user/auth/courses?token=${token}`)
            }
            className="hover:bg-gray-100 cursor-pointer"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            <span className="font-display text-xs">Courses</span>
          </DropdownMenuItem>
        )}
        {role !== "teacher" && (
          <DropdownMenuItem
            onClick={() =>
              handleSelect(
                "feespayment",
                `/user/auth/fees-payment?token=${token}`
              )
            }
            className="hover:bg-gray-100 cursor-pointer"
          >
            <SmartphoneNfc className="mr-2 h-4 w-4" />
            <span className="font-display text-xs">Fees Payement</span>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem
          onClick={() =>
            handleSelect("onlinexam", `/user/auth/online-exam?token=${token}`)
          }
          className="hover:bg-gray-100 cursor-pointer"
        >
          <Layers3 className="mr-2 h-4 w-4" />
          <span className="font-display text-xs">Online Exam</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            handleSelect("onlinemeet", `/user/auth/online-meet?token=${token}`)
          }
          className="hover:bg-gray-100 cursor-pointer"
        >
          <Radio className="mr-2 h-4 w-4" />
          <span className="font-display text-xs">Online Meet</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            handleSelect("timetable", `/user/auth/time-table?token=${token}`)
          }
          className="hover:bg-gray-100 cursor-pointer"
        >
          <Timer className="mr-2 h-4 w-4" />
          <span className="font-display text-xs">Time Table</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            handleSelect("result", `/user/auth/results?token=${token}`)
          }
          className="hover:bg-gray-100 cursor-pointer"
        >
          <RectangleEllipsis className="mr-2 h-4 w-4" />
          <span className="font-display text-xs">Results</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            handleSelect("message", `/user/auth/message?token=${token}`)
          }
          className="hover:bg-gray-100 cursor-pointer"
        >
          <MessageCircleMore className="mr-2 h-4 w-4" />
          <span className="font-display text-xs">Message</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            handleSelect("contact", `/user/auth/contact-details?token=${token}`)
          }
          className="hover:bg-gray-100 cursor-pointer"
        >
          <Contact className="mr-2 h-4 w-4" />
          <span className="font-display text-xs">Contacts</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            handleSelect("note", `/user/auth/notepad?token=${token}`)
          }
          className="hover:bg-gray-100 cursor-pointer"
        >
          <Notebook className="mr-2 h-4 w-4" />
          <span className="font-display text-xs">Notes</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            handleSelect("vnxt", `/user/auth/v-nxt?token=${token}`)
          }
          className="hover:bg-gray-100 cursor-pointer"
        >
          <GalleryVertical className="mr-2 h-4 w-4" />
          <span className="font-display text-xs">V.NXT</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            handleSelect("setting", `/user/auth/settings?token=${token}`)
          }
          className="hover:bg-gray-100 cursor-pointer"
        >
          <Settings className="mr-2 h-4 w-4" />
          <span className="font-display text-xs">Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handleLogout}
          className="hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <LogOut className="mr-2 h-4 w-4 text-red-500" />
          <span className="font-display text-xs text-red-500">Logout</span>
        </DropdownMenuItem>
      </CustomMenuDropdown>
    </div>
  );
};

export default MobileMenuItems;
