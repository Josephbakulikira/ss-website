import Header from "./Header";
import {Outlet} from "react-router-dom";
import SubHeader from "./components/subheader";
import HeroSection from "./components/heroSection";
import { useState } from "react";
import AboutSection from "./components/aboutSection";
import ServicesSection from "./components/servicesSection";
import ProjectSection from "./components/projectsSection";
import TestimonialsSection from "./components/testimonialsSection";
import GetInTouchSection from "./components/getInTouchSection";
import FooterSection from "./components/footer";
import IndexPage from "./pages/IndexPage";

export default function Layout() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={toggle ? "menu-is-open" : ""}>
      <div id="page" className="s-pagewrap">
      {/* <SubHeader/> */}
      <Header toggle={toggle} switchToggle={()=>setToggle(!toggle)} />
      {/* <div class="top-shadow"></div> */}
      <section id="content" className="s-content">
        <HeroSection/>
        <AboutSection/>
        <ServicesSection/>
        <ProjectSection>
          {/* <TestimonialsSection/> */}
        </ProjectSection>
        {/* <IndexPage/> */}
        <GetInTouchSection/>
        <FooterSection/>
      </section>
      {/* <Outlet /> */}
    </div>
    </div>
  );
}