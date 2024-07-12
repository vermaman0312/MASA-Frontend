import { File } from "lucide-react";
import CustomSearchBox from "../../../../components/custom-searchbox/custom-searchbox.component";
import React from "react";
import CustomDropdown from "../../../../components/custom-dropdown/custom-dropdown.component";

type props = {
  tableValue?: string;
  onClickAdmin?: () => void;
  onClickTeacher?: () => void;
  onClickNonTeacher?: () => void;
  onClickStudent?: () => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onCancel?: () => void;
  onClickAddUser?: () => void;
  onClickExport?: () => void;
  length?: number;
  onChangeNumber?: (value: number | string) => void;
  dropValue?: number;
};

const PrivateUserTableButtonPageComponent = ({
  tableValue,
  onClickAdmin,
  onClickTeacher,
  onClickNonTeacher,
  onClickStudent,
  onChange,
  value,
  onCancel,
  onClickAddUser,
  onClickExport,
  length,
  onChangeNumber,
  dropValue,
}: props) => {
  return (
    <div className="w-full flex flex-wrap items-center justify-between gap-4">
      <div className="bg-gray-400 w-[35rem] p-1 flex items-center justify-between rounded-lg">
        <button
          onClick={onClickAdmin}
          className={`${
            tableValue === "admin" && "bg-gray-600 transition-all zoom-in"
          } w-full rounded-lg text-white text-xs font-display p-2`}
        >
          Admins
        </button>
        <button
          onClick={onClickTeacher}
          className={`${
            tableValue === "teacher" && "bg-gray-600 transition-all zoom-in"
          } w-full rounded-lg text-white text-xs font-display p-2`}
        >
          Teachers
        </button>
        <button
          onClick={onClickNonTeacher}
          className={`${
            tableValue === "nonteacher" && "bg-gray-600 transition-all zoom-in"
          } w-full rounded-lg text-white text-xs font-display p-2`}
        >
          Non Teachers
        </button>
        <button
          onClick={onClickStudent}
          className={`${
            tableValue === "student" && "bg-gray-600 transition-all zoom-in"
          } w-full rounded-lg text-white text-xs font-display p-2`}
        >
          Students
        </button>
      </div>
      <div className="w-full md:w-auto">
        <CustomDropdown
          title="Selecte the number"
          data={length}
          onChange={onChangeNumber}
          value={dropValue}
        />
      </div>
      <div className="flex items-center gap-2">
        <div>
          <CustomSearchBox
            type="text"
            placeholder="Search user name..."
            onChange={onChange}
            value={value}
            onCancel={onCancel}
          />
        </div>
        <button
          onClick={onClickAddUser}
          className="w-[8rem] text-xs font-display p-2 text-white bg-gray-900 rounded-lg"
        >
          Add User
        </button>
        <button
          onClick={onClickExport}
          className="text-xs font-display font-medium p-2 text-gray-900 border border-gray-900 rounded-lg flex items-center justify-center gap-2 hover:border-transparent hover:bg-gray-900 hover:text-white hover:transition-all transition-all"
        >
          <File className="w-4 h-4" />
          Export
        </button>
      </div>
    </div>
  );
};

export default PrivateUserTableButtonPageComponent;
