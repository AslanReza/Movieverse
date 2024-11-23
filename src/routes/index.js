import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/HomePage";
import ExplorePage from "../pages/ExplorePage";
import SearchPage from "../pages/SearchPage";
import DetailsPage from "../pages/DetailsPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import ContactPage from "../pages/ContactPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":explore",
        element: <ExplorePage />,
      },
      {
        path: ":explore/:id",
        element: <DetailsPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);
export default router;
