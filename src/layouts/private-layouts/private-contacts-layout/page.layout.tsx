import PrivateContactPageTemplate from "../../../templates/private-templates/private-contact-template/page.template";
import { allUserList } from "../../../mock/user-data";

const PrivateContactPageLayout = () => {
  return (
    <div className="w-full h-full">
      <PrivateContactPageTemplate items={allUserList} />
    </div>
  );
};

export default PrivateContactPageLayout;
