import { useRef } from "react";
import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";

type props = {
  option?: string;
  onClickDashboardSetting?: () => void;
  onClickEditProfile?: () => void;
  onClickNotificationSetting?: () => void;
  onClickSetup2FA?: () => void;
  onClickChangePassword?: () => void;
  onClickPrivacyPolicies?: () => void;
};

const PrivateSettingTopMenuOptionPageComponent = ({
  option,
  onClickDashboardSetting,
  onClickEditProfile,
  onClickNotificationSetting,
  onClickSetup2FA,
  onClickChangePassword,
  onClickPrivacyPolicies,
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
      className="w-full md:hidden overflow-x-auto scroll-container flex items-center justify-start gap-2"
    >
      <CustomLabel
        onClick={(e) => {
          handleScrollToCenter(e as unknown as MouseEvent);
          onClickDashboardSetting && onClickDashboardSetting();
        }}
        className={`cursor-pointer text-gray-600 font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          option === "dashboardSetting"
            ? "bg-gray-600 text-white"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        Dashboard setting
      </CustomLabel>
      <CustomLabel
        onClick={(e) => {
          handleScrollToCenter(e as unknown as MouseEvent);
          onClickEditProfile && onClickEditProfile();
        }}
        className={`cursor-pointer text-gray-600 font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          option === "editProfile"
            ? "bg-gray-600 text-white"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        Edit profile
      </CustomLabel>
      <CustomLabel
        onClick={(e) => {
          handleScrollToCenter(e as unknown as MouseEvent);
          onClickNotificationSetting && onClickNotificationSetting();
        }}
        className={`cursor-pointer text-gray-600 font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          option === "notificationSetting"
            ? "bg-gray-600 text-white"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        Notification setting
      </CustomLabel>
      <CustomLabel
        onClick={(e) => {
          handleScrollToCenter(e as unknown as MouseEvent);
          onClickSetup2FA && onClickSetup2FA();
        }}
        className={`cursor-pointer text-gray-600 font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          option === "setup2FA"
            ? "bg-gray-600 text-white"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        Setup 2FA
      </CustomLabel>
      <CustomLabel
        onClick={(e) => {
          handleScrollToCenter(e as unknown as MouseEvent);
          onClickChangePassword && onClickChangePassword();
        }}
        className={`cursor-pointer text-gray-600 font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          option === "changePassword"
            ? "bg-gray-600 text-white"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        Change password
      </CustomLabel>
      <CustomLabel
        onClick={(e) => {
          handleScrollToCenter(e as unknown as MouseEvent);
          onClickPrivacyPolicies && onClickPrivacyPolicies();
        }}
        className={`cursor-pointer text-gray-600 font-display text-xs whitespace-nowrap p-2 rounded-lg ${
          option === "privacyPolicies"
            ? "bg-gray-600 text-white"
            : "bg-gray-200 text-gray-600"
        }`}
      >
        Privacy policies
      </CustomLabel>
    </div>
  );
};

export default PrivateSettingTopMenuOptionPageComponent;
