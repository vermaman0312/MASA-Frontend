import { KeyRound, Loader } from "lucide-react";
import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";
import { useCallback, useState } from "react";
import CustomDialogBox2 from "../../../../../components/custom-dialogbox/customDialogBox2.component";
import { generate2FAPasskey } from "../../../../../utils/generate-2FA-passkey/generate-passkey";
import jsPDF from "jspdf";
import { useGeneratePasskeyMutation } from "../../../../../api/mutations/private-mutation/settings/setup-2FA-generate-passkey.mutation";
import { TBodyApiType } from "../../../../../api/models/api.body.model";

type props = {
  passkey: string;
};

const PrivateSetup2FAPasswordlessSignInPasskeyPageComponent = ({
  passkey,
}: props) => {
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const newPasskey = generate2FAPasskey(
    localStorage.getItem("token") as string
  );
  const mutate = useGeneratePasskeyMutation();

  const downloadPDF = () => {
    const doc = new jsPDF({
      unit: "mm",
      format: "a4",
    });
    const margin = 10;
    const padding = 5;
    const textWidth = doc.internal.pageSize.width - 2 * margin;
    const titleHeight = 10;
    const textHeight = 20;
    const contentStartY = margin + titleHeight + padding;
    const backgroundColor = [255, 255, 204];
    const borderColor = [0, 0, 255];
    const borderWidth = 1;
    const pageHeight = doc.internal.pageSize.height;
    const footerMargin = 20;
    const footerY = pageHeight - footerMargin;
    doc.setFillColor(
      backgroundColor[0],
      backgroundColor[1],
      backgroundColor[2]
    );
    doc.rect(
      margin,
      margin,
      textWidth,
      titleHeight + textHeight + padding,
      "F"
    );
    doc.setDrawColor(borderColor[0], borderColor[1], borderColor[2]);
    doc.setLineWidth(borderWidth);
    doc.rect(
      margin,
      margin,
      textWidth,
      titleHeight + textHeight + padding,
      "S"
    );
    doc.setFont("Helvetica");
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    doc.text(
      "Your passkey:",
      margin + padding,
      margin + titleHeight - padding / 2
    );
    const lines = doc.splitTextToSize(newPasskey, textWidth - 2 * padding);
    doc.setFontSize(14);
    doc.text(lines, margin + padding, contentStartY);

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);

    const declarationText =
      "Declaration: Don't share the passkey with anyone else.";
    doc.text(declarationText, margin, footerY);

    const supportedByText = "MASA @2024 copyright.";
    doc.text(supportedByText, margin, footerY + 10);
    doc.save("key.pdf");
  };

  const handleGenerateKey = useCallback(() => {
    setisLoading(true);
    setTimeout(() => {
      mutate.mutate({
        verifyToken: "123",
        token: localStorage.getItem("token"),
        userPassKey: newPasskey,
      } as TBodyApiType);
      setisLoading(false);
      setIsOpen(false);
    }, 3000);
  }, [mutate, newPasskey]);

  const handleViewKey = useCallback(() => {
    setisLoading(true);
    setTimeout(() => {
      setisLoading(false);
      setIsOpen(true);
    }, 3000);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-2 p-8">
      <KeyRound className="text-gray-500" />
      <CustomLabel className="font-display text-md text-gray-500 text-center">
        Passwordless sign-in with passkeys
      </CustomLabel>
      <CustomLabel className="font-display text-xs font-light text-gray-400 text-center">
        Passkeys are webauthn credentials that validate your identity using
        touch, facial recognition, a device password, or a PIN. They can be used
        as a password replacement or as a 2FA method. Passkeys can be used for
        sign-in as a simple and secure alternative to your password and
        two-factor credentials.
      </CustomLabel>
      <CustomLabel className="font-display text-xs font-normal text-gray-500 text-center mt-3">
        This browser or device is reporting partial passkey support, but you may
        be able to use a passkey from a nearby device.
      </CustomLabel>
      {passkey ? (
        <button
          onClick={handleViewKey}
          className="w-32 h-12 border border-blue-500 text-blue-500 text-xs p-2 rounded-lg font-display mt-3 flex items-center justify-center"
        >
          {isLoading ? <Loader className="animate-spin" /> : "View passkey"}
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="border w-32 h-12  text-xs p-2 rounded-lg font-display mt-3"
        >
          Add passkey
        </button>
      )}

      <div>
        <CustomDialogBox2
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={passkey ? "Passkey" : "Generate new passkey"}
        >
          <div
            onClick={downloadPDF}
            className="border p-2 rounded-lg break-words font-display font-normal cursor-pointer"
          >
            {passkey || newPasskey}
          </div>
          <div>
            <CustomLabel className="font-display text-xs font-normal text-blue-500">
              Declaration: Copy the key and save it.
            </CustomLabel>
          </div>
          <div className="mt-5">
            {passkey ? (
              <button
                onClick={downloadPDF}
                className="text-xs font-display text-white bg-blue-500 p-4 h-12 rounded-lg w-full flex items-center justify-center"
              >
                {isLoading ? <Loader className="animate-spin" /> : "Save key"}
              </button>
            ) : (
              <button
                onClick={handleGenerateKey}
                className="text-xs font-display text-white bg-blue-500 p-4 h-12 rounded-lg w-full flex items-center justify-center"
              >
                {isLoading ? <Loader className="animate-spin" /> : "Generate"}
              </button>
            )}
          </div>
        </CustomDialogBox2>
      </div>
    </div>
  );
};

export default PrivateSetup2FAPasswordlessSignInPasskeyPageComponent;
