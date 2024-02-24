import React, { useState } from 'react'
import Header from '../Header'
import FooterSection from './footer';
import HeroSection from './heroSection';

function PageWrapper({children, image, heroText}) {
    const [toggle, setToggle] = useState(false);
    return (
        <div className={toggle ? "menu-is-open" : ""}>
            <div id="page" className="s-pagewrap">
            <Header toggle={toggle} switchToggle={()=>setToggle(!toggle)} />
            
            <section id='content' className='s-content'>
                <HeroSection heroText={heroText} image={image}/>
                {children}
                <FooterSection/>
            </section>

            </div>
        </div>
    )
}

export default PageWrapper
