import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "./Context/ContextProvider";
import AboutTwo from "./Pages/About/AboutTwo";
import Pricing from "./Pages/Pricing/PricingTwo";
import ContactTwo from "./Pages/Contact/ContactTwo";
import HomeTwo from "./Pages/Home/HomeTwo";
import PortfiloTwo from "./Pages/Portfilo/PortfiloTwo";
import ResumeTwo from "./Pages/Resume/ResumeTwo";
import NotFound from "./Share/NotFound";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<HomeTwo />}>
              <Route index element={<AboutTwo />} />
              <Route path="about" element={<AboutTwo />} />
              <Route path="resume" element={<ResumeTwo />} />
              <Route path="contact" element={<ContactTwo />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="Projects" element={<PortfiloTwo />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
