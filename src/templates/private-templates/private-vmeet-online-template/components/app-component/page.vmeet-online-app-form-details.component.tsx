import { Check, ChevronLeft, Plus, X } from "lucide-react";
import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";
import PrivateVMeetOnlineJoiningSoundPageComponent from "../page.vmeet-online-joining-sound.component";
import "../../../../../css/scroll-container.css";
import { useCallback, useState } from "react";
import { CustomInputField } from "../../../../../components/custom-input-field/custom-input-field.component";
import { Textarea } from "../../../../../components/custom-textarea/custom-textarea.component";
import { v4 as uuidv4 } from "uuid";
import CustomCheckBox from "../../../../../components/custom-checkbox/custom-checkbox.component";
import CustomFileInputField from "../../../../../components/custom-file-input-field/custom-file-input-field.component";

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
        formType: "" as "text" | "select" | "upload",
        formOptions: [""],
      },
    ],
    status: true,
  });

  const handleChangeTitle = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setForms((prevForms) => ({
        ...prevForms,
        formId: uuidv4(),
        formTitle: event.target.value,
      }));
    },
    []
  );
  const handleChangeDescription = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setForms((prevForms) => ({
        ...prevForms,
        formDescription: event.target.value,
      }));
    },
    []
  );

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
  const handleAddField = useCallback(
    (formIndex: number) => {
      const newForms = forms.form.map((form, index) => {
        if (index === formIndex) {
          return {
            ...form,
            formOptions: [...form.formOptions, ""],
          };
        }
        return form;
      });
      setForms({ ...forms, form: newForms });
    },
    [forms]
  );
  const handleRemoveField = useCallback(
    (formIndex: number, optionIndex: number) => {
      const newForms = [...forms.form];
      newForms[formIndex].formOptions = newForms[formIndex].formOptions.filter(
        (_, idx) => idx !== optionIndex
      );
      setForms({ ...forms, form: newForms });
    },
    [forms]
  );
  // Handler function to update form title
  const handleChangeFormTitle = useCallback(
    (formIndex: number, event: React.ChangeEvent<HTMLInputElement>) => {
      setForms((prevForms) => {
        const updatedForm = [...prevForms.form];
        updatedForm[formIndex] = {
          ...updatedForm[formIndex],
          title: event.target.value as string,
        };
        return { ...prevForms, form: updatedForm };
      });
    },
    []
  );
  // Handler function to update form options
  const handleInputChange = useCallback(
    (
      formIndex: number,
      optionIndex: number,
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const updatedForms = [...forms.form];
      updatedForms[formIndex].formOptions[optionIndex] = event.target.value;

      setForms({
        ...forms,
        form: updatedForms,
      });
    },
    [forms]
  );

  // Create a new form
  const handleCreateNewForm = useCallback(() => {
    const newForm: formComponentType = {
      id: "",
      title: "",
      formType: "text",
      formOptions: [""],
    };
    setForms((prevState) => ({
      ...prevState,
      form: [...prevState.form, newForm],
    }));
  }, []);
  // Remove a form
  const handleRemoveForm = useCallback(
    (formIndex: number) => {
      let newForms = [...forms.form];
      newForms = newForms.filter((_, idx) => idx !== formIndex);
      setForms({ ...forms, form: newForms });
    },
    [forms]
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
                  placeholder="Title here..."
                  className="bg-transparent border-[#374151] border-opacity-50 text-[#D1D5DB] font-display placeholder:text-gray-700"
                  onChange={handleChangeTitle}
                  value={forms.formTitle as string}
                />
              </div>
              <div className="w-full">
                <CustomLabel className="text-sm font-display text-[#6B7280] font-normal">
                  Form description:
                </CustomLabel>
                <Textarea
                  placeholder="Description here..."
                  className="bg-transparent border-2 border-[#374151] border-opacity-50 text-[#D1D5DB] font-display placeholder:text-gray-700 scroll-container rounded-md p-3.5 min-h-32 max-h-64"
                  onChange={handleChangeDescription}
                  value={forms.formDescription as string}
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
                          onChange={(event) =>
                            handleChangeFormTitle(index, event)
                          }
                          value={data.title}
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
                        <div className="w-full">
                          <div className="w-full">
                            <CustomLabel className="text-lg font-display text-[#6B7280] font-normal">
                              Options
                            </CustomLabel>
                          </div>
                          {data.formOptions.map(
                            (formOptionData, formOptionIndex) => {
                              return (
                                <div key={formOptionIndex} className="w-full">
                                  <CustomLabel className="text-sm font-display text-[#6B7280] font-normal">
                                    {`Option ${formOptionIndex + 1}:`}
                                  </CustomLabel>
                                  <div className="flex w-full items-center justify-between gap-2">
                                    <div className="w-full">
                                      <CustomInputField
                                        placeholder="Write a option here..."
                                        className="bg-transparent border-[#374151] border-opacity-50 text-[#D1D5DB] font-display placeholder:text-gray-700"
                                        onChange={(event) =>
                                          handleInputChange(
                                            index,
                                            formOptionIndex,
                                            event
                                          )
                                        }
                                        value={formOptionData}
                                      />
                                    </div>
                                    <div className="flex flex-col items-center justify-center gap-1">
                                      {formOptionIndex > 0 && (
                                        <X
                                          onClick={() =>
                                            handleRemoveField(
                                              index,
                                              formOptionIndex
                                            )
                                          }
                                          className="w-5 h-5 text-red-500 cursor-pointer"
                                        />
                                      )}
                                      {formOptionIndex ===
                                        data.formOptions.length - 1 && (
                                        <Plus
                                          onClick={() => handleAddField(index)}
                                          className="w-5 h-5 text-blue-500 cursor-pointer"
                                        />
                                      )}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      )}
                    </div>
                    <div className="w-full flex items-center justify-start gap-2 mt-3">
                      {index > 0 && (
                        <button
                          onClick={() => handleRemoveForm(index)}
                          className="w-32 text-xs font-display text-[#D1D5DB] p-2 bg-[#1c73ff] rounded-lg"
                        >
                          Remove form
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}

              <div className="w-full flex items-center justify-end gap-2">
                <button
                  onClick={handleCreateNewForm}
                  className="w-24 text-xs font-display text-[#D1D5DB] p-2 bg-[#1c73ff] rounded-lg"
                >
                  Add more
                </button>
              </div>
              <div className="w-full flex items-center justify-end gap-2 mt-5">
                <button className="w-full text-xs font-display text-[#D1D5DB] p-2 border-2 border-[#374151] border-opacity-50 bg-[#374151] bg-opacity-50 rounded-lg">
                  Create form
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full p-4">
              {forms.formId && (
                <div className="w-full flex flex-col items-center justify-center gap-2 p-4 border-2 border-[#374151] border-opacity-50 rounded-xl">
                  <div className="w-full">
                    <CustomLabel className="text-lg font-semibold font-display text-[#D1D5DB]">
                      {forms.formTitle}
                    </CustomLabel>
                  </div>
                  <div className="w-full">
                    <CustomLabel className="text-xs font-normal font-display text-[#6B7280] text-justify">
                      {forms.formDescription}
                    </CustomLabel>
                  </div>
                  <div className="w-full">
                    <CustomLabel className="text-lg font-semibold font-display text-[#D1D5DB]">
                      Form Details
                    </CustomLabel>
                  </div>

                  <div className="w-full">
                    {forms.form.map((form, index) => {
                      return (
                        <div className="w-full">
                          <div className="w-full">
                            <CustomLabel className="text-sm font-display text-[#6B7280] font-normal">
                              {form.title}
                            </CustomLabel>
                            {form.formType === "text" && (
                              <CustomInputField
                                placeholder="Give your answer..."
                                className="bg-transparent border-[#374151] border-opacity-50 text-[#D1D5DB] font-display placeholder:text-gray-700"
                              />
                            )}

                            {form.formType === "select" && (
                              <div className="w-full mt-3 flex flex-col items-start justify-start gap-2">
                                {form.formOptions.map(
                                  (formOption, formOptionIndex) => {
                                    return (
                                      <CustomCheckBox
                                        title={formOption}
                                        checkColor="text-[#6B7280]"
                                        borderColor="border-[#6B7280]"
                                        titleColor="text-[#D1D5DB]"
                                      />
                                    );
                                  }
                                )}
                              </div>
                            )}

                            {form.formType === "upload" && (
                              <div className="mt-3">
                                <CustomFileInputField backgroundColor="bg-[#374151] bg-opacity-50" />
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrivateVMeetOnlineAppFormDetailsPageComponent;
