import {
  PrivateUserAddFormExcelPageTemplate,
  PrivateUserAddFormHeaderPageTemplate,
  PrivateUserAddFormPageTemplate,
  PrivateUserDataVisulizationPageTemplate,
  PrivateUserListDataTablePageTemplate,
  PrivateUserPieChartPageTemplate,
  PrivateUserTableButtonPageTemplate,
} from "../../../templates/private-templates/private-users-template/page.admin.template";
import "../../../css/scroll-container.css";
import { useCallback, useRef, useState } from "react";
import CustomPagination from "../../../components/custom-pagination/custom-pagination.component";
import CustomSearchBox from "../../../components/custom-searchbox/custom-searchbox.component";
import CustomDropdown from "../../../components/custom-dropdown/custom-dropdown.component";
import { allUserList, userType } from "../../../mock/user-data";
import { File } from "lucide-react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

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
          <div className="w-full">
            <PrivateUserAddFormHeaderPageTemplate
              onClickBack={() => setIsOpen(false)}
              onClickForm={() => setIsFillForm(true)}
              onClickExcel={() => setIsFillForm(false)}
              isFillForm={isFillForm}
            />
          </div>
          <div className="w-full h-[20px] flex flex-col items-center justify-start gap-5">
            <div className="w-full h-full">
              {isFillForm ? (
                <PrivateUserAddFormPageTemplate
                  roleList={roleList}
                  departmentList={departmentList}
                  designationList={designationList}
                />
              ) : (
                <PrivateUserAddFormExcelPageTemplate />
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
                    data={allUserList.length}
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
                totalLength={allUserList.length}
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
