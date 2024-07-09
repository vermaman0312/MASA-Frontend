import {
  CalendarSearch,
  ChevronRight,
  CircleFadingPlus,
  Dock,
  FilePenLine,
  FileSignature,
  OctagonAlert,
  ReceiptText,
  School,
  SquareUser,
  SquareX,
  Trash2,
  View,
} from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import { useCallback, useState } from "react";
import "../../../css/scroll-container.css";
import CustomSearchBox from "../../../components/custom-searchbox/custom-searchbox.component";
import CustomPagination from "../../../components/custom-pagination/custom-pagination.component";

const PrivateApplicationPageLayout = () => {
  const [applicationMenu, setApplicationMenu] = useState<string>("myApproval");
  const handleSelectApplicationMenu = useCallback(
    (value: string) => {
      setApplicationMenu(value);
    },
    [setApplicationMenu]
  );
  return (
    <div className="w-full h-full flex items-start justify-between gap-1 scroll-container">
      <div className="w-[20rem] h-[20px] hidden md:flex flex-col items-start justify-start gap-1 p-6">
        <div
          onClick={() => handleSelectApplicationMenu("myApproval")}
          className={`flex items-center justify-between gap-2 w-full p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-all hover:zoom-in`}
        >
          <div className="flex items-center gap-2">
            <FileSignature className="w-5 h-5 text-gray-900" />
            <CustomLabel className="font-display text-gray-900 cursor-pointer whitespace-nowrap">
              My approval
            </CustomLabel>
          </div>
          {applicationMenu === "myApproval" && (
            <ChevronRight className="w-5 h-5 text-gray-900" />
          )}
        </div>
        <div
          onClick={() => handleSelectApplicationMenu("writeApplication")}
          className={`flex items-center justify-between gap-2 w-full p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-all hover:zoom-in`}
        >
          <div className="flex items-center gap-2">
            <Dock className="w-5 h-5 text-gray-900" />
            <CustomLabel className="font-display text-gray-900 cursor-pointer whitespace-nowrap">
              Write application
            </CustomLabel>
          </div>
          {applicationMenu === "writeApplication" && (
            <ChevronRight className="w-5 h-5 text-gray-900" />
          )}
        </div>
        <div
          onClick={() => handleSelectApplicationMenu("applyLeave")}
          className={`flex items-center justify-between gap-2 w-full p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-all hover:zoom-in`}
        >
          <div className="flex items-center gap-2">
            <ReceiptText className="w-5 h-5 text-gray-900" />
            <CustomLabel className="font-display text-gray-900 cursor-pointer whitespace-nowrap">
              Apply leave
            </CustomLabel>
          </div>
          {applicationMenu === "applyLeave" && (
            <ChevronRight className="w-5 h-5 text-gray-900" />
          )}
        </div>
        <div
          onClick={() => handleSelectApplicationMenu("forgotIdCard")}
          className={`flex items-center justify-between gap-2 w-full p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-all hover:zoom-in`}
        >
          <div className="flex items-center gap-2">
            <SquareUser className="w-5 h-5 text-gray-900" />
            <CustomLabel className="font-display text-gray-900 cursor-pointer whitespace-nowrap">
              Forgot ID card
            </CustomLabel>
          </div>
          {applicationMenu === "forgotIdCard" && (
            <ChevronRight className="w-5 h-5 text-gray-900" />
          )}
        </div>
        <div
          onClick={() => handleSelectApplicationMenu("workFromHome")}
          className={`flex items-center justify-between gap-2 w-full p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-all hover:zoom-in`}
        >
          <div className="flex items-center gap-2">
            <School className="w-5 h-5 text-gray-900" />
            <CustomLabel className="font-display text-gray-900 cursor-pointer whitespace-nowrap">
              Work from home
            </CustomLabel>
          </div>
          {applicationMenu === "workFromHome" && (
            <ChevronRight className="w-5 h-5 text-gray-900" />
          )}
        </div>
        <div
          onClick={() => handleSelectApplicationMenu("changeTimeTable")}
          className={`flex items-center justify-between gap-2 w-full p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-all hover:zoom-in`}
        >
          <div className="flex items-center gap-2">
            <CalendarSearch className="w-5 h-5 text-gray-900" />
            <CustomLabel className="font-display text-gray-900 cursor-pointer whitespace-nowrap">
              Change time table
            </CustomLabel>
          </div>
          {applicationMenu === "changeTimeTable" && (
            <ChevronRight className="w-5 h-5 text-gray-900" />
          )}
        </div>
        <div
          onClick={() => handleSelectApplicationMenu("complaint")}
          className={`flex items-center justify-between gap-2 w-full p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-all hover:zoom-in`}
        >
          <div className="flex items-center gap-2">
            <OctagonAlert className="w-5 h-5 text-gray-900" />
            <CustomLabel className="font-display text-gray-900 cursor-pointer whitespace-nowrap">
              Complaint
            </CustomLabel>
          </div>
          {applicationMenu === "complaint" && (
            <ChevronRight className="w-5 h-5 text-gray-900" />
          )}
        </div>
        <div
          onClick={() => handleSelectApplicationMenu("registerQueries")}
          className={`flex items-center justify-between gap-2 w-full p-2 rounded-lg cursor-pointer hover:bg-gray-200 transition-all hover:zoom-in`}
        >
          <div className="flex items-center gap-2">
            <CircleFadingPlus className="w-5 h-5 text-gray-900" />
            <CustomLabel className="font-display text-gray-900 cursor-pointer whitespace-nowrap">
              Register queries
            </CustomLabel>
          </div>
          {applicationMenu === "registerQueries" && (
            <ChevronRight className="w-5 h-5 text-gray-900" />
          )}
        </div>
      </div>

      <div className="w-full h-full flex flex-col items-center justify-start gap-2 border-l">
        <div className="border w-full md:hidden p-2 rounded-lg flex items-center justify-start gap-2 scroll-container">
          <CustomLabel
            onClick={() => handleSelectApplicationMenu("myApproval")}
            className={`cursor-pointer font-display text-xs whitespace-nowrap p-2 rounded-lg ${
              applicationMenu === "myApproval"
                ? "bg-gray-700 text-white"
                : "bg-gray-200"
            }`}
          >
            My approval
          </CustomLabel>
          <CustomLabel
            onClick={() => handleSelectApplicationMenu("writeApplication")}
            className={`cursor-pointer font-display text-xs whitespace-nowrap p-2 rounded-lg ${
              applicationMenu === "writeApplication"
                ? "bg-gray-700 text-white"
                : "bg-gray-200"
            }`}
          >
            Write application
          </CustomLabel>
          <CustomLabel
            onClick={() => handleSelectApplicationMenu("applyLeave")}
            className={`cursor-pointer font-display text-xs whitespace-nowrap p-2 rounded-lg ${
              applicationMenu === "applyLeave"
                ? "bg-gray-700 text-white"
                : "bg-gray-200"
            }`}
          >
            Apply leave
          </CustomLabel>
          <CustomLabel
            onClick={() => handleSelectApplicationMenu("forgotIdCard")}
            className={`cursor-pointer font-display text-xs whitespace-nowrap p-2 rounded-lg ${
              applicationMenu === "forgotIdCard"
                ? "bg-gray-700 text-white"
                : "bg-gray-200"
            }`}
          >
            Forgot ID card
          </CustomLabel>
          <CustomLabel
            onClick={() => handleSelectApplicationMenu("workFromHome")}
            className={`cursor-pointer font-display text-xs whitespace-nowrap p-2 rounded-lg ${
              applicationMenu === "workFromHome"
                ? "bg-gray-700 text-white"
                : "bg-gray-200"
            }`}
          >
            Work from home
          </CustomLabel>
          <CustomLabel
            onClick={() => handleSelectApplicationMenu("changeTimeTable")}
            className={`cursor-pointer font-display text-xs whitespace-nowrap p-2 rounded-lg ${
              applicationMenu === "changeTimeTable"
                ? "bg-gray-700 text-white"
                : "bg-gray-200"
            }`}
          >
            Change time table
          </CustomLabel>
          <CustomLabel
            onClick={() => handleSelectApplicationMenu("complaint")}
            className={`cursor-pointer font-display text-xs whitespace-nowrap p-2 rounded-lg ${
              applicationMenu === "complaint"
                ? "bg-gray-700 text-white"
                : "bg-gray-200"
            }`}
          >
            Complaint
          </CustomLabel>
          <CustomLabel
            onClick={() => handleSelectApplicationMenu("registerQueries")}
            className={`cursor-pointer font-display text-xs whitespace-nowrap p-2 rounded-lg ${
              applicationMenu === "registerQueries"
                ? "bg-gray-700 text-white"
                : "bg-gray-200"
            }`}
          >
            Register queries
          </CustomLabel>
        </div>

        <div className="w-full h-full flex flex-col items-center justify-start scroll-container">
          <div className="w-full flex flex-col items-end justify-end">
            <CustomLabel className="font-display text-lg font-medium text-gray-900">
              Aman Verma
            </CustomLabel>
            <CustomLabel className="font-display text-sm font-medium text-gray-900">
              20SOECE11091
            </CustomLabel>
          </div>

          <div className="w-full h-full mt-5">
            <div className="flex items-center justify-end">
              <div>
                <CustomSearchBox />
              </div>
            </div>

            <div className="mt-5">
              <table className="w-full leading-normal">
                <thead>
                  <tr>
                    <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      S.N
                    </th>
                    <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      From
                    </th>
                    <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      To
                    </th>
                    <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Number of days
                    </th>
                    <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Approved
                    </th>
                    <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      Reason
                    </th>
                    <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      More
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
                      <span className="relative inline-block font-semibold text-green-900 leading-tight">
                        100
                      </span>
                    </td>
                    <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
                      <span className="relative inline-block text-green-900 leading-tight">
                        03-12-1998
                      </span>
                    </td>
                    <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
                      <span className="relative inline-block font-semibold text-green-900 leading-tight">
                        <span aria-hidden className="absolute inset-0"></span>
                        <span className="relative">Leave</span>
                      </span>
                    </td>
                    <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
                      <span className="relative inline-block text-green-900 leading-tight">
                        <span aria-hidden className="absolute inset-0"></span>
                        <span className="relative">12-03-1498</span>
                      </span>
                    </td>
                    <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
                      <span className="relative inline-block text-green-900 leading-tight">
                        <span aria-hidden className="absolute inset-0"></span>
                        <span className="relative">12-03-1498</span>
                      </span>
                    </td>
                    <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
                      <span className="relative inline-block text-green-900 leading-tight">
                        <span aria-hidden className="absolute inset-0"></span>
                        <span className="relative">170</span>
                      </span>
                    </td>
                    <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
                      <span className="relative inline-block font-semibold text-green-900 leading-tight">
                        <span aria-hidden className="absolute inset-0"></span>
                        <span className="relative">Approved</span>
                      </span>
                    </td>
                    <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
                      <span className="relative inline-block font-semibold text-green-900 leading-tight">
                        <span aria-hidden className="absolute inset-0"></span>
                        <span className="relative">Approved</span>
                      </span>
                    </td>
                    <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
                      <span className="w-32 relative inline-block text-green-900 leading-tight">
                        <span aria-hidden className="absolute inset-0"></span>
                        <span className="relative word-break">
                          This is urgent work, so I can take a leave for 173
                          days
                        </span>
                      </span>
                    </td>
                    <td className="border-b border-gray-200 bg-white text-xs font-display p-5">
                      <div className="w-full h-full grid grid-cols-2 gap-2">
                        <p className="bg-green-200 font-display p-1.5 flex items-center justify-center rounded-lg cursor-pointer">
                          <FilePenLine className="w-4 h-4" />
                        </p>
                        <p className="bg-red-200 font-display p-1.5 flex items-center justify-center rounded-lg cursor-pointer">
                          <Trash2 className="w-4 h-4" />
                        </p>
                        <p className="bg-yellow-200 font-display p-1.5 flex items-center justify-center rounded-lg cursor-pointer">
                          <SquareX className="w-4 h-4" />
                        </p>
                        <p className="bg-blue-200 font-display p-1.5 flex items-center justify-center rounded-lg cursor-pointer">
                          <View className="w-4 h-4" />
                        </p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <CustomPagination
                totalLength={100}
                minimumLength={1}
                maximumLength={10}
                onClickPrev={() => alert("prev")}
                onClickNext={() => alert("Next")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateApplicationPageLayout;
