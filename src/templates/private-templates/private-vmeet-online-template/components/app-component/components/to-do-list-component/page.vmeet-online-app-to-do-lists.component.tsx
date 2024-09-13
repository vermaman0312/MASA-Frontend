import { ChevronLeft, Pencil, Trash2 } from "lucide-react";
import React, { useCallback, useState } from "react";
import { CustomLabel } from "../../../../../../../components/custom-label/custom-label.component";
import Draggable from "react-draggable";
import CustomCheckBox from "../../../../../../../components/custom-checkbox/custom-checkbox.component";
import TodoListIllustration from "../../../../../../../assets/illustrations/todo-list.illustration";

interface todoListType {
  todoId: string;
  todoTitle: string;
  status: "created" | "pending" | "progress" | "completed";
}

type Props = {
  onClickBack: () => void;
};

const PrivateVMeetOnlineAppToDoListsPageComponent = ({
  onClickBack,
}: Props) => {
  //   const handleStart = (e: DraggableEvent, data: DraggableData) => {
  //     console.log("Dragging started:", data);
  //     // Additional logic can be added here
  //   };

  //   const handleDrag = (e: DraggableEvent, data: DraggableData) => {
  //     console.log("Dragging:", data);
  //     // Additional logic can be added here
  //   };

  //   const handleStop = (e: DraggableEvent, data: DraggableData) => {
  //     console.log("Dragging stopped:", data);
  //     // Additional logic can be added here
  //   };
  const [todoList, setTodoList] = useState<Array<todoListType>>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const handleSaveSubmit = useCallback(() => {
    if (!inputValue) {
      setIsError(true);
      return;
    }
    setTodoList([
      ...todoList,
      {
        todoId: Date.now().toString(),
        todoTitle: inputValue,
        status: "created",
      },
    ]);
    setInputValue("");
  }, [inputValue, todoList]);

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <div className="flex items-center justify-start gap-2 p-4">
        <ChevronLeft
          onClick={onClickBack}
          className="w-5 h-5 text-[#6B7280] cursor-pointer"
        />
        <CustomLabel className="text-lg text-[#6B7280] font-display">
          To-Do Lists
        </CustomLabel>
      </div>

      <div
        className="w-full flex flex-col items-center justify-between gap-2 p-4"
        style={{
          height: "calc(100vh - 140px)",
          overflowY: "auto",
          boxSizing: "border-box",
        }}
      >
        <div
          className="w-full h-full scroll-container flex flex-col justify-start items-start gap-4"
          style={{
            height: "calc(100vh - 140px)",
            overflowY: "auto",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          {todoList.length > 0 ? (
            <div className="w-full">
              {todoList.map((data, index) => {
                return (
                  <Draggable
                    axis="both"
                    handle=".handle"
                    defaultPosition={{ x: 0, y: 0 }}
                    position={undefined}
                    grid={[25, 25]}
                    bounds=".scroll-container"
                    scale={1}
                    //   onStart={handleStart}
                    //   onDrag={handleDrag}
                    //   onStop={handleStop}
                  >
                    <div
                      key={index}
                      className="handle cursor-move w-full p-4 bg-transprent rounded-xl flex items-center justify-between border-2 border-[#374151] border-opacity-50"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                    >
                      <div>
                        <CustomCheckBox
                          title={data.todoTitle}
                          titleColor="text-[#6B7280]"
                          checkColor="text-[#6B7280]"
                          borderColor="border-[#6B7280]"
                        />
                      </div>
                      <div className="flex items-center justify-center gap-4">
                        <Pencil
                          onClick={() => alert("edit")}
                          className="w-5 h-5 text-blue-500 cursor-pointer"
                        />
                        <Trash2
                          onClick={() => alert("delete")}
                          className="w-5 h-5 text-red-500 cursor-pointer"
                        />
                      </div>
                    </div>
                  </Draggable>
                );
              })}
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center">
              <div className="w-64 h-64">
                <TodoListIllustration />
              </div>
            </div>
          )}
        </div>
        <div
          className={`w-full flex items-center justify-between gap-2 bg-[#1F2937] bg-opacity-50 border-2 ${
            isError ? "border-red-500" : "border-[#374151] border-opacity-50"
          } p-2 rounded-full`}
        >
          <input
            placeholder="write your notes...."
            className="w-full p-2 outline-none text-[#D1D5DB] placeholder:text-[#6B7280] font-display text-xs bg-transparent border-none"
            onChange={(event) => {
              setInputValue(event.target.value);
              setIsError(false);
            }}
            value={inputValue}
          />
          <button
            onClick={handleSaveSubmit}
            className="text-xs font-display text-white p-2.5 rounded-full w-24 bg-blue-500"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivateVMeetOnlineAppToDoListsPageComponent;
