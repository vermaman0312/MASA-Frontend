import {
  PrivateUserDataVisulizationPageTemplate,
  PrivateUserListDataTablePageTemplate,
  PrivateUserPieChartPageTemplate,
  PrivateUserTableButtonPageTemplate,
} from "../../../templates/private-templates/private-users-template/page.admin.template";
import { contactUserList } from "../private-contacts-layout/mock";
import "../../../css/scroll-container.css";
import { useCallback, useRef, useState } from "react";
import CustomPagination from "../../../components/custom-pagination/custom-pagination.component";
import CustomSearchBox from "../../../components/custom-searchbox/custom-searchbox.component";
import CustomDropdown from "../../../components/custom-dropdown/custom-dropdown.component";
import { allUserList, userType } from "../../../mock/user-data";
import { ArrowLeft, File } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import { CustomInputField } from "../../../components/custom-input-field/custom-input-field.component";
import CustomFileInputField from "../../../components/custom-file-input-field/custom-file-input-field.component";

const roleList = ["Teacher", "Admin", "Non Teacher", "Student"];
const departmentList = [
  "HR Department",
  "Account Section Department",
  "IT Department",
  "Financial Department",
  "Operations Department",
  "University",
  "B.Tech Computer Engineering Department",
  "B.Tech Mechanical Engineering Department",
  "B.Tech Information Technology Department",
  "B.Tech Civil Engineering Department",
  "B.Tech Electronics and Communication Department",
  "B.Tech Electrical Department",
  "Diploma Computer Engineering Department",
  "Diploma Mechanical Engineering Department",
  "Diploma Information Technology Department",
  "Diploma Civil Engineering Department",
  "Diploma Electronics and Communication Department",
  "Diploma Electrical Department",
];
const designationList = [
  "Head of Department",
  "Administrative Officer",
  "Administrative Manager",
  "CHRO",
  "Finance Manager",
  "Operations Manager",
  "Proffessor",
  "Assistant Professor",
  "Lecturer",
  "Assistant Lecturer",
  "Instructor",
  "Guest Lecturer",
  "Senior Lecturer",
  "IT Head",
  "Lab Assistant",
  "Library Assistant",
  "Technician",
  "Lab Technician",
];

