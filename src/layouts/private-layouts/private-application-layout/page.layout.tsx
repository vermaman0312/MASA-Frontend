import { useCallback } from "react";
import PrivateApplicationPageTemplate from "../../../templates/private-templates/private-application-template/page.template";
import PrivateApplicationSideMenuPageComponent from "../../../templates/private-templates/private-application-template/components/approval-component/page.approval-sidemenu.component";
import PrivateApplicationTopMenuPageComponent from "../../../templates/private-templates/private-application-template/components/approval-component/page.approval-topmenu.component";
import { useDispatch, useSelector } from "react-redux";
import { subApplicationMenuAction } from "../../../redux/actions/private-actions/private.application.action";
import { RootState } from "../../../redux/redux-index";

const PrivateApplicationPageLayout = () => {
  const dispatch = useDispatch();
  const applicationMenu = useSelector(
    (state: RootState) => state.applicationMenu.subApplicationMenu
  ) as string | undefined;
  const handleSelectApplicationMenu = useCallback(
    (value: string) => {
      dispatch(subApplicationMenuAction(value));
    },
    [dispatch]
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
