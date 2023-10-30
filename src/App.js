import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import routers from "./Routes/router";
import emon from './images/emon.jpg';
// ..
AOS.init();
function App() {
  useEffect(() => {
    AOS.refresh(); // Refresh AOS when the component mounts
  }, []);
  return (
    <div className="">
      <RouterProvider router={routers} />
      <Toaster position="top-center" reverseOrder={false} />
      <FloatingWhatsApp
        phoneNumber="01919371381"
        accountName="Emon Hossain"
        avatar={emon}
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </div>
  );
}

export default App;
