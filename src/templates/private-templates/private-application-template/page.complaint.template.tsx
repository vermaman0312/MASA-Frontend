import { useState } from "react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import CustomSearchBox from "../../../components/custom-searchbox/custom-searchbox.component";
import { Check, Eye, X } from "lucide-react";
import { CustomInputField } from "../../../components/custom-input-field/custom-input-field.component";
import "../../../css/scroll-container.css";
import CustomMarkDown from "../../../components/custom-markdown/custom-markdown.component";

const PrivateApplicationComplaintPageTemplate = () => {
  const [isNewComplaint, setIsNewComplaint] = useState<boolean>(false);
  return (
    <div className="w-full h-full flex flex-col">
      <div>
        <CustomLabel className="text-3xl font-display text-gray-500">
          Complaint
        </CustomLabel>
      </div>
      <div className="w-full flex flex-wrap items-center justify-end gap-2">
        <div>
          <CustomSearchBox />
        </div>
        <div className="w-64 rounded-lg bg-gray-300 p-1 flex items-center justify-between">
          <button
            onClick={() => setIsNewComplaint(false)}
            className={`w-full p-1 rounded-lg ${
              !isNewComplaint && "bg-white"
            } text-xs font-display font-medium transition-all`}
          >
            Complaints
          </button>
          <button
            onClick={() => setIsNewComplaint(true)}
            className={`w-full p-1 rounded-lg ${
              isNewComplaint && "bg-white"
            } text-xs font-display font-medium transition-all`}
          >
            New Complaint
          </button>
        </div>
      </div>
      <div className="w-full h-full mt-5">
        {isNewComplaint ? (
          <div className="w-full h-full flex flex-col">
            <div>
              <CustomInputField />
            </div>
            <div className="mt-3 h-full w-full rounded-lg">
              <CustomMarkDown height={570} />
            </div>
            <div className="mt-3 mb-5 w-full flex items-center justify-end">
              <button className="text-xs font-display text-white font-medium p-2 bg-gray-900 rounded-lg w-full md:w-32">
                Submit
              </button>
            </div>
          </div>
        ) : (
          <div>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    S.N
                  </th>
                  <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Application Date & Time
                  </th>
                  <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    User Details
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
                      Application Date & Time
                    </span>
                  </td>
                  <td className="border-b border-gray-200 bg-white text-center text-xs font-display p-2">
                    <span className="relative inline-block text-green-900 leading-tight">
                      User Details
                    </span>
                  </td>
                  <td className="border-b border-gray-200 bg-white text-center text-xs font-display p-2">
                    <span className="relative inline-block text-green-900 leading-tight">
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
                    <span className="font-semibold text-gray-900 leading-tight bg-gray-200 p-1 rounded-lg cursor-pointer flex items-center justify-center gap-2">
                      <button className="flex items-center justify-center p-1 bg-blue-400 rounded-lg">
                        <Check className="w-4 h-4 text-white" />
                      </button>
                      <button className="flex items-center justify-center p-1 bg-red-400 rounded-lg">
                        <X className="w-4 h-4 text-white" />
                      </button>
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

export default PrivateApplicationComplaintPageTemplate;
