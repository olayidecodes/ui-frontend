import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.scss"
import Footer from "./components/footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>  
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  }
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
