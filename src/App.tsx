import { useEffect } from "react";
import "./App.css";
import RouteIndex from "./routes/route.index";

function App() {
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <div className="flex items-center flex-col justify-center h-screen w-screen">
      <RouteIndex />
    </div>
  );
}

export default App;
