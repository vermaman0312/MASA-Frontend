import { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";

type props = {
  userName?: string;
};

const CustomSignatureName = ({ userName }: props) => {
  const signatureRef = useRef<HTMLDivElement>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [fontFamily, setFontFamily] = useState("");

  useEffect(() => {
    const fonts = [
      "Pacifico, cursive",
      "Great Vibes, cursive",
      "Alex Brush, cursive",
    ];
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    setFontFamily(randomFont);
  }, []);

  const handleGenerateImage = async () => {
    if (!signatureRef.current) {
      console.error("Signature element is not available");
      return;
    }
    const canvas = await html2canvas(signatureRef.current);
    const imgData = canvas.toDataURL("image/png");
    setImageSrc(imgData);
  };

  useEffect(() => {
    handleGenerateImage();
  }, []);

  return (
    <div
      ref={signatureRef}
      style={{
        fontFamily: fontFamily,
        fontSize: "24px",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#283e4a",
        color: "#ffffff",
      }}
      className="rounded-xl select-none"
    >
      {userName}
    </div>
  );
};

export default CustomSignatureName;
