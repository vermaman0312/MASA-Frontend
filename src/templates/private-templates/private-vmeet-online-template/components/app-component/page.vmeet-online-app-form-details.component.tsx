import { ChevronLeft } from "lucide-react";
import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";
import PrivateVMeetOnlineJoiningSoundPageComponent from "../page.vmeet-online-joining-sound.component";
import "../../../../../css/scroll-container.css";
import { useCallback, useState } from "react";
import { CustomInputField } from "../../../../../components/custom-input-field/custom-input-field.component";
import { Textarea } from "../../../../../components/custom-textarea/custom-textarea.component";
import CustomDropdown from "../../../../../components/custom-dropdown/custom-dropdown.component";

type formComponentType = {
  id: string;
  title: string;
  formType: "text" | "select" | "upload";
  formOptions: string[];
};

interface formType {
  formId: string;
  formTitle: string | null;
  formDescription: string | null;
  form: Array<formComponentType>;
  status: boolean;
}

type props = {
  onClickBack?: () => void;
};

const PrivateVMeetOnlineAppFormDetailsPageComponent = ({
  onClickBack,
}: props) => {
  const [isCreateForm, setIsCreateForm] = useState<boolean>(false);
  const [forms, setForms] = useState<formType>({
    formId: "",
    formTitle: "",
    formDescription: "",
    form: [
      {
        id: "",
        title: "",
        formType: "text",
        formOptions: [],
      },
    ],
    status: true,
  });

  const handleSelectAnswerType = useCallback(
    (index: number, event: React.ChangeEvent<HTMLSelectElement>) => {
      setForms((prevForms) => {
        const updatedForm = [...prevForms.form];
        updatedForm[index] = {
          ...updatedForm[index],
          formType: event.target.value as "text" | "select" | "upload",
        };
        return { ...prevForms, form: updatedForm };
      });
    },
    []
  );

  PrivateVMeetOnlineJoiningSoundPageComponent();
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="flex items-center justify-start gap-2 p-4">
        <ChevronLeft
          onClick={onClickBack}
          className="w-5 h-5 text-[#6B7280] cursor-pointer"
        />
        <CustomLabel className="text-lg text-[#6B7280] font-display">
          Registration Form
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
          {!isCreateForm && (
            <button
              onClick={() => setIsCreateForm(true)}
              className="w-32 text-xs font-display text-[#D1D5DB] bg-[#1c73ff] p-2 rounded-lg"
            >
              Create Form
            </button>
          )}
          {isCreateForm && (
            <button
              onClick={() => setIsCreateForm(false)}
              className="w-32 text-xs font-display text-[#D1D5DB] bg-[#1c73ff] p-2 rounded-lg"
            >
              View Form
            </button>
          )}
        </div>

        <div className="mt-3 w-full">
          {isCreateForm ? (
            <div className="w-full flex flex-col items-center justify-center gap-2 p-4">
              <div className="w-full">
                <CustomLabel className="text-sm font-display text-[#6B7280] font-normal">
                  Form title:
                </CustomLabel>
                <CustomInputField
                  placeholder="Title here"
                  className="bg-transparent border-[#374151] border-opacity-50 text-[#D1D5DB] font-display placeholder:text-gray-700"
                />
              </div>
              <div className="w-full">
                <CustomLabel className="text-sm font-display text-[#6B7280] font-normal">
                  Form description:
                </CustomLabel>
                <Textarea
                  placeholder="Title here"
                  className="bg-transparent border-2 border-[#374151] border-opacity-50 text-[#D1D5DB] font-display placeholder:text-gray-700 scroll-container rounded-md p-3.5 min-h-32 max-h-64"
                />
              </div>

              <div className="w-full">
                <CustomLabel className="text-lg font-display text-[#6B7280] font-normal">
                  Create Questions
                </CustomLabel>
              </div>

              {forms.form.map((data, index) => {
                return (
                  <div key={index} className="w-full">
                    <div className="w-full">
                      <CustomLabel className="text-lg font-display text-[#6B7280] font-normal">
                        {`Question ${index + 1}`}
                      </CustomLabel>
                    </div>

                    <div className="w-full flex flex-col items-center justify-center gap-2 border-2 border-[#374151] border-opacity-50 p-2 rounded-xl">
                      <div className="w-full">
                        <CustomLabel className="text-sm font-display text-[#6B7280] font-normal">
                          Question:
                        </CustomLabel>
                        <CustomInputField
                          placeholder={`Write a question ${index + 1} here...`}
                          className="bg-transparent border-[#374151] border-opacity-50 text-[#D1D5DB] font-display placeholder:text-gray-700"
                        />
                      </div>
                      <div className="w-full">
                        <CustomLabel className="text-sm font-display text-[#6B7280] font-normal">
                          answer type:
                        </CustomLabel>
                        <select
                          name="answerType"
                          id="answerType"
                          className="w-full border-2 border-[#374151] border-opacity-50 bg-transparent text-[#6B7280] p-2 rounded-md font-display font-normal text-xs outline-none"
                          onChange={(event) =>
                            handleSelectAnswerType(index, event)
                          }
                          value={data.formType}
                        >
                          <option
                            value=""
                            disabled
                            selected
                            className="text-xs font-display text-[#6B7280]"
                          >
                            Select an option
                          </option>
                          <option
                            value="text"
                            className="text-xs font-display text-[#6B7280]"
                          >
                            Text
                          </option>
                          <option
                            value="select"
                            className="text-xs font-display text-[#6B7280]"
                          >
                            Select
                          </option>
                          <option
                            value="upload"
                            className="text-xs font-display text-[#6B7280]"
                          >
                            Upload
                          </option>
                        </select>
                      </div>
                      {data.formType === "select" && (
                        <div className="w-full grid grid-cols-2">
                          <div className="w-full">
                            <CustomLabel className="text-sm font-display text-[#6B7280] font-normal">
                              {`Options 1:`}
                            </CustomLabel>
                            <CustomInputField
                              placeholder="Option 1"
                              className="bg-transparent border-[#374151] border-opacity-50 text-[#D1D5DB] font-display placeholder:text-gray-700"
                            />
                          </div>
                          <div className="w-full">
                            <CustomLabel className="text-sm font-display text-[#6B7280] font-normal">
                              {`Options 2:`}
                            </CustomLabel>
                            <CustomInputField
                              placeholder="Option 2"
                              className="bg-transparent border-[#374151] border-opacity-50 text-[#D1D5DB] font-display placeholder:text-gray-700"
                            />
                          </div>
                          <div className="w-full">
                            <CustomLabel className="text-sm font-display text-[#6B7280] font-normal">
                              {`Options 3:`}
                            </CustomLabel>
                            <CustomInputField
                              placeholder="Option 3"
                              className="bg-transparent border-[#374151] border-opacity-50 text-[#D1D5DB] font-display placeholder:text-gray-700"
                            />
                          </div>
                          <div className="w-full">
                            <CustomLabel className="text-sm font-display text-[#6B7280] font-normal">
                              {`Options 4:`}
                            </CustomLabel>
                            <CustomInputField
                              placeholder="Option 4"
                              className="bg-transparent border-[#374151] border-opacity-50 text-[#D1D5DB] font-display placeholder:text-gray-700"
                            />
                          </div>
                        </div>
                      )}

                      <div className="w-full flex items-center justify-end gap-2">
                        <button className="w-24 text-xs font-display text-[#D1D5DB] p-2 bg-[#1c73ff] rounded-lg">
                          Add more
                        </button>
                        <button className="w-24 text-xs font-display text-[#D1D5DB] p-2 bg-[#1c73ff] rounded-lg">
                          Create
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="w-full flex flex-col items-center justify-center gap-2 p-4">
              List
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivateVMeetOnlineAppFormDetailsPageComponent;
