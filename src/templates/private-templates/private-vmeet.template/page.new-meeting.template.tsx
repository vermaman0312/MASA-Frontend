import React, { useCallback, useState } from "react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import VMeetIllustration from "../../../assets/illustrations/v-meet.illustration";
import { CustomInputField } from "../../../components/custom-input-field/custom-input-field.component";
import CustomDropdown from "../../../components/custom-dropdown/custom-dropdown.component";
import CustomAutoComplete from "../../../components/custom-autocomplete/custom-autocomplete.component";
import { Loader } from "lucide-react";

interface newMeetingType {
  userName: string;
  meetingTitle: string;
  mettingType: string;
  meetingAttender: Array<string>;
  meetingTime: string;
}

const data = [
  { id: "1", value: "Aman Verma" },
  { id: "2", value: "Atal Verma" },
  { id: "3", value: "Ravi Singh" },
  { id: "4", value: "Sita Sharma" },
  { id: "5", value: "Raj Patel" },
  { id: "6", value: "Anita Kumari" },
  { id: "7", value: "Rohit Sharma" },
  { id: "8", value: "Neha Gupta" },
  { id: "9", value: "Sanjay Kumar" },
  { id: "10", value: "Preeti Verma" },
  { id: "11", value: "Kiran Mehta" },
  { id: "12", value: "Amit Yadav" },
  { id: "13", value: "Priya Desai" },
  { id: "14", value: "Vijay Singh" },
  { id: "15", value: "Maya Rani" },
  { id: "16", value: "Manoj Sharma" },
  { id: "17", value: "Suman Yadav" },
  { id: "18", value: "Nitin Gupta" },
  { id: "19", value: "Sonali Patel" },
  { id: "20", value: "Dinesh Kumar" },
  { id: "21", value: "Sunita Sharma" },
  { id: "22", value: "Arun Kumar" },
  { id: "23", value: "Kavita Verma" },
  { id: "24", value: "Anil Raj" },
  { id: "25", value: "Deepa Saini" },
  { id: "26", value: "Vikash Yadav" },
  { id: "27", value: "Pooja Gupta" },
  { id: "28", value: "Rakesh Sharma" },
  { id: "29", value: "Sonia Singh" },
  { id: "30", value: "Harsh Patel" },
];

const PrivateVMeetNewMettingPageTemplate = () => {
  const [isNewMeeting, setIsNewMeeting] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isJoining, setIsJoining] = useState<boolean>(false);
  const [newMeetingDetails, setNewMeetingDetails] = useState<newMeetingType>({
    userName: "",
    meetingTitle: "",
    mettingType: "",
    meetingAttender: [],
    meetingTime: "",
  });

  const handleChangeMeetingType = useCallback((value: string) => {
    setNewMeetingDetails((prevState) => ({
      ...prevState,
      mettingType: value,
    }));
  }, []);

  const handleCreateMeeting = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsJoining(true);
    }, 3000);
  }, []);

  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-1">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full md:w-[70%]">
          <VMeetIllustration />
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center md:border-l">
        <div className="border bg-gray-100 p-4 rounded-xl w-full md:w-[50%] md:h-[70%]">
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

          {isNewMeeting ? (
            <div className="mt-5">
              <div className="mt-3">
                <CustomInputField disabled value="Aman Verma" />
              </div>
              <div className="mt-3">
                <CustomInputField placeholder="Meeting title..." value="" />
              </div>
              <div className="p-[3px] mt-3">
                <CustomDropdown
                  list={["Public meeting", "Private meeting"]}
                  title="Select meeting type"
                  onChange={(value) => handleChangeMeetingType(value as string)}
                  value={newMeetingDetails.mettingType}
                />
              </div>
              {newMeetingDetails.mettingType.toLowerCase() ===
                "private meeting" && (
                <div className="p-[3px] mt-3">
                  <CustomAutoComplete data={data} />
                </div>
              )}
              <div className="p-[3px] mt-3">
                <CustomDropdown
                  list={["Meeting for now", "Meeting for later"]}
                  title="Select meeting time"
                />
              </div>
              <div className="mt-5 p-[3px]">
                <button
                  onClick={handleCreateMeeting}
                  className="bg-gray-900 w-full p-2 text-white rounded-lg text-xs font-display h-10 flex items-center justify-center"
                >
                  {isLoading ? (
                    <Loader className="animate-spin" />
                  ) : isJoining ? (
                    "Join meeting"
                  ) : (
                    "Create meeting"
                  )}
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-5">
              <div className="mt-3">
                <CustomInputField placeholder="Meeting Id" value="" />
              </div>
              <div className="mt-3">
                <CustomInputField placeholder="Enter your name" value="" />
              </div>
              <div className="mt-3">
                <CustomInputField
                  placeholder="Enter meeting password"
                  value=""
                />
              </div>
              <div className="mt-3">
                <button className="bg-gray-900 w-full p-2 text-white rounded-lg text-xs font-display h-10 flex items-center justify-center">
                  Join meeting
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivateVMeetNewMettingPageTemplate;
