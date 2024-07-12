import { ArrowLeft } from "lucide-react";

type props = {
  onClickBack?: () => void;
  onClickForm?: () => void;
  onClickExcel?: () => void;
  isFillForm?: boolean;
};

const PrivateUserAddFormHeaderPageComponent = ({
  onClickBack,
  onClickForm,
  onClickExcel,
  isFillForm,
}: props) => {
  return (
    <div className="w-full flex items-center justify-between">
      <button
        onClick={onClickBack}
        className="flex items-center justify-center w-[2rem] p-1 rounded-lg bg-gray-900"
      >
        <ArrowLeft className="text-white" />
      </button>
      <div className="bg-gray-300 md:hidden w-64 md:w-[25rem] flex items-center justify-between p-1 rounded-lg">
        <button
          onClick={onClickForm}
          className={`text-sm font-display w-full ${
            isFillForm
              ? "bg-gray-700 text-white"
              : "bg-transparent text-gray-900"
          } p-2 rounded-lg font-medium slide-in-from-right transition-all`}
        >
          Form Details
        </button>
        <button
          onClick={onClickExcel}
          className={`text-sm font-display w-full ${
            !isFillForm
              ? "bg-gray-700 text-white"
              : "bg-transparent text-gray-900"
          } p-2 rounded-lg font-medium slide-in-from-right transition-all`}
        >
          Form Excel
        </button>
      </div>
    </div>
  );
};

export default PrivateUserAddFormHeaderPageComponent;
