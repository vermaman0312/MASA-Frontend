import CustomDropdown from "../../../../components/custom-dropdown/custom-dropdown.component";
import { CustomInputField } from "../../../../components/custom-input-field/custom-input-field.component";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";
import PrivateUserAddFormExcelPageComponent from "./page.adduserexcelform.component";

type props = {
  roleList?: Array<string>;
  departmentList?: Array<string>;
  designationList?: Array<string>;
};

const PrivateUserAddFormPageComponent = ({
  roleList,
  departmentList,
  designationList,
}: props) => {
  return (
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
              <CustomDropdown title="Select your role" list={roleList} />
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
          <PrivateUserAddFormExcelPageComponent />
        </div>
      </div>
    </div>
  );
};

export default PrivateUserAddFormPageComponent;
