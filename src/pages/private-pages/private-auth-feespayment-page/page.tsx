import CustomSideBar from "../../../components/custom-side-bar/custom-sidebar.component";
import PrivateFeesPaymentPageLayout from "../../../layouts/private-layouts/private-fees-payment-layout/page.common.layout";
import { SmartphoneNfc } from "lucide-react";
import { CustomLabel } from "../../../components/custom-label/custom-label.component";

const PrivateAuthFeesPaymentPage = () => {
  return (
    <CustomSideBar>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <SmartphoneNfc />
          <CustomLabel className="text-xl font-display font-bold">
            Fees payment
          </CustomLabel>
        </div>
      </div>
      <div className="border w-full h-full mt-5">
        <PrivateFeesPaymentPageLayout />
      </div>
    </CustomSideBar>
  );
};

export default PrivateAuthFeesPaymentPage;
