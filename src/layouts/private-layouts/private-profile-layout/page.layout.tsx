import { CustomLabel } from "../../../components/custom-label/custom-label.component";
import CustomSignatureName from "../../../components/custom-signature-name/custom-signature-name.component";

const PrivateProfilePageLayout = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-1">
        <div className="h-full w-full md:w-[30rem]">
          <div className="w-full h-[10rem] p-1">
            <div className="w-full h-full bg-white rounded-xl shadow-md shadow-gray-500">
              <CustomSignatureName userName="Aman Verma" />
            </div>
            <div className="w-[5rem] h-[5rem] bg-gray-200 rounded-full relative -top-8 left-[5%] shadow-md shadow-gray-500 z-50">
              <img
                className="w-full h-full rounded-full"
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt=""
              />
            </div>
            <div className="w-full relative -top-16 flex items-center justify-end">
              <CustomLabel className="font-display text-lg text-gray-500">
                Aman Verma
              </CustomLabel>
            </div>
          </div>
        </div>
        <div className="border h-full w-full"></div>
      </div>
    </div>
  );
};

export default PrivateProfilePageLayout;
