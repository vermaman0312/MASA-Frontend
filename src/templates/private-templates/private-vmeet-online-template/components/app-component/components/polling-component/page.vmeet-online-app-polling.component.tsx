import { Check, ChevronLeft, Edit, Trash2, X } from "lucide-react";
import React, { useCallback, useState } from "react";
import { CustomLabel } from "../../../../../../../components/custom-label/custom-label.component";
import { CustomInputField } from "../../../../../../../components/custom-input-field/custom-input-field.component";
import { Textarea } from "../../../../../../../components/custom-textarea/custom-textarea.component";
import CustomCheckBox from "../../../../../../../components/custom-checkbox/custom-checkbox.component";
import { v4 as uuidv4 } from "uuid";

type props = {
  onClickBack: () => void;
};

interface answerType {
  userId: string;
  answer: string;
}

interface pollingType {
  pollingId: string;
  pollingTitle: string;
  pollingDescription: string;
  pollingOptions: Array<string>;
  pollingAnswer: string;
  pollingGivenAnswer: Array<answerType>;
  status: boolean;
}

const PrivateVMeetOnlineAppPollingPageComponent = ({ onClickBack }: props) => {
  const userId = "12345";
  const [isPollingCreate, setIsPollingCreate] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [poll, setPoll] = useState<pollingType>({
    pollingId: "123",
    pollingTitle: "Which of the following are the advantages of React.js?",
    pollingDescription:
      "Which of the following are the advantages of React.js?",
    pollingOptions: [
      "React.js can increase the application's performance with Virtual DOM.",
      "React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.",
      "React.js can render both on client and server side.",
      "All of the above",
    ],
    pollingAnswer: "All of the above",
    pollingGivenAnswer: [],
    status: false,
  });

  const handleSubmitOption = useCallback(() => {
    if (inputValue.trim() === "") {
      setIsError(true);
      return;
    }
    const valueExists = poll.pollingOptions.includes(inputValue);
    if (valueExists) {
      setIsError(true);
      return;
    } else {
      setIsError(false);
      setPoll((prevState) => ({
        ...prevState,
        pollingOptions: [...prevState.pollingOptions, inputValue],
      }));
      setInputValue("");
    }
  }, [inputValue, poll.pollingOptions]);

  const handleRemoveOption = useCallback(
    (pollData: string, index: number) => {
      let options = [...poll.pollingOptions];
      options = options.filter((_, idx) => idx !== index);
      setPoll((prevState) => ({
        ...prevState,
        pollingOptions: options,
      }));

      if (poll.pollingAnswer === pollData) {
        setPoll((prevState) => ({
          ...prevState,
          pollingAnswer: "",
        }));
      }
    },
    [poll.pollingAnswer, poll.pollingOptions]
  );

  const handleSubmitUserAnswer = useCallback(
    (userId: string, checked: boolean, answer: string) => {
      setPoll((prevState) => ({
        ...prevState,
        pollingGivenAnswer: [
          ...prevState.pollingGivenAnswer,
          { userId: userId, answer: checked ? answer : "" },
        ],
      }));
    },
    []
  );

  // Find percentage
  const getOptionCounts = (poll: any) => {
    const counts: Record<string, number> = {};

    poll.pollingOptions.forEach((option: string) => {
      counts[option] = poll.pollingGivenAnswer.filter(
        (answer: any) => answer.answer === option
      ).length;
    });

    return counts;
  };

  const getOptionPercentages = (poll: any) => {
    const counts = getOptionCounts(poll);
    const totalResponses = poll.pollingGivenAnswer.length;

    if (totalResponses === 0) {
      return Object.keys(counts).reduce((acc, option) => {
        Object.keys(counts).map((option) => [option, 0]);
        return acc;
      }, {});
    }

    const percentages: Record<string, number> = {};

    Object.keys(counts).forEach((option: string) => {
      percentages[option] = (counts[option] / totalResponses) * 100;
    });

    return percentages;
  };

  const pollPercentages = getOptionPercentages(poll);

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
                  onChange={(event) =>
                    setPoll((prevState) => ({
                      ...prevState,
                      pollingId: uuidv4(),
                      pollingTitle: event.target.value,
                    }))
                  }
                  value={poll.pollingTitle}
                />
              </div>
              <div className="w-full">
                <CustomLabel className="text-sm font-display text-[#6B7280] font-normal">
                  Poll description:
                </CustomLabel>
                <Textarea
                  placeholder="Description here..."
                  className="bg-transparent border-2 border-[#374151] border-opacity-50 text-[#D1D5DB] font-display placeholder:text-gray-700 scroll-container rounded-md p-3.5 min-h-32 max-h-64"
                  onChange={(event) =>
                    setPoll((prevState) => ({
                      ...prevState,
                      pollingDescription: event.target.value,
                    }))
                  }
                  value={poll.pollingDescription}
                />
              </div>
              <div className="w-full mt-3">
                <CustomLabel className="text-lg font-display text-[#6B7280] font-normal">
                  Options
                </CustomLabel>
              </div>

              <div className="w-full">
                {poll.pollingOptions.length > 0 && (
                  <div className="border-2 border-[#374151] border-opacity-50 rounded-lg p-2 flex flex-col gap-2">
                    {poll?.pollingOptions.map((pollData, index) => {
                      return (
                        <div
                          key={index}
                          className="w-full flex items-center justify-between"
                        >
                          <CustomCheckBox
                            title={pollData}
                            checkColor="text-[#6B7280]"
                            borderColor="border-[#6B7280]"
                            titleColor="text-[#D1D5DB]"
                            onChange={(event) => {
                              setIsError(false);
                              setPoll((prevState) => ({
                                ...prevState,
                                pollingAnswer: event.target.checked
                                  ? pollData
                                  : "",
                              }));
                            }}
                            value={
                              poll.pollingAnswer === pollData ? true : false
                            }
                          />
                          <div className="cursor-pointer">
                            <X
                              onClick={() =>
                                handleRemoveOption(pollData, index)
                              }
                              className="w-5 h-5 text-red-500"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
                <div className="mt-2 flex items-center gap-2">
                  <div className="w-full">
                    <CustomInputField
                      placeholder="Write option here..."
                      className={`bg-transparent ${
                        isError
                          ? "border-red-500"
                          : "border-[#374151] border-opacity-50"
                      } text-[#D1D5DB] font-display placeholder:text-gray-700`}
                      onChange={(event) => {
                        setIsError(false);
                        setInputValue(event.target.value);
                      }}
                      value={inputValue}
                    />
                  </div>
                  <div
                    onClick={handleSubmitOption}
                    className="bg-blue-500 p-1.5 rounded-lg text-[#D1D5DB] cursor-pointer"
                  >
                    <Check />
                  </div>
                </div>
                {poll.pollingAnswer && (
                  <div className="w-full mt-5">
                    <div className="w-full">
                      <CustomLabel className="text-lg font-display text-[#6B7280] font-normal">
                        Selected answer
                      </CustomLabel>
                      <CustomInputField
                        placeholder="Selected answer..."
                        className="bg-transparent border-[#374151] border-opacity-50 text-[#D1D5DB] font-display placeholder:text-gray-700"
                        value={poll.pollingAnswer}
                      />
                    </div>
                  </div>
                )}

                <div className="w-full flex items-center justify-end gap-2 mt-5">
                  <button className="w-full text-xs font-display text-[#D1D5DB] p-2 border-2 border-[#374151] border-opacity-50 bg-[#374151] bg-opacity-50 rounded-lg">
                    Create poll
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full p-4">
              <div className="w-full flex flex-col items-center justify-center gap-2 p-4 border-2 border-[#374151] border-opacity-50 rounded-xl">
                <div className="w-full">
                  <CustomLabel className="text-lg font-semibold font-display text-[#D1D5DB]">
                    {poll.pollingTitle}
                  </CustomLabel>
                </div>
                <div className="w-full">
                  <CustomLabel className="text-xs font-normal font-display text-[#6B7280] text-justify">
                    {poll.pollingDescription}
                  </CustomLabel>
                </div>

                <div className="w-full mt-3">
                  <CustomLabel className="text-lg font-display text-[#6B7280] font-normal">
                    Options
                  </CustomLabel>
                </div>
                <div className="w-full mt-2 flex flex-col gap-4">
                  {poll.pollingOptions.map((pollData, index) => {
                    return (
                      <div>
                        <CustomCheckBox
                          disabled={
                            poll.pollingGivenAnswer.find(
                              (answer) => answer.userId === userId
                            )
                              ? true
                              : false
                          }
                          title={pollData}
                          checkColor="text-[#6B7280]"
                          borderColor="border-[#6B7280]"
                          titleColor="text-[#D1D5DB]"
                          onChange={(event) => {
                            handleSubmitUserAnswer(
                              userId,
                              event.target.checked,
                              pollData
                            );
                          }}
                          value={
                            poll.pollingGivenAnswer.some(
                              (answer) =>
                                answer.userId === userId &&
                                answer.answer === pollData
                            )
                              ? true
                              : false
                          }
                        />
                        {(pollPercentages as any)[pollData]?.toFixed(0) > 0 && (
                          <div className="mt-1 w-full flex items-center gap-2">
                            <div className="flex items-center">
                              <CustomLabel className="text-xs font-display text-[#D1D5DB]">
                                {(pollPercentages as any)[pollData]?.toFixed(0)}
                                %
                              </CustomLabel>
                            </div>
                            <div className="w-full">
                              <div className="w-full bg-[#6B7280] rounded-full h-2.5 dark:bg-gray-700">
                                <div
                                  className="bg-blue-600 h-2.5 rounded-full"
                                  style={{
                                    width: `${(pollPercentages as any)[
                                      pollData
                                    ]?.toFixed(0)}%`,
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-3 w-full">
                  <div className="w-full">
                    <CustomLabel className="text-lg font-display text-[#6B7280] font-normal">
                      Corrent Option
                    </CustomLabel>
                    <CustomInputField
                      placeholder={`Write a question here...`}
                      className="bg-transparent border-[#374151] border-opacity-50 text-[#D1D5DB] font-display placeholder:text-gray-700"
                      value={poll.pollingAnswer}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-1 w-full flex items-center justify-end gap-2">
                <Edit
                  onClick={() => alert("Edit")}
                  className="text-[#374151] text-opacity-50 cursor-pointer hover:text-opacity-95"
                />
                <Trash2
                  onClick={() => alert("Delete")}
                  className="text-[#374151] text-opacity-50 cursor-pointer hover:text-opacity-95"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivateVMeetOnlineAppPollingPageComponent;
