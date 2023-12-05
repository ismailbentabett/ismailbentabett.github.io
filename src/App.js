import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import ContextProvider from "./Context/ContextProvider";
import AboutTwo from "./Pages/About/AboutTwo";
import Pricing from "./Pages/Pricing/PricingTwo";
import ContactTwo from "./Pages/Contact/ContactTwo";
import HomeTwo from "./Pages/Home/HomeTwo";
import PortfiloTwo from "./Pages/Portfilo/PortfiloTwo";
import ResumeTwo from "./Pages/Resume/ResumeTwo";
import NotFound from "./Share/NotFound";
import { HelmetProvider } from "react-helmet-async";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
    AOS.refresh();
  }, []);
  return (
    <>
      <HelmetProvider>
        <title>ismailbentabett</title>
        <meta
          name="description"
          content="Six-year Full Stack Engineer experienced in small and large teams. Proficient in designing and implementing user-friendly Web/Mobile applications."
        />

        <meta itemprop="name" content="ismailbentabett" />
        <meta
          itemprop="description"
          content="Six-year Full Stack Engineer experienced in small and large teams. Proficient in designing and implementing user-friendly Web/Mobile applications."
        />
        <meta
          itemprop="image"
          content="https://scontent.ftlm1-2.fna.fbcdn.net/v/t39.30808-6/326070679_5776791742438597_7519612538097957996_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZaoLmy8iffMAX9yib3y&_nc_ht=scontent.ftlm1-2.fna&oh=00_AfC2Qu3P39Gdeb7yxyndjOILb6oBAQU5UjY9o0DmCpNJHw&oe=642A3A70"
        />

        <meta property="og:url" content="https://ismailbentabett.github.io" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ismailbentabett" />
        <meta
          property="og:description"
          content="Six-year Full Stack Engineer experienced in small and large teams. Proficient in designing and implementing user-friendly Web/Mobile applications."
        />
        <meta
          property="og:image"
          content="https://scontent.ftlm1-2.fna.fbcdn.net/v/t39.30808-6/326070679_5776791742438597_7519612538097957996_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZaoLmy8iffMAX9yib3y&_nc_ht=scontent.ftlm1-2.fna&oh=00_AfC2Qu3P39Gdeb7yxyndjOILb6oBAQU5UjY9o0DmCpNJHw&oe=642A3A70"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ismailbentabett" />
        <meta
          name="twitter:description"
          content="Six-year Full Stack Engineer experienced in small and large teams. Proficient in designing and implementing user-friendly Web/Mobile applications."
        />
        <meta
          name="twitter:image"
          content="https://scontent.ftlm1-2.fna.fbcdn.net/v/t39.30808-6/326070679_5776791742438597_7519612538097957996_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZaoLmy8iffMAX9yib3y&_nc_ht=scontent.ftlm1-2.fna&oh=00_AfC2Qu3P39Gdeb7yxyndjOILb6oBAQU5UjY9o0DmCpNJHw&oe=642A3A70"
        />

        <ContextProvider>
          <HashRouter>
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
          </HashRouter>
        </ContextProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
