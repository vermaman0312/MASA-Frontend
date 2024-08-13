import { useCallback, useState } from "react";
import CustomDialogBox2 from "../../../../../components/custom-dialogbox/customDialogBox2.component";
import { CustomLabel } from "../../../../../components/custom-label/custom-label.component";
import { Loader } from "lucide-react";
import { TBodyApiType } from "../../../../../api/models/api.body.model";
import { useGeneratePasskeyMutation } from "../../../../../api/mutations/private-mutation/settings/setup-2FA-generate-passkey.mutation";
import jsPDF from "jspdf";

type props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  passkey: string;
  newPasskey: string;
  userUniqueId: string;
};

const PrivateSetup2FAPasswordlessSignInPasskeyGenerateKeyPageComponent = ({
  isOpen,
  setIsOpen,
  passkey,
  newPasskey,
  userUniqueId,
}: props) => {
  const mutate = useGeneratePasskeyMutation();
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
    const lines = doc.splitTextToSize(
      passkey || newPasskey,
      textWidth - 2 * padding
    );
    doc.setFontSize(14);
    doc.text(lines, margin + padding, contentStartY);

    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);

    const declarationText =
      "Declaration: Don't share the passkey with anyone else.";
    doc.text(declarationText, margin, footerY);

    const supportedByText = "MASA @2024 copyright.";
    doc.text(supportedByText, margin, footerY + 10);
    doc.save(`${userUniqueId}-passkey.pdf`);
    setIsOpen && setIsOpen(false);
  };

  const handleGenerateKey = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      mutate.mutate({
        verifyToken: "123",
        token: localStorage.getItem("token"),
        userPassKey: newPasskey,
      } as TBodyApiType);
      setIsLoading(false);
      setIsOpen && setIsOpen(false);
    }, 3000);
  }, [mutate, newPasskey, setIsOpen]);

  return (
    <CustomDialogBox2
      isOpen={isOpen}
      onClose={() => setIsOpen && setIsOpen(false)}
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
            onClick={() => {
              setIsLoading(true);
              setTimeout(() => {
                setIsLoading(false);
                downloadPDF();
                setIsOpen && setIsOpen(false);
              }, 3000);
            }}
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
  );
};

export default PrivateSetup2FAPasswordlessSignInPasskeyGenerateKeyPageComponent;
