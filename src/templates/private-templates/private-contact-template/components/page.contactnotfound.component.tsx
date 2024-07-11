import ContactIllustration from "../../../../assets/illustrations/contact-illustration";
import { CustomLabel } from "../../../../components/custom-label/custom-label.component";

const PrivateContactNotFoundPageComponent = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center transition-all">
      <div className="w-[18rem]">
        <ContactIllustration />
      </div>
      <div>
        <CustomLabel className="text-4xl font-display font-medium">
          No users found...
        </CustomLabel>
      </div>
      <div>
        <CustomLabel className="text-xs font-display text-center">
          Please contact with admistration!
        </CustomLabel>
      </div>
    </div>
  );
};

export default PrivateContactNotFoundPageComponent;
