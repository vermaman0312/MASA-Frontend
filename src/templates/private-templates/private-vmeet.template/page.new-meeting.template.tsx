import React, { useState } from "react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import VMeetIllustration from "../../../assets/illustrations/v-meet.illustration";
import { CustomInputField } from "../../../components/custom-input-field/custom-input-field.component";
import CustomDropdown from "../../../components/custom-dropdown/custom-dropdown.component";
import CustomAutoComplete from "../../../components/custom-autocomplete/custom-autocomplete.component";

const PrivateVMeetNewMettingPageTemplate = () => {
  const [isNewMeeting, setIsNewMeeting] = useState<boolean>(false);

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-1">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full md:w-[70%]">
          <VMeetIllustration />
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center md:border-l">
        <div className="border bg-gray-100 p-4 rounded-xl w-full md:w-[50%]">
          <div>
            <CustomLabel className="font-display text-lg font-semibold text-gray-400">
              Meeting Portal
            </CustomLabel>
          </div>
          <div className="flex items-center justify-center mt-3">
            <div className="bg-white p-1 w-full rounded-lg flex">
              <button
                onClick={() => setIsNewMeeting(true)}
                className={`w-full text-xs font-display p-2 ${
                  isNewMeeting && "bg-gray-100"
                } rounded-lg font-normal transition-all`}
              >
                Create new meeting
              </button>
              <button
                onClick={() => setIsNewMeeting(false)}
                className={`w-full text-xs font-display p-2 ${
                  !isNewMeeting && "bg-gray-100"
                } rounded-lg font-normal transition-all`}
              >
                Join meeting
              </button>
            </div>
          </div>

          <div className="mt-3">
            <div>
              <CustomInputField disabled value="Aman Verma" />
            </div>
            <div className="p-[3px]">
              <CustomDropdown
                list={["Public meeting", "Private meeting"]}
                title="Select meeting type"
              />
            </div>
            <div className="p-[3px]">
              <CustomAutoComplete />
            </div>
            <div className="p-[3px]">
              <CustomDropdown
                list={["Meeting for now", "Meeting for later"]}
                title="Select meeting time"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateVMeetNewMettingPageTemplate;
