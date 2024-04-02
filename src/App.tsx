import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  /*
  {
    path: "/profile",
    element: <Profile />,
    children: [
      {
        path: "/profile/:id",
        element: <ProfileView />,
      },
    ],
  },
  */
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

/*
function App() {
  return <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/about" element={<About />} />
    </Routes>
  
  </>;
}
*/
export default App;
