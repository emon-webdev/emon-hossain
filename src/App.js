import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import routers from "./Routes/router";

function App() {
  return (
    <div className="">
      <RouterProvider router={routers} />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
