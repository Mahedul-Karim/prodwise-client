import { RouterProvider } from "react-router";
import { router } from "./routes/router";
import Provider from "./store/Provider";

function App() {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
