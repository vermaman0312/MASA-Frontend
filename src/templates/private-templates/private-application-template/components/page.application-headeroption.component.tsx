import CustomSearchBox from "../../../../components/custom-searchbox/custom-searchbox.component";

type props = {
  authRole?: string;
  applicationMenuOption?: string;
  onClickApproval?: () => void;
  onClickMyApplication?: () => void;
  onClickNewApplication?: () => void;
};

const PrivateApplicationHeaderOptionPageTemplate = ({
  authRole,
  applicationMenuOption,
  onClickApproval,
  onClickMyApplication,
  onClickNewApplication,
}: props) => {
  return (
    <div className="w-full flex flex-wrap items-center justify-end gap-2">
      {applicationMenuOption !== "newApplication" && (
        <div>
          <CustomSearchBox />
        </div>
      )}
      <div className="bg-gray-200 flex items-center justify-between p-1 rounded-lg">
        {authRole && authRole.toLowerCase() !== "student" && (
          <button
            onClick={onClickApproval}
            className={`w-32 text-xs font-display ${
              applicationMenuOption === "approval" && "bg-white"
            } p-1 rounded-lg font-medium text-gray-600`}
          >
            Approval
          </button>
        )}
        <button
          onClick={onClickMyApplication}
          className={`w-32 text-xs font-display ${
            applicationMenuOption === "myApplication" && "bg-white"
          } p-1 rounded-lg font-medium text-gray-600`}
        >
          My application
        </button>
        <button
          onClick={onClickNewApplication}
          className={`w-32 text-xs font-display ${
            applicationMenuOption === "newApplication" && "bg-white"
          } p-1 rounded-lg font-medium text-gray-600`}
        >
          New application
        </button>
      </div>
    </div>
  );
};

export default PrivateApplicationHeaderOptionPageTemplate;
