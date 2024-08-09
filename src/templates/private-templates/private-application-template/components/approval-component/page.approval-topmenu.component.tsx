import { useRef } from "react";
import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";

type props = {
  loggedInUserRole?: string;
  applicationMenu?: string;
  onClickMyApproval?: () => void;
  onClickWriteApplication?: () => void;
  onClickApplyLeave?: () => void;
  onClickForgotIdCard?: () => void;
  onClickWorkFromHome?: () => void;
  onClickChangeTimeTable?: () => void;
  onClickComplaint?: () => void;
  onClickRegisterQueries?: () => void;
};

const PrivateApprovalTopMenuPageComponent = ({
  loggedInUserRole,
  applicationMenu,
  onClickMyApproval,
  onClickWriteApplication,
  onClickApplyLeave,
  onClickForgotIdCard,
  onClickWorkFromHome,
  onClickChangeTimeTable,
  onClickComplaint,
  onClickRegisterQueries,
}: props) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScrollToCenter = (event: MouseEvent) => {
    const element = event.currentTarget as HTMLElement;
    const container = scrollContainerRef.current;
    if (!container || !element) {
      console.error("Scroll container is not available");
      return;
    }
    const containerWidth = container.offsetWidth;
    const elementLeft = element.offsetLeft;
    const elementWidth = element.offsetWidth;
    const targetScrollLeft =
      elementLeft - containerWidth / 2 + elementWidth / 2;
    const duration = 500;
    animateScroll(container, targetScrollLeft, duration);
  };

  const animateScroll = (
    container: HTMLElement,
    target: number,
    duration: number
  ) => {
    const start = container.scrollLeft;
    const change = target - start;
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      container.scrollLeft = start + change * easeInOutQuad(progress);
      if (timeElapsed < duration) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };
  return (
    <div
      ref={scrollContainerRef}
      className="w-full md:hidden rounded-lg flex items-center justify-start gap-2 scroll-container"
    >
      <CustomLabel
        onClick={(e) => {
          handleScrollToCenter(e as unknown as MouseEvent);
          onClickMyApproval && onClickMyApproval();
        }}
        className={`cursor-pointer font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          applicationMenu === "myApproval"
            ? "bg-gray-700 text-white"
            : "bg-gray-200"
        }`}
      >
        My approval
      </CustomLabel>
      <CustomLabel
        onClick={(e) => {
          handleScrollToCenter(e as unknown as MouseEvent);
          onClickWriteApplication && onClickWriteApplication();
        }}
        className={`cursor-pointer font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          applicationMenu === "writeApplication"
            ? "bg-gray-700 text-white"
            : "bg-gray-200"
        }`}
      >
        Write application
      </CustomLabel>
      <CustomLabel
        onClick={(e) => {
          handleScrollToCenter(e as unknown as MouseEvent);
          onClickApplyLeave && onClickApplyLeave();
        }}
        className={`cursor-pointer font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          applicationMenu === "applyLeave"
            ? "bg-gray-700 text-white"
            : "bg-gray-200"
        }`}
      >
        Apply leave
      </CustomLabel>
      <CustomLabel
        onClick={(e) => {
          handleScrollToCenter(e as unknown as MouseEvent);
          onClickForgotIdCard && onClickForgotIdCard();
        }}
        className={`cursor-pointer font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          applicationMenu === "forgotIdCard"
            ? "bg-gray-700 text-white"
            : "bg-gray-200"
        }`}
      >
        Forgot ID card
      </CustomLabel>
      {loggedInUserRole?.toLocaleLowerCase() !== "student" && (
        <CustomLabel
          onClick={(e) => {
            handleScrollToCenter(e as unknown as MouseEvent);
            onClickWorkFromHome && onClickWorkFromHome();
          }}
          className={`cursor-pointer font-display text-xs whitespace-nowrap p-2 rounded-lg ${
            applicationMenu === "workFromHome"
              ? "bg-gray-700 text-white"
              : "bg-gray-200"
          }`}
        >
          Work from home
        </CustomLabel>
      )}
      <CustomLabel
        onClick={(e) => {
          handleScrollToCenter(e as unknown as MouseEvent);
          onClickChangeTimeTable && onClickChangeTimeTable();
        }}
        className={`cursor-pointer font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          applicationMenu === "changeTimeTable"
            ? "bg-gray-700 text-white"
            : "bg-gray-200"
        }`}
      >
        Change time table
      </CustomLabel>
      <CustomLabel
        onClick={(e) => {
          handleScrollToCenter(e as unknown as MouseEvent);
          onClickComplaint && onClickComplaint();
        }}
        className={`cursor-pointer font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          applicationMenu === "complaint"
            ? "bg-gray-700 text-white"
            : "bg-gray-200"
        }`}
      >
        Complaint
      </CustomLabel>
      <CustomLabel
        onClick={(e) => {
          handleScrollToCenter(e as unknown as MouseEvent);
          onClickRegisterQueries && onClickRegisterQueries();
        }}
        className={`cursor-pointer font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          applicationMenu === "registerQueries"
            ? "bg-gray-700 text-white"
            : "bg-gray-200"
        }`}
      >
        Register queries
      </CustomLabel>
    </div>
  );
};

export default PrivateApprovalTopMenuPageComponent;
