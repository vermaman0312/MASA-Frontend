import PrivateUserDetailsPageTemplate from "./page.user-details.template";
import "../../../css/scroll-container.css";
import { useState } from "react";
import PrivateUserAddFormPageTemplate from "./page.add-users.template";

const PrivateUsersPageTemplate = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="w-full h-full">
      {isOpen ? (
        <div>
          <PrivateUserAddFormPageTemplate
            onClickBack={() => setIsOpen(false)}
          />
        </div>
      ) : (
        <div>
          <PrivateUserDetailsPageTemplate
            onClickAddUser={() => setIsOpen(true)}
          />
        </div>
      )}
    </div>
  );
};

export default PrivateUsersPageTemplate;
