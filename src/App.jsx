import { useRoutes } from "react-router-dom";
import HomePage from "./pages/Home";

function App() {
  const router = useRoutes([{ path: "/", element: <HomePage /> }]);

  return router;
}

export default App;
