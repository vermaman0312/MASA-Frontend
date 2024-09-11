import { ChevronLeft } from "lucide-react";
import React from "react";
import { CustomLabel } from "../../../../../../../components/custom-label/custom-label.component";

type props = {
  onClickBack: () => void;
};

const PrivateVMeetOnlineAppMeetingGuidePageComponent = ({
  onClickBack,
}: props) => {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="flex items-center justify-start gap-2 p-4">
        <ChevronLeft
          onClick={onClickBack}
          className="w-5 h-5 text-[#6B7280] cursor-pointer"
        />
        <CustomLabel className="text-lg text-[#6B7280] font-display">
          Meeting guide
        </CustomLabel>
      </div>

      <div
        className="w-full scroll-container p-5"
        style={{
          height: "calc(100vh - 140px)",
          overflowY: "auto",
          boxSizing: "border-box",
        }}
      >
        <div className="text-justify">
          <CustomLabel className="text-xs text-[#6B7280] font-display font-normal text-center">
            Welcome to our online meeting! To ensure everything runs smoothly
            and efficiently, please follow these guidelines:
          </CustomLabel>
        </div>
        <div className="mt-3">
          <div>
            <CustomLabel className="text-2xl text-[#D1D5DB] font-display font-normal text-center">
              Before the Meeting
            </CustomLabel>
          </div>
          <div className="w-full pl-5 text-justify">
            <CustomLabel className="text-xs text-[#6B7280] font-display font-normal text-justify">
              Check Your Technology: Internet Connection: Make sure you have a
              stable internet connection. Software: Ensure you have the
              necessary meeting software (e.g., Zoom, Microsoft Teams, Google
              Meet) installed and updated. Hardware: Test your microphone,
              speakers, and camera to ensure they are working properly.
            </CustomLabel>
          </div>
          <div className="w-full pl-5 text-justify">
            <CustomLabel className="text-xs text-[#6B7280] font-display font-normal text-justify">
              Prepare Your Environment: Quiet Space: Choose a quiet location
              where you won’t be interrupted. Lighting: Ensure you have good
              lighting so others can see you clearly. Background: Use a clean
              and professional background or a virtual background if needed.
              Review the Agenda: Familiarize yourself with the meeting agenda
              and any documents or materials that will be discussed.
            </CustomLabel>
          </div>
        </div>

        <div className="mt-3">
          <div>
            <CustomLabel className="text-2xl text-[#D1D5DB] font-display font-normal text-center">
              Joining the Meeting
            </CustomLabel>
          </div>
          <div className="w-full pl-5 text-justify">
            <CustomLabel className="text-xs text-[#6B7280] font-display font-normal text-justify">
              Be On Time: Join the meeting a few minutes early to address any
              technical issues and to ensure you start on time. Use the Meeting
              Link: Click the meeting link provided in the invitation. Follow
              any prompts to join the meeting. Login Information: Enter any
              required login or passcode information as directed.
            </CustomLabel>
          </div>
        </div>

        <div className="mt-3">
          <div>
            <CustomLabel className="text-2xl text-[#D1D5DB] font-display font-normal text-center">
              During the Meeting
            </CustomLabel>
          </div>
          <div className="w-full pl-5 text-justify">
            <CustomLabel className="text-xs text-[#6B7280] font-display font-normal text-justify">
              Mute When Not Speaking: Keep your microphone on mute when you are
              not speaking to avoid background noise. Participate Actively:
              Engage in the discussion, ask questions, and contribute as needed.
              Use chat or reactions if you need to signal something without
              interrupting. Share Your Screen (if needed): If you need to share
              your screen, ensure you only share the relevant window or
              application to maintain privacy and avoid distractions. Take
              Notes: Document important points and action items for your
              reference.
            </CustomLabel>
          </div>
        </div>

        <div className="mt-3">
          <div>
            <CustomLabel className="text-2xl text-[#D1D5DB] font-display font-normal text-center">
              Ending the Meeting
            </CustomLabel>
          </div>
          <div className="w-full pl-5 text-justify">
            <CustomLabel className="text-xs text-[#6B7280] font-display font-normal text-justify">
              Summarize Key Points: Review any decisions made and action items
              assigned during the meeting. Ask for Clarifications: If you have
              any questions or need further details, make sure to address them
              before the meeting ends. Leave the Meeting Properly: Click the
              “Leave” or “End Meeting” button to exit the meeting. Ensure you
              leave the virtual room respectfully, without causing disruptions.
            </CustomLabel>
          </div>
        </div>

        <div className="mt-3">
          <div>
            <CustomLabel className="text-2xl text-[#D1D5DB] font-display font-normal text-center">
              After the Meeting
            </CustomLabel>
          </div>
          <div className="w-full pl-5 text-justify">
            <CustomLabel className="text-xs text-[#6B7280] font-display font-normal text-justify">
              Follow Up: Review any meeting notes or action items and follow up
              on your responsibilities. Provide Feedback: If there is a feedback
              mechanism, share your thoughts on how the meeting went to help
              improve future meetings.
            </CustomLabel>
          </div>
        </div>

        <div className="w-full mt-5 text-justify">
          <CustomLabel className="text-xs text-[#6B7280] font-display font-normal text-justify">
            Thank you for attending, and we look forward to a productive
            session!
          </CustomLabel>
        </div>
      </div>
    </div>
  );
};

export default PrivateVMeetOnlineAppMeetingGuidePageComponent;
