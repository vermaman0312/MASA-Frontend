import { Check, Eye, FilePenLine, Trash, X } from "lucide-react";
import { applicationType } from "../../../../mock/application-data";
import CustomPagination from "../../../../components/custom-pagination/custom-pagination.component";

type props = {
  applicationMenuOption?: string;
  items: Array<applicationType>;
};

const PrivateApplicationTablePageComponent = ({
  applicationMenuOption,
  items,
}: props) => {
  return (
    <div>
      <table className="w-full leading-normal">
        <thead>
          <tr>
            <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
              S.N
            </th>
            <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Application Date
            </th>
            {applicationMenuOption === "approval" && (
              <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Unique Id
              </th>
            )}
            {applicationMenuOption === "approval" && (
              <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Name
              </th>
            )}
            <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Subject
            </th>
            {applicationMenuOption === "myApplication" && (
              <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Sumitted To
              </th>
            )}
            {applicationMenuOption === "myApplication" && (
              <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Contact Details
              </th>
            )}
            <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
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
          {items?.length > 0 ? null : <div>No Data</div>}
          {items.slice(0, 10).map((item, index) => {
            return (
              <tr>
                <td className="border-b border-gray-200 bg-white text-center text-xs font-display p-2">
                  <span className="relative inline-block font-semibold text-green-900 leading-tight">
                    {index + 1}
                  </span>
                </td>
                <td className="border-b border-gray-200 bg-white text-xs font-display p-2">
                  <span className="relative inline-block text-green-900 leading-tight">
                    {new Date(item.applicationDate)
                      .toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "numeric",
                        day: "numeric",
                      })
                      .replace(/\//g, "-")}
                  </span>
                </td>
                {applicationMenuOption === "approval" && (
                  <td className="border-b border-gray-200 bg-white text-xs font-display p-2">
                    <span className="relative inline-block text-green-900 leading-tight">
                      {item.userUniqueId}
                    </span>
                  </td>
                )}
                {applicationMenuOption === "approval" && (
                  <td className="border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8">
                        <img
                          className="w-full h-full rounded-full"
                          src={item.userProfileImage}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-500 whitespace-no-wrap font-display font-bold text-xs">
                          {`${item.userFirstName} ${item.userLastName}`}
                        </p>
                      </div>
                    </div>
                  </td>
                )}
                <td className="border-b border-gray-200 bg-white text-xs font-display p-2">
                  <span className="relative inline-block text-green-900 leading-tight">
                    {item.applicationSubject}
                  </span>
                </td>
                {applicationMenuOption === "myApplication" && (
                  <td className="border-b border-gray-200 bg-white text-xs font-display">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 w-8 h-8">
                        <img
                          className="w-full h-full rounded-full"
                          src={item.submitedTo.userProfileImage}
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-500 whitespace-no-wrap font-display font-bold text-xs">
                          {`${item.submitedTo.userFirstName} ${item.submitedTo.userLastName}`}
                        </p>
                      </div>
                    </div>
                  </td>
                )}
                {applicationMenuOption === "myApplication" && (
                  <td className="border-b border-gray-200 bg-white text-xs font-display">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {item.submitedTo.userEmailAddress}
                    </p>
                    <p className="text-gray-600 whitespace-no-wrap">
                      {item.submitedTo.userPhoneNumber}
                    </p>
                  </td>
                )}
                <td className="border-b border-gray-200 bg-white text-xs font-display p-2">
                  <span
                    className={`relative inline-block font-semibold ${
                      item.applicationStatus === "Cancelled"
                        ? "text-red-500"
                        : item.applicationStatus === "Pending"
                        ? "text-yellow-600"
                        : "text-blue-600"
                    } leading-tight`}
                  >
                    <span className="relative">{item.applicationStatus}</span>
                  </span>
                </td>
                <td className="border-b border-gray-200 bg-white text-center text-xs font-display p-2">
                  <span className="relative inline-block font-semibold text-gray-900 leading-tight bg-gray-200 p-1 rounded-lg cursor-pointer">
                    <button className="flex items-center justify-center p-1 bg-green-300 rounded-lg">
                      <Eye className="w-4 h-4 text-gray-700" />
                    </button>
                  </span>
                </td>
                <td className="border-b border-gray-200 bg-white text-right text-xs font-display p-2">
                  {applicationMenuOption === "approval" ? (
                    <span className="font-semibold text-gray-900 leading-tight bg-gray-200 p-1 rounded-lg cursor-pointer flex items-center justify-center gap-2">
                      <button className="flex items-center justify-center p-1 bg-blue-400 rounded-lg">
                        <Check className="w-4 h-4 text-white" />
                      </button>
                      <button className="flex items-center justify-center p-1 bg-red-400 rounded-lg">
                        <X className="w-4 h-4 text-white" />
                      </button>
                    </span>
                  ) : (
                    <span className="bg-gray-200 p-1 rounded-lg cursor-pointer flex items-center justify-center gap-2">
                      <button className="flex items-center justify-center p-1 bg-blue-400 rounded-lg">
                        <FilePenLine className="w-4 h-4 text-white" />
                      </button>
                      <button className="flex items-center justify-center p-1 bg-red-400 rounded-lg">
                        <X className="w-4 h-4 text-white" />
                      </button>
                      <button className="flex items-center justify-center p-1 bg-red-400 rounded-lg">
                        <Trash className="w-4 h-4 text-white" />
                      </button>
                    </span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <CustomPagination
          minimumLength={1}
          maximumLength={10}
          totalLength={items.length}
        />
      </div>
    </div>
  );
};

export default PrivateApplicationTablePageComponent;
