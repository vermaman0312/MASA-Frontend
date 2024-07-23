import { Check, Eye, X } from "lucide-react";
import { forgotIdCardRequestType } from "../../../../../mock/forgotidcard-requests";
import CustomNotFound from "../../../../../components/custom-not-found/custom-not-found.component";

type props = {
  items: Array<forgotIdCardRequestType>;
};

const PrivateForgotIdCardRequestTablePageComponent = ({ items }: props) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start overflow-x-auto scroll-container">
      {items.length > 0 ? (
        <table className="w-full">
          <thead>
            <tr>
              <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
                S.N
              </th>
              <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Requested Date
              </th>
              <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Requested Time
              </th>
              <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Unique ID
              </th>
              <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Name
              </th>
              <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Email Address
              </th>
              <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Phone Number
              </th>
              <th className="font-display p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Comment
              </th>
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
            {items.map((item, index) => {
              return (
                <tr>
                  <td className="border-b border-gray-200 text-center bg-white text-xs font-display p-2">
                    <span className="relative inline-block text-green-900 leading-tight">
                      {index + 1}
                    </span>
                  </td>
                  <td className="border-b border-gray-200 bg-white text-xs font-display p-2">
                    <span className="relative inline-block text-green-900 leading-tight">
                      {item.requestedDate
                        .toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "numeric",
                          day: "numeric",
                        })
                        .replace(/\//g, "-")}
                    </span>
                  </td>
                  <td className="border-b border-gray-200 bg-white text-xs font-display p-2">
                    <span className="relative inline-block text-green-900 leading-tight">
                      {item.requestedTime.toLocaleTimeString()}
                    </span>
                  </td>
                  <td className="border-b border-gray-200 bg-white text-xs font-display p-2">
                    <span className="relative inline-block text-green-900 leading-tight">
                      {item.userUniqueId}
                    </span>
                  </td>
                  <td className="border-b border-gray-200 bg-white text-xs font-display">
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
                  <td className="border-b border-gray-200 bg-white text-xs font-display p-2">
                    <span className="relative inline-block text-green-900 leading-tight">
                      {item.userEmailAddress}
                    </span>
                  </td>
                  <td className="border-b border-gray-200 bg-white text-xs font-display p-2">
                    <span className="relative inline-block text-green-900 leading-tight">
                      {item.userPhoneNumber}
                    </span>
                  </td>
                  <td className="border-b border-gray-200 bg-white text-xs font-display p-2">
                    <span className="relative inline-block text-green-900 leading-tight">
                      {item.comments}
                    </span>
                  </td>
                  <td className="border-b border-gray-200 bg-white text-xs font-display p-2">
                    <span
                      className={`relative inline-block font-semibold ${
                        item.requestStatus === "Cancelled"
                          ? "text-red-500"
                          : item.requestStatus === "Pending"
                          ? "text-yellow-600"
                          : "text-blue-600"
                      } leading-tight`}
                    >
                      <span className="relative">{item.requestStatus}</span>
                    </span>
                  </td>
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
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <CustomNotFound />
        </div>
      )}
    </div>
  );
};

export default PrivateForgotIdCardRequestTablePageComponent;