const PrivateUsersPageLayout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFillForm, setIsFillForm] = useState<boolean>(true);
  const [userList, setUserList] = useState<Array<userType>>(allUserList);
  const [searchValue, setSearchValue] = useState<string>("");
  const [selectedNumber, setSelectedNumber] = useState<number>(5);
  const [table, setTable] = useState<string>("admin");
  const handleSelectTable = useCallback(
    (value: string) => {
      setTable(value);
    },
    [setTable]
  );
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);
    },
    [setSearchValue]
  );
  const handleSelectNumber = useCallback(
    (value: string | number) => {
      setSelectedNumber(Number(value));
    },
    [setSelectedNumber]
  );
  const tableRef = useRef<HTMLDivElement>(null);

  const exportToPDF = async () => {
    if (tableRef.current) {
      const canvas = await html2canvas(tableRef.current);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("users_list.pdf");
    }
  };
  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-2 scroll-container">
      {isOpen ? (
        <div className="h-full w-full flex flex-col items-center justify-start gap-2">
          <div className="w-full flex items-center justify-between">
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-[2rem] p-1 rounded-lg bg-gray-900"
            >
              <ArrowLeft className="text-white" />
            </button>
            <div className="bg-gray-300 md:hidden w-64 md:w-[25rem] flex items-center justify-between p-1 rounded-lg">
              <button
                onClick={() => setIsFillForm(true)}
                className={`text-sm font-display w-full ${
                  isFillForm
                    ? "bg-gray-700 text-white"
                    : "bg-transparent text-gray-900"
                } p-2 rounded-lg font-medium slide-in-from-right transition-all`}
              >
                Form Details
              </button>
              <button
                onClick={() => setIsFillForm(false)}
                className={`text-sm font-display w-full ${
                  !isFillForm
                    ? "bg-gray-700 text-white"
                    : "bg-transparent text-gray-900"
                } p-2 rounded-lg font-medium slide-in-from-right transition-all`}
              >
                Form Excel
              </button>
            </div>
          </div>
          <div className="w-full h-[20px] flex flex-col items-center justify-start gap-5">
            <div className="w-full h-full">
              {isFillForm ? (
                <div className="w-full h-full grid grid-cols-1 md:grid-cols-2">
                  <div className="w-full h-full flex flex-col p-5">
                    <div className="w-full">
                      <CustomLabel className="text-xl font-display text-gray-900">
                        Form Information
                      </CustomLabel>
                    </div>
                    <div className="mt-5 w-full h-full">
                      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5">
                        <div className="w-full">
                          <CustomLabel className="text-xs font-display text-gray-900">
                            First Name:
                          </CustomLabel>
                          <CustomInputField
                            type="text"
                            className="focus:outline-none focus:border-none active:border-none active:outline-none font-display text-sm"
                          />
                        </div>
                        <div className="w-full">
                          <CustomLabel className="text-xs font-display text-gray-900">
                            Last Name:
                          </CustomLabel>
                          <CustomInputField
                            type="text"
                            className="focus:outline-none focus:border-none active:border-none active:outline-none"
                          />
                        </div>
                      </div>
                      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 mt-3">
                        <div className="w-full">
                          <CustomLabel className="text-xs font-display text-gray-900">
                            Email Address:
                          </CustomLabel>
                          <CustomInputField
                            type="email"
                            className="focus:outline-none focus:border-none active:border-none active:outline-none"
                          />
                        </div>
                        <div className="w-full">
                          <CustomLabel className="text-xs font-display text-gray-900">
                            Phone Number:
                          </CustomLabel>
                          <CustomInputField
                            type="tel"
                            className="focus:outline-none focus:border-none active:border-none active:outline-none"
                          />
                        </div>
                      </div>
                      <div className="w-full mt-3">
                        <div className="w-full">
                          <CustomLabel className="text-xs font-display text-gray-900">
                            Choose Image:
                          </CustomLabel>
                          <CustomInputField
                            type="file"
                            className="w-full file-input font-display block text-sm text-gray-900 border-2 border-gray-200 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="w-full grid grid-cols-1 gap-2 md:gap-5 mt-3">
                        <div className="w-full">
                          <CustomLabel className="text-xs font-display text-gray-900">
                            Select Role:
                          </CustomLabel>
                          <CustomDropdown
                            title="Select your role"
                            list={roleList}
                          />
                        </div>
                      </div>
                      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 mt-4">
                        <div className="w-full">
                          <CustomLabel className="text-xs font-display text-gray-900">
                            Department:
                          </CustomLabel>
                          <CustomDropdown
                            title="Select your department"
                            list={departmentList}
                          />
                        </div>
                        <div className="w-full">
                          <CustomLabel className="text-xs font-display text-gray-900">
                            Designation:
                          </CustomLabel>
                          <CustomDropdown
                            title="Select your designation"
                            list={designationList}
                          />
                        </div>
                      </div>
                      <div className="w-full mt-5">
                        <CustomLabel className="text-xs font-display text-gray-900">
                          Your Employee ID:
                        </CustomLabel>
                        <CustomInputField
                          disabled={true}
                          type="text"
                          value={"ABC123"}
                          className="focus:outline-none focus:border-none active:border-none active:outline-none font-display text-sm"
                        />
                      </div>
                      <div className="w-full mt-5">
                        <button className="w-full md:w-32 text-md font-display text-white bg-gray-900 p-2 rounded-lg">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="w-full hidden md:flex flex-col p-5">
                    <div className="w-full">
                      <CustomLabel className="text-xl font-display text-gray-900">
                        Excel Information
                      </CustomLabel>
                    </div>
                    <div className="mt-5 w-full h-full">
                      <div>
                        <CustomFileInputField />
                      </div>
                      <div className="w-full mt-5">
                        <button className="w-full md:w-32 text-md font-display text-white bg-gray-900 p-2 rounded-lg">
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full">
                  <div className="w-full h-full flex flex-col p-5">
                    <div className="w-full">
                      <CustomLabel className="text-xl font-display text-gray-900">
                        Excel Information
                      </CustomLabel>
                    </div>
                    <div className="mt-5 w-full h-full">
                      <div>
                        <CustomFileInputField />
                      </div>
                      <div className="w-full mt-5">
                        <button className="w-full md:w-32 text-md font-display text-white bg-gray-900 p-2 rounded-lg">
                          Upload
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-start justify-start gap-2 scroll-container">
          <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-2">
            <div className="border-2 w-full h-full rounded-lg">
              <PrivateUserDataVisulizationPageTemplate />
            </div>
            <div className="border-2 w-full h-full rounded-lg">
              <PrivateUserPieChartPageTemplate
                userList={allUserList}
                height={300}
              />
            </div>
          </div>
          <div className="w-full mt-5 h-[50px] grid">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <div>
                  <PrivateUserTableButtonPageTemplate
                    tableValue={table}
                    onClickAdmin={() => handleSelectTable("admin")}
                    onClickTeacher={() => handleSelectTable("teacher")}
                    onClickNonTeacher={() => handleSelectTable("nonteacher")}
                    onClickStudent={() => handleSelectTable("student")}
                  />
                </div>
                <div>
                  <CustomDropdown
                    title="Selecte the number"
                    width="w-[5rem]"
                    data={contactUserList.length}
                    onChange={handleSelectNumber}
                    value={selectedNumber}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <CustomSearchBox
                    type="text"
                    placeholder="Search user name..."
                    onChange={handleChange}
                    value={searchValue}
                    onCancel={() => setSearchValue("")}
                  />
                </div>
                <button
                  onClick={() => setIsOpen(true)}
                  className="w-[8rem] text-xs font-display p-2 text-white bg-gray-900 rounded-lg"
                >
                  Add User
                </button>
                <button
                  onClick={exportToPDF}
                  className="text-xs font-display font-medium p-2 text-gray-900 border border-gray-900 rounded-lg flex items-center justify-center gap-2 hover:border-transparent hover:bg-gray-900 hover:text-white hover:transition-all transition-all"
                >
                  <File className="w-4 h-4" />
                  Export
                </button>
              </div>
            </div>
            <div ref={tableRef}>
              <PrivateUserListDataTablePageTemplate
                tableRole={table}
                data={userList}
                row={selectedNumber}
              />
            </div>
            <div>
              <CustomPagination
                totalLength={contactUserList.length}
                minimumLength={1}
                maximumLength={selectedNumber}
                onClickPrev={() => alert("prev")}
                onClickNext={() => alert("Next")}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrivateUsersPageLayout;
