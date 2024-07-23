import { Check, Eye, X } from "lucide-react";
import React from "react";

const PrivateChangeTimeTableRequestsTablePageComponent = () => {
  return (
    <div className="w-full">
      <table className="w-full leading-normal">
        <thead>
          <tr>
            <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
              S.N
            </th>
            <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Requested Date & Time
            </th>
            <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
              User Details
            </th>
            <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
              From Time
            </th>
            <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
              To Time
            </th>
            <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Reason
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
            <td className="border-b border-gray-200 text-center bg-white text-xs font-display p-2">
              <span className="relative inline-block font-semibold text-green-900 leading-tight">
                S.N
              </span>
            </td>
            <td className="border-b border-gray-200 text-center bg-white text-xs font-display p-2">
              <span className="relative inline-block text-green-900 leading-tight">
                Requested Date & Time
              </span>
            </td>
            <td className="border-b border-gray-200 text-center bg-white text-xs font-display p-2">
              <span className="relative inline-block font-semibold text-green-900 leading-tight">
                User Details
              </span>
            </td>
            <td className="border-b border-gray-200 text-center bg-white text-xs font-display p-2">
              <span className="relative inline-block text-green-900 leading-tight">
                From Time
              </span>
            </td>
            <td className="border-b border-gray-200 text-center bg-white text-xs font-display p-2">
              <span className="relative inline-block text-green-900 leading-tight">
                To Time
              </span>
            </td>
            <td className="border-b border-gray-200 text-center bg-white text-xs font-display p-2">
              <span className="relative inline-block text-green-900 leading-tight">
                Reason
              </span>
            </td>
            <td className="border-b border-gray-200 text-center bg-white text-xs font-display p-2">
              <span className="relative inline-block font-semibold text-green-900 leading-tight">
                Status
              </span>
            </td>
            <td className="border-b border-gray-200 text-center bg-white text-xs font-display p-2">
              <span className="relative inline-block font-semibold text-gray-900 leading-tight bg-gray-200 p-1 rounded-lg cursor-pointer">
                <button
                  onClick={() => alert("Viewed")}
                  className="flex items-center justify-center p-1 bg-green-300 rounded-lg"
                >
                  <Eye className="w-4 h-4 text-gray-700" />
                </button>
              </span>
            </td>
            <td className="border-b border-gray-200 text-center bg-white text-xs font-display p-2">
              <span className="font-semibold text-gray-900 leading-tight bg-gray-200 p-1 rounded-lg cursor-pointer flex items-center justify-center gap-2">
                <button
                  onClick={() => alert("Approve Request")}
                  className="flex items-center justify-center p-1 bg-blue-400 rounded-lg"
                >
                  <Check className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => alert("Reject Request")}
                  className="flex items-center justify-center p-1 bg-red-400 rounded-lg"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PrivateChangeTimeTableRequestsTablePageComponent;
