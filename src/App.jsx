import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import Provider from "./store/Provider";
import { Toaster } from "./components/ui/sonner";

function App() {
  return (
    <Provider>
      <RouterProvider router={router} />
      <Toaster richColors position="top-right" />
    </Provider>
  );
}

export default App;
