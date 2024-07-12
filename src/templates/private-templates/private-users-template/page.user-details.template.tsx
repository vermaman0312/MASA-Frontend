import React, { useCallback, useRef, useState } from "react";
import "../../../css/scroll-container.css";
import { allUserList, userType } from "../../../mock/user-data";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import PrivateUserBarChartPageComponent from "./components/page.barchart.component";
import PrivateUserPieChartPageComponent from "./components/page.piechart.component";
import PrivateUserTableButtonPageComponent from "./components/page.tableoption.component";
import PrivateUserTablePageComponent from "./components/page.table.component";

type props = {
  onClickAddUser?: () => void;
};

const PrivateUserDetailsPageTemplate = ({ onClickAddUser }: props) => {
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
    <div className="w-full h-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="border rounded-lg">
          <PrivateUserBarChartPageComponent userList={allUserList} />
        </div>
        <div className="border rounded-lg">
          <PrivateUserPieChartPageComponent
            userList={allUserList}
            height={300}
          />
        </div>
      </div>
      <div className="w-full mt-5">
        <PrivateUserTableButtonPageComponent
          tableValue={table}
          onClickAdmin={() => handleSelectTable("admin")}
          onClickTeacher={() => handleSelectTable("teacher")}
          onClickNonTeacher={() => handleSelectTable("nonteacher")}
          onClickStudent={() => handleSelectTable("student")}
          length={30}
          dropValue={selectedNumber}
          onChangeNumber={handleSelectNumber}
          onChange={handleChange}
          value={searchValue}
          onCancel={() => setSearchValue("")}
          onClickAddUser={onClickAddUser}
          onClickExport={exportToPDF}
        />
      </div>
      <div
        ref={tableRef}
        className="w-full mt-5 overflow-x-auto scroll-container"
      >
        <PrivateUserTablePageComponent
          items={userList}
          row={selectedNumber}
          role={table}
          tablePagination={true}
        />
      </div>
    </div>
  );
};

export default PrivateUserDetailsPageTemplate;
