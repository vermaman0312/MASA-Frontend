import { ChevronDown, ChevronUp, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import CustomCheckBox from "../custom-checkbox/custom-checkbox.component";
import "../../css/scroll-container.css";
import { CustomLabel } from "../custom-label/custom-label.component";

interface valueType {
  id: string;
  value: string;
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

const CustomAutoComplete = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [lists, setLists] = useState<Array<valueType>>([]);
  const [value, setValue] = useState<Array<valueType>>([]);
  const [input, setInput] = useState<string>("");

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInput(event.target.value);
      if (input) {
        setIsOpen(true);
      }
    },
    [input]
  );
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const inputValue = event.currentTarget.value.trim();
      if (inputValue === "") return;
      setValue((prevValues) => [
        ...prevValues,
        {
          id: (prevValues.length + 1).toString(),
          value: inputValue,
        },
      ]);
      event.currentTarget.value = "";
    }
  };

  useEffect(() => {
    const myApprovalFilteredList = data.filter((contact) =>
      Object.values(contact).some((value) =>
        value
          .toString()
          .toLowerCase()
          .includes(((input as string) || "").toLowerCase())
      )
    );
    setLists(myApprovalFilteredList);
  }, [input]);

  return (
    <div className="relative w-full">
      <div className="border w-full rounded-lg flex items-center bg-white">
        <input
          placeholder="Title"
          className="w-full h-10 text-gray-600 outline-none p-2 text-xs font-display rounded-lg"
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <div className="h-full p-3">
          {isOpen ? (
            <ChevronUp
              onClick={() => setIsOpen(false)}
              className="w-4 h-4 text-gray-500 cursor-pointer"
            />
          ) : (
            <ChevronDown
              onClick={() => setIsOpen(true)}
              className="w-4 h-4 text-gray-500 cursor-pointer"
            />
          )}
        </div>
      </div>
      {value.length > 0 && (
        <div className="border mt-2 rounded-lg p-2 flex gap-2 line-clamp-2 break-words overflow-x-auto scroll-container">
          {value.map((data, index) => {
            return (
              <div
                key={index}
                className="flex rounded-full border p-1 gap-2 items-center"
              >
                <CustomLabel className="text-xs font-display font-normal whitespace-nowrap">
                  {data.value}
                </CustomLabel>
                <X className="w-4 h-4" />
              </div>
            );
          })}
        </div>
      )}
      {isOpen && (
        <div>
          {lists.length > 0 && (
            <div className="absolute top-full left-0 w-full max-h-64 p-2 bg-white mt-1 rounded-lg shadow-lg transition-all z-10 scroll-container">
              {lists.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${lists.length > 1 && "border-b"} p-2`}
                  >
                    <CustomCheckBox title={item.value} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CustomAutoComplete;
