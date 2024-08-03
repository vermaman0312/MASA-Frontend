import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/redux-index";
import { MantineProvider } from "@mantine/core";
import "@mantine/tiptap/styles.css";
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient();

root.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MantineProvider>
          <App />
          <ToastContainer
            stacked
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            icon={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </MantineProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);
