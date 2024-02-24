import React from 'react'
import Fade from 'react-reveal/Fade'

function AboutSection() {
    return (
        <Fade bottom>
            <section id="about" className="s-about target-section">

            <div className="row s-about__content" data-animate-block>
                <div className="column lg-12">
                    <h2 className="text-pretitle">About Us</h2>
                    <p className="s-about__desc">
                    At <span>Safricon & Sagrico </span>, we are passionate about building a sustainable future. 
                    Our mission is to create lasting impact by integrating construction, 
                    green energy, and agriculture solutions.
                    </p>
                    {/* <p className='s-about__desc'>
                    With a presence spanning <span>Africa</span> and <span>Europe</span>, we draw inspiration from diverse landscapes and cultures. 
                    Our commitment to innovation and environmental stewardship drives us to develop projects that benefit communities and the planet.
                    </p> */}
                </div> 
            </div> 

            </section> 
        </Fade>
    )
}

export default AboutSection
