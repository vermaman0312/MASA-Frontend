import { Check, ChevronLeft, X } from "lucide-react";
import React, { useState } from "react";
import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";
import { CustomInputField } from "../../../../../components/custom-input-field/custom-input-field.component";
import { Textarea } from "../../../../../components/custom-textarea/custom-textarea.component";
import CustomCheckBox from "../../../../../components/custom-checkbox/custom-checkbox.component";

type props = {
  onClickBack: () => void;
};

interface pollingType {
  pollingId: string;
  pollingTitle: string;
  pollingDescription: string;
  pollingOptions: Array<string>;
  pollingAnswer: string;
  status: boolean;
}

const PrivateVMeetOnlineAppPollingPageComponent = ({ onClickBack }: props) => {
  const [isPollingCreate, setIsPollingCreate] = useState<boolean>(false);
  const [poll, setPoll] = useState<pollingType>({
    pollingId: "",
    pollingTitle: "",
    pollingDescription: "",
    pollingOptions: [
      "Aman Verma line-clamp-3",
      "Aman Verma",
      "Aman Verma",
    ],
    pollingAnswer: "",
    status: false,
  });

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="flex items-center justify-start gap-2 p-4">
        <ChevronLeft
          onClick={onClickBack}
          className="w-5 h-5 text-[#6B7280] cursor-pointer"
        />
        <CustomLabel className="text-lg text-[#6B7280] font-display">
          Polling
        </CustomLabel>
      </div>

      <div
        className="w-full scroll-container"
        style={{
          height: "calc(100vh - 140px)",
          overflowY: "auto",
          boxSizing: "border-box",
        }}
      >
        <div className="flex flex-col items-center justify-center gap-2 p-4">
          <CustomLabel className="text-2xl text-[#D1D5DB] font-display font-normal text-center">
            Building your immersive portfolio using virtual worlds
          </CustomLabel>
          <CustomLabel className="text-xs text-[#6B7280] font-display font-normal text-center">
            ​In this interactive event, we will talk about how virtual worlds
            can be the next medium to deliver immersive portfolio for designers,
            photographer, & story tellers.
          </CustomLabel>
        </div>
        <div className="w-full flex items-center justify-center gap-2">
          {!isPollingCreate && (
            <button
              onClick={() => setIsPollingCreate(true)}
              className="w-32 text-xs font-display text-[#D1D5DB] bg-[#1c73ff] p-2 rounded-lg"
            >
              Create Poll
            </button>
          )}
          {isPollingCreate && (
            <button
              onClick={() => setIsPollingCreate(false)}
              className="w-32 text-xs font-display text-[#D1D5DB] bg-[#1c73ff] p-2 rounded-lg"
            >
              View Poll
            </button>
          )}
        </div>

        <div className="w-full flex items-center justify-center gap-2">
          {isPollingCreate ? (
            <div className="w-full flex flex-col items-center justify-center gap-2 p-4">
              <div className="w-full">
                <CustomLabel className="text-sm font-display text-[#6B7280] font-normal">
                  Poll title:
                </CustomLabel>
                <CustomInputField
                  placeholder="Title here..."
                  className="bg-transparent border-[#374151] border-opacity-50 text-[#D1D5DB] font-display placeholder:text-gray-700"
                />
              </div>
              <div className="w-full">
                <CustomLabel className="text-sm font-display text-[#6B7280] font-normal">
                  Poll description:
                </CustomLabel>
                <Textarea
                  placeholder="Description here..."
                  className="bg-transparent border-2 border-[#374151] border-opacity-50 text-[#D1D5DB] font-display placeholder:text-gray-700 scroll-container rounded-md p-3.5 min-h-32 max-h-64"
                />
              </div>
              <div className="w-full">
                <CustomLabel className="text-lg font-display text-[#6B7280] font-normal">
                  Options
                </CustomLabel>
              </div>

              <div className="w-full">
                <div className="border-2 border-[#374151] border-opacity-50 rounded-lg p-2 flex flex-col gap-2">
                  {poll?.pollingOptions.map((pollData, index) => {
                    return (
                      <div className="w-full flex items-center justify-between">
                        <CustomCheckBox
                          title={pollData}
                          checkColor="text-[#6B7280]"
                          borderColor="border-[#6B7280]"
                          titleColor="text-[#D1D5DB]"
                        />
                        <div className="cursor-pointer">
                          <X className="w-5 h-5 text-red-500" />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="w-full">
                    <CustomInputField
                      placeholder="Write option here..."
                      className="bg-transparent border-[#374151] border-opacity-50 text-[#D1D5DB] font-display placeholder:text-gray-700"
                    />
                  </div>
                  <div className="bg-blue-500 p-1.5 rounded-lg text-[#D1D5DB] cursor-pointer">
                    <Check />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default PrivateVMeetOnlineAppPollingPageComponent;
