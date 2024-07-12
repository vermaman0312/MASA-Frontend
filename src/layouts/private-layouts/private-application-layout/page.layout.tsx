import { useCallback, useState } from "react";
import PrivateApplicationPageTemplate from "../../../templates/private-templates/private-application-template/page.template";
import PrivateApplicationSideMenuPageComponent from "../../../templates/private-templates/private-application-template/components/page.application-sidemenu.component";
import PrivateApplicationTopMenuPageComponent from "../../../templates/private-templates/private-application-template/components/page.application-topmenu.component";

const PrivateApplicationPageLayout = () => {
  const [applicationMenu, setApplicationMenu] = useState<string>("myApproval");
  const handleSelectApplicationMenu = useCallback(
    (value: string) => {
      setApplicationMenu(value);
    },
    [setApplicationMenu]
  );
  return (
    <div className="w-full h-full flex items-center justify-start gap-2">
      <div className="h-full hidden md:block">
        <PrivateApplicationSideMenuPageComponent
          applicationMenu={applicationMenu}
          onClickMyApproval={() => handleSelectApplicationMenu("myApproval")}
          onClickWriteApplication={() =>
            handleSelectApplicationMenu("writeApplication")
          }
          onClickApplyLeave={() => handleSelectApplicationMenu("applyLeave")}
          onClickForgotIdCard={() =>
            handleSelectApplicationMenu("forgotIdCard")
          }
          onClickWorkFromHome={() =>
            handleSelectApplicationMenu("workFromHome")
          }
          onClickChangeTimeTable={() =>
            handleSelectApplicationMenu("changeTimeTable")
          }
          onClickComplaint={() => handleSelectApplicationMenu("complaint")}
          onClickRegisterQueries={() =>
            handleSelectApplicationMenu("registerQueries")
          }
        />
      </div>
      <div className="w-full h-full">
        <div className="w-full block md:hidden overflow-x-auto scroll-container">
          <PrivateApplicationTopMenuPageComponent
            applicationMenu={applicationMenu}
            onClickMyApproval={() => handleSelectApplicationMenu("myApproval")}
            onClickWriteApplication={() =>
              handleSelectApplicationMenu("writeApplication")
            }
            onClickApplyLeave={() => handleSelectApplicationMenu("applyLeave")}
            onClickForgotIdCard={() =>
              handleSelectApplicationMenu("forgotIdCard")
            }
            onClickWorkFromHome={() =>
              handleSelectApplicationMenu("workFromHome")
            }
            onClickChangeTimeTable={() =>
              handleSelectApplicationMenu("changeTimeTable")
            }
            onClickComplaint={() => handleSelectApplicationMenu("complaint")}
            onClickRegisterQueries={() =>
              handleSelectApplicationMenu("registerQueries")
            }
          />
        </div>

        <div className="mt-3 md:mt-0 w-full h-full overflow-y-auto scroll-container">
          <PrivateApplicationPageTemplate applicationMenu={applicationMenu} />
        </div>
      </div>
    </div>
  );
};

export default PrivateApplicationPageLayout;
