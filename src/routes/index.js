import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/HomePage";
import ExplorePage from "../pages/ExplorePage";
import SearchPage from "../pages/SearchPage";
import DetailsPage from "../pages/DetailsPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import HelpPage from "../pages/HelpPage";
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
      {
        path: "privacy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "help",
        element: <HelpPage />,
      },
    ],
  },
]);
export default router;
