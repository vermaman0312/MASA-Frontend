import PublicAuth2FAPageTemplate from "../../../templates/public-templates/public-auth-2FA-template/page.template";
import PublicAuthPostPageTemplate from "../../../templates/public-templates/public-auth-poster-template/page.template";

const PublicAuth2FaPageLayout = () => {
  return (
    <div className="w-full h-screen grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
      <PublicAuthPostPageTemplate />
      <PublicAuth2FAPageTemplate />
    </div>
  );
};

export default PublicAuth2FaPageLayout;
