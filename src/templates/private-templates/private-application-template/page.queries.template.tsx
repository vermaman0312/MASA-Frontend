import React, { useCallback, useState } from "react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import CustomSearchBox from "../../../components/custom-searchbox/custom-searchbox.component";
import { authenticatedUserRole } from "../../../utils/token/token";
import { Check, Eye, FilePenLine, Trash, X } from "lucide-react";

const PrivateApplicationQueriesPageTemplate = () => {
  const role = authenticatedUserRole();
  const [selectedOption, setSelectedOption] = useState<string>("myQueries");
  const handleOptionChange = useCallback(
    (value: string) => {
      setSelectedOption(value);
    },
    [setSelectedOption]
  );
  return (
    <div className="w-full h-full flex flex-col">
      <div>
        <CustomLabel className="text-3xl font-display text-gray-500">
          Queries
        </CustomLabel>
      </div>
      <div className="w-full mt-5 flex flex-wrap items-center justify-end gap-2">
        <div>
          <CustomSearchBox />
        </div>
        <div className="w-2/6 bg-gray-300 p-1 flex items-center justify-between rounded-lg">
          <button
            onClick={() => handleOptionChange("myQueries")}
            className={`w-full ${
              selectedOption === "myQueries" && "bg-white"
            } rounded-lg p-1 text-xs font-display text-gray-700 font-medium transition-all`}
          >
            My Queries
          </button>
          {role.toLowerCase() !== "student" && (
            <button
              onClick={() => handleOptionChange("approveQueries")}
              className={`w-full ${
                selectedOption === "approveQueries" && "bg-white"
              } rounded-lg p-1 text-xs font-display text-gray-700 font-medium transition-all`}
            >
              Approve Queries
            </button>
          )}
          <button
            onClick={() => handleOptionChange("newQueries")}
            className={`w-full ${
              selectedOption === "newQueries" && "bg-white"
            } rounded-lg p-1 text-xs font-display text-gray-700 font-medium transition-all`}
          >
            New Queries
          </button>
        </div>
      </div>
      <div className="w-full h-full mt-5">
        {selectedOption === "newQueries" ? (
          <div>Form</div>
        ) : (
          <div>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    S.N
                  </th>
                  <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Query Date & Time
                  </th>
                  <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    {selectedOption === "myQueries"
                      ? "My Details"
                      : "User Details"}
                  </th>
                  <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Content
                  </th>
                  <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    View
                  </th>
                  <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-gray-200 bg-white text-center text-xs font-display p-2">
                    <span className="relative inline-block font-semibold text-green-900 leading-tight">
                      S.N
                    </span>
                  </td>
                  <td className="border-b border-gray-200 bg-white text-center text-xs font-display p-2">
                    <span className="relative inline-block text-green-900 leading-tight">
                      Query Date & Time
                    </span>
                  </td>
                  <td className="border-b border-gray-200 bg-white text-center text-xs font-display p-2">
                    <span className="relative inline-block text-green-900 leading-tight">
                      User Details
                    </span>
                  </td>
                  <td className="border-b border-gray-200 bg-white text-center text-xs font-display p-2">
                    <span className="relative inline-block font-semibold text-green-900 leading-tight">
                      Subject
                    </span>
                  </td>
                  <td className="border-b border-gray-200 bg-white text-center text-xs font-display p-2">
                    <span className="relative inline-block text-green-900 leading-tight">
                      Content
                    </span>
                  </td>
                  <td className="border-b border-gray-200 bg-white text-center text-xs font-display p-2">
                    <span className="relative inline-block font-semibold text-green-900 leading-tight">
                      Status
                    </span>
                  </td>
                  <td className="border-b border-gray-200 bg-white text-center text-xs font-display p-2">
                    <span className="relative inline-block font-semibold text-gray-900 leading-tight bg-gray-200 p-1 rounded-lg cursor-pointer">
                      <button className="flex items-center justify-center p-1 bg-green-300 rounded-lg">
                        <Eye className="w-4 h-4 text-gray-700" />
                      </button>
                    </span>
                  </td>
                  <td className="border-b border-gray-200 bg-white text-center text-xs font-display p-2">
                    <span className="bg-gray-200 p-1 rounded-lg cursor-pointer flex items-center justify-center gap-2">
                      {selectedOption === "approveQueries" && (
                        <button className="flex items-center justify-center p-1 bg-blue-400 rounded-lg">
                          <Check className="w-4 h-4 text-white" />
                        </button>
                      )}
                      {selectedOption === "myQueries" && (
                        <button className="flex items-center justify-center p-1 bg-blue-400 rounded-lg">
                          <FilePenLine className="w-4 h-4 text-white" />
                        </button>
                      )}
                      {selectedOption === "approveQueries" && (
                        <button className="flex items-center justify-center p-1 bg-red-400 rounded-lg">
                          <X className="w-4 h-4 text-white" />
                        </button>
                      )}
                      {selectedOption === "myQueries" && (
                        <button className="flex items-center justify-center p-1 bg-red-400 rounded-lg">
                          <Trash className="w-4 h-4 text-white" />
                        </button>
                      )}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivateApplicationQueriesPageTemplate;
