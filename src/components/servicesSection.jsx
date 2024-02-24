import React from 'react'
import {MdConstruction, MdAgriculture  } from 'react-icons/md'
import { LuLeafyGreen } from "react-icons/lu";
import { FaPeopleCarry } from "react-icons/fa";
import Fade from 'react-reveal/Fade'
function ServicesSection() {
    return (
        <Fade bottom>
        <section id="services" className="s-services">

                <div className="s-services__bg"></div>
                
                <div className="row narrow section-header section-header--dark has-bottom-sep">
                    <div className="column lg-12">
                        
                        <h3 className="text-pretitle">Our Services</h3>
                        <h1 className="text-display-title">What We Do.</h1>
                        
                        <p className="lead">
                        With a presence spanning Africa and Europe, we draw inspiration from diverse landscapes and cultures. 
                        Our commitment to innovation and environmental stewardship drives us to develop projects that benefit communities and the planet.
                        </p>
                        
                    </div> 
                </div> 

                <div className="s-services__content">

                    <div className="row services-list block-lg-one-half block-tab-whole" >

                        <div className="column service-item" >

                            {/* <span className="service-icon-block">
                                
                            </span> */}
                            <MdConstruction size="50" style={{color: "#F9A828"}}/>

                            <div className="service-content">
                                <h3 className="h4">Construction</h3>

                                <p>
                                From groundbreaking designs to efficient execution, we construct spaces that harmonize with nature and enhance quality of life.
                                </p>
                            </div>

                        </div>
                        <div className="column service-item" >

                            <MdAgriculture size={50} style={{color: "#F9A828"}}/>

                            <div className="service-content">
                                <h3 className="h4">Agriculture</h3>

                                <p>
                                Harnessing renewable resources, we power progress sustainably. Solar arrays, wind farms, and smart grids are our tools for a cleaner tomorrow.
                                </p>
                            </div>

                        </div>

                        <div className="column service-item" >

                        <LuLeafyGreen size={50} style={{color: "#F9A828"}}/>

                            <div className="service-content">
                                <h3 className="h4">Green Energy</h3>

                                <p>
                                Cultivating resilience, we promote regenerative practices. Our farms yield nutritious food while preserving soil health and biodiversity.
                                </p>
                            </div>

                        </div>

                        <div className="column service-item" >

                            <FaPeopleCarry size={50} style={{color: "#F9A828"}}/>

                            <div className="service-content">
                                <h3 className="h4">Consultancy</h3>

                                <p>
                                Guiding organizations toward sustainable solutions, we offer expertise in areas such as sustainability strategy, climate action, and environmental impact assessment.
                                </p>
                            </div>

                        </div>

                    </div>
                    
                </div> 			

            </section>
            </Fade>
    )
}

export default ServicesSection
