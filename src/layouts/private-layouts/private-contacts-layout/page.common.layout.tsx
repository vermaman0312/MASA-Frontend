import React, { useState } from "react";
import {
  PrivateContactCardDetailPageTemplate,
  PrivateContactHeadingPageTemplate,
  PrivateContactNotFoundPageTemplate,
} from "../../../templates/private-templates/private-contact-template/page.student.template";
import { allUserList } from "../../../mock/user-data";

const PrivateContactPageLayout = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const filteredList = allUserList.filter((contact) =>
    Object.values(contact).some((value) =>
      value.toLowerCase().includes(inputValue.toLowerCase())
    )
  );

  return (
    <div className="w-full h-full flex flex-col gap-1 scroll-container">
      <div className="w-full flex">
        <PrivateContactHeadingPageTemplate
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>

      {filteredList.length > 0 ? (
        <div className="w-full h-[200px] grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-7 gap-4 place-items-center mt-5">
          {filteredList.map((user, index) => (
            <PrivateContactCardDetailPageTemplate
              key={index}
              firstName={user.userFirstName}
              lastName={user.userLastName}
              userProfileImage={user.userProfileImage}
              emailAddress={user.userEmailAddress}
              phoneNumber={user.userPhoneNumber}
              role={user.userDesignation}
              buttonTitle="View Profile"
              onClick={() => alert("view")}
            />
          ))}
        </div>
      ) : (
        <PrivateContactNotFoundPageTemplate />
      )}
    </div>
  );
};

export default PrivateContactPageLayout;
