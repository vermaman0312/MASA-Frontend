import React, { useState } from "react";
import { userType } from "../../../mock/user-data";
import PrivateContactHeadingPageComponent from "./components/page.contactheading.component";
import PrivateContactNotFoundPageComponent from "./components/page.contactnotfound.component";
import PrivateContactCardDetailPageComponent from "./components/page.contactdetails.component";

type props = {
  items?: Array<userType>;
};

const PrivateContactPageTemplate = ({ items }: props) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };
  const filteredList =
    items &&
    items.filter((contact) =>
      Object.values(contact).some((value) =>
        value.toLowerCase().includes(inputValue.toLowerCase())
      )
    );

  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-end">
        <div>
          <PrivateContactHeadingPageComponent
            onChange={handleInputChange}
            value={inputValue}
            onCancel={() => setInputValue("")}
          />
        </div>
      </div>
      <div className="mt-5">
        {filteredList && filteredList?.length > 0 ? (
          <div className="w-full grid grid-cols-2 md:grid-cols-8 gap-2 p-1">
            {filteredList.map((user, index) => {
              return (
                <PrivateContactCardDetailPageComponent
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
              );
            })}
          </div>
        ) : (
          <div className="h-full">
            <PrivateContactNotFoundPageComponent />
          </div>
        )}
      </div>
    </div>
  );
};

export default PrivateContactPageTemplate;
