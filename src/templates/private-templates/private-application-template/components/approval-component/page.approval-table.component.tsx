import { myApprovalType } from "../../../../../mock/user-leave-wfh";
import {
  Check,
  EllipsisVertical,
  Eye,
  FilePenLine,
  SquareX,
  Trash2,
  View,
  X,
} from "lucide-react";
import CustomMenuDropdown from "../../../../../components/custom-menu-dropdown/custom-menu-dropdown.component";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import CustomPagination from "../../../../../components/custom-pagination/custom-pagination.component";

type props = {
  optionValue?: boolean;
  items?: Array<myApprovalType>;
  tablePagination?: boolean;
  row?: number;
};

const PrivateApprovalTablePageComponent = ({
  optionValue,
  items,
  tablePagination,
  row,
}: props) => {
  return (
    <div className="w-full">
      <table className="w-full leading-normal">
        <thead>
          <tr>
            <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
              S.N
            </th>
            {!optionValue && (
              <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Unique ID
              </th>
            )}
            {!optionValue && (
              <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Name
              </th>
            )}
            <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Date
            </th>
            <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Type
            </th>
            <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              From
            </th>
            <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              To
            </th>
            <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Number of days
            </th>
            {optionValue && (
              <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Approved By
              </th>
            )}
            <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Status
            </th>
            <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Reason
            </th>
            {!optionValue && (
              <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                View
              </th>
            )}
            <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
              {optionValue ? "More" : "Action"}
            </th>
          </tr>
        </thead>
        <tbody>
          {items && items.length > 0 ? (
            <>
              {items.map((data, index) => {
                return (
                  <tr>
                    <td className="border-b border-gray-200 text-center bg-white text-xs font-display p-2">
                      <span className="relative inline-block font-semibold text-green-900 leading-tight">
                        {index + 1}
                      </span>
                    </td>
                    {!optionValue && (
                      <td className="border-b border-gray-200 text-left bg-white text-xs font-display p-2">
                        <span className="relative inline-block text-green-900 leading-tight">
                          {data.userUniqueId}
                        </span>
                      </td>
                    )}
                    {!optionValue && (
                      <td className="border-b border-gray-200 bg-white text-xs font-display p-2">
                        <span className="relative inline-block text-green-900 leading-tight">
                          {data.userName}
                        </span>
                      </td>
                    )}
                    <td className="border-b border-gray-200 bg-white text-xs font-display p-2">
                      <span className="relative inline-block text-green-900 leading-tight">
                        {data.requestedDate}
                      </span>
                    </td>
                    <td className="border-b border-gray-200 bg-white text-xs font-display p-2">
                      <span className="relative inline-block font-semibold text-green-900 leading-tight">
                        <span className="relative">{data.type}</span>
                      </span>
                    </td>
                    <td className="border-b border-gray-200 bg-white text-xs font-display p-2">
                      <span className="relative inline-block text-green-900 leading-tight">
                        <span className="relative">{data.FromDate}</span>
                      </span>
                    </td>
                    <td className="border-b border-gray-200 bg-white text-xs font-display p-2">
                      <span className="relative inline-block text-green-900 leading-tight">
                        <span className="relative">{data.ToDate}</span>
                      </span>
                    </td>
                    <td className="border-b border-gray-200 text-center bg-white text-xs font-display p-2">
                      <span className="relative inline-block text-green-900 leading-tight">
                        <span className="relative">{data.numberOfDays}</span>
                      </span>
                    </td>
                    {optionValue && (
                      <td className="border-b border-gray-200 bg-white text-xs font-display p-2">
                        <span className="relative inline-block font-semibold text-green-900 leading-tight">
                          <span className="relative">{data.approvedBy}</span>
                        </span>
                      </td>
                    )}
                    <td className="border-b border-gray-200 bg-white text-xs font-display p-2">
                      <span
                        className={`relative inline-block font-semibold ${
                          data.Status === "Cancelled"
                            ? "text-red-500"
                            : data.Status === "Pending"
                            ? "text-yellow-600"
                            : "text-blue-600"
                        } leading-tight`}
                      >
                        <span className="relative">{data.Status}</span>
                      </span>
                    </td>
                    <td className="border-b border-gray-200 bg-white text-xs font-display p-2">
                      <span className="relative word-break">{data.reason}</span>
                    </td>
                    {!optionValue && (
                      <td className="border-b border-gray-200 text-center bg-white text-xs font-display p-2">
                        <span className="relative inline-block font-semibold text-gray-900 leading-tight bg-gray-200 p-1 rounded-lg cursor-pointer">
                          <button
                            onClick={() => alert("View Request")}
                            className="flex items-center justify-center p-1 bg-green-300 rounded-lg"
                          >
                            <Eye className="w-4 h-4 text-gray-700" />
                          </button>
                        </span>
                      </td>
                    )}
                    <td className="border-b border-gray-200 text-center bg-white text-xs font-display p-2">
                      {optionValue ? (
                        <CustomMenuDropdown
                          buttonComponent={
                            <EllipsisVertical className="w-4 h-4 cursor-pointer" />
                          }
                          marginRight="mr-6"
                        >
                          <DropdownMenuItem
                            onClick={() => alert("View Request")}
                            className="hover:bg-gray-100 cursor-pointer gap-2 flex p-1.5 rounded-lg"
                          >
                            <View className="w-4 h-4" />
                            <span className="font-display text-xs">
                              View Request
                            </span>
                          </DropdownMenuItem>
                          {data.Status === "Pending" && (
                            <DropdownMenuItem
                              onClick={() => alert("Edit Request")}
                              className="hover:bg-gray-100 cursor-pointer gap-2 flex p-1.5 rounded-lg"
                            >
                              <FilePenLine className="w-4 h-4" />
                              <span className="font-display text-xs">
                                Edit Request
                              </span>
                            </DropdownMenuItem>
                          )}
                          {data.Status !== "Cancelled" && (
                            <DropdownMenuItem
                              onClick={() => alert("Cancel Request")}
                              className="hover:bg-gray-100 cursor-pointer gap-2 text-yellow-500 flex p-1.5 rounded-lg"
                            >
                              <SquareX className="w-4 h-4" />
                              <span className="font-display text-xs">
                                Cancel Request
                              </span>
                            </DropdownMenuItem>
                          )}
                          {data.Status === "Pending" && (
                            <DropdownMenuItem
                              onClick={() => alert("Delete Request")}
                              className="hover:bg-gray-100 cursor-pointer gap-2 text-red-500 flex p-1.5 rounded-lg"
                            >
                              <Trash2 className="w-4 h-4" />
                              <span className="font-display text-xs">
                                Delete Request
                              </span>
                            </DropdownMenuItem>
                          )}
                        </CustomMenuDropdown>
                      ) : (
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
                      )}
                    </td>
                  </tr>
                );
              })}
            </>
          ) : (
            <div>No User</div>
          )}
        </tbody>
      </table>
      {tablePagination && (
        <div>
          <CustomPagination
            totalLength={items?.length}
            minimumLength={1}
            maximumLength={row}
            onClickPrev={() => alert("prev")}
            onClickNext={() => alert("Next")}
          />
        </div>
      )}
    </div>
  );
};

export default PrivateApprovalTablePageComponent;
