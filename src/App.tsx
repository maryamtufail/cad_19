import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Country } from "./pages/country";
import { Contact } from "./pages/contact";
import { AppLayout } from "./components/Layout/AppLayout";
import { ErrorPage } from "./pages/errorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
    children: [ 
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
