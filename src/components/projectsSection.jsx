import React from 'react';
import Image1 from '../assets/gallery/21.jpg';
import Image3 from '../assets/gallery/2.jpeg';
import Image2 from '../assets/gallery/3.jpeg';
import Image4 from '../assets/gallery/4.jpeg';
import Image5 from '../assets/gallery/1.jpeg';
import Image6 from '../assets/gallery/6.jpeg';
// import Image7 from '../assets/gallery/7.jpeg';
// import Image8 from '../assets/gallery/8.jpeg';
// import Image9 from '../assets/gallery/9.jpeg';
// import Image10 from '../assets/gallery/10.jpeg';
// import Image11 from '../assets/gallery/11.jpeg';
// import Image12 from '../assets/gallery/12.jpeg';
// import Image13 from '../assets/gallery/13.jpeg';
// import Image14 from '../assets/gallery/14.jpeg';
// import Image15 from '../assets/gallery/15.jpeg';
import Fade from 'react-reveal/Fade'

function ProjectSection({children}) {
    return (
        <Fade>
        <section id="portfolio" className="s-portfolio">

                <div className="s-portfolio__header">

                    <div className="row narrow section-header section-header--dark has-bottom-sep">
                        <div className="column lg-12">
                            
                            <h3 className="text-pretitle">Showcase</h3>
                            <h1 className="text-display-title">See Our Featured Projects.</h1>
                            
                            <p className="lead">
                            Join us on this transformative journey toward a greener, more resilient world. Together, we build, energize, consult, and nurture a better tomorrow.
                            </p>
                            
                        </div> 
                    </div> 

                </div> 

                <div className="row s-portfolio__content" >
                    <div className="column lg-12">

                        <div className="folio-list bricks">
         
                            <div className="brick folio-item" >

                                <div className="folio-item__thumb">
                                    <a className="folio-item__thumb-link"  href="#intro"  Title="Shutterbug" data-size="1050x700">
                                        <img src={Image1}  alt=""/>
                                    </a>
                                </div>
                                <div className="folio-item__info">
                                    <div className="folio-item__cat">Agriculture</div>
                                    <h4 className="folio-item__title">Safricon&Sagrico</h4>
                                </div>
                                <a href="#intro" title="Project Link" className="folio-item__project-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)",transform:"",msFilter:""}}><path d="M4.222 19.778a4.983 4.983 0 0 0 3.535 1.462 4.986 4.986 0 0 0 3.536-1.462l2.828-2.829-1.414-1.414-2.828 2.829a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.829-2.828-1.414-1.414-2.829 2.828a5.006 5.006 0 0 0 0 7.071zm15.556-8.485a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0L9.879 7.051l1.414 1.414 2.828-2.829a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.829 2.828 1.414 1.414 2.829-2.828z"></path><path d="m8.464 16.95-1.415-1.414 8.487-8.486 1.414 1.415z"></path></svg>
                                </a>
                                <div className="folio-item__caption">
                                    <p>Join us on this transformative journey toward a greener, more resilient world. Together, we build, energize, consult, and nurture a better tomorrow..</p>
                                </div>
                                
                             </div>
         
                            <div className="brick folio-item">

                                <div className="folio-item__thumb">
                                    <a className="folio-item__thumb-link" href="#intro"  Title="Yellow Wall" data-size="1050x700">
                                        <img src={Image6} alt=""/>
                                    </a>
                                </div>
                                <div className="folio-item__info">
                                    <div className="folio-item__cat">Construction</div>
                                    <h4 className="folio-item__title">Safricon&Sagrico</h4>
                                </div>
                                <a href="#intro" title="Project Link" className="folio-item__project-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)",transform:"",msFilter:""}}><path d="M4.222 19.778a4.983 4.983 0 0 0 3.535 1.462 4.986 4.986 0 0 0 3.536-1.462l2.828-2.829-1.414-1.414-2.828 2.829a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.829-2.828-1.414-1.414-2.829 2.828a5.006 5.006 0 0 0 0 7.071zm15.556-8.485a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0L9.879 7.051l1.414 1.414 2.828-2.829a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.829 2.828 1.414 1.414 2.829-2.828z"></path><path d="m8.464 16.95-1.415-1.414 8.487-8.486 1.414 1.415z"></path></svg>
                                </a>
                                <div className="folio-item__caption">
                                    <p>Join us on this transformative journey toward a greener, more resilient world. Together, we build, energize, consult, and nurture a better tomorrow.</p>
                                </div>

                            </div>
         
                            <div className="brick folio-item">

                                <div className="folio-item__thumb">
                                    <a className="folio-item__thumb-link" href="#intro" Title="Architecture" data-size="1050x700">
                                        <img src={Image3}  alt=""/>
                                    </a>
                                </div>
                                <div className="folio-item__info">
                                    <div className="folio-item__cat">Construction</div>
                                    <h4 className="folio-item__title">Safricon&Sagrico</h4>
                                </div>
                                <a href="#intro" title="Project Link" className="folio-item__project-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)",transform:"",msFilter:""}}><path d="M4.222 19.778a4.983 4.983 0 0 0 3.535 1.462 4.986 4.986 0 0 0 3.536-1.462l2.828-2.829-1.414-1.414-2.828 2.829a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.829-2.828-1.414-1.414-2.829 2.828a5.006 5.006 0 0 0 0 7.071zm15.556-8.485a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0L9.879 7.051l1.414 1.414 2.828-2.829a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.829 2.828 1.414 1.414 2.829-2.828z"></path><path d="m8.464 16.95-1.415-1.414 8.487-8.486 1.414 1.415z"></path></svg>
                                </a>
                                <div className="folio-item__caption">
                                    <p>Join us on this transformative journey toward a greener, more resilient world. Together, we build, energize, consult, and nurture a better tomorrow.</p>
                                </div>

                            </div>

                            <div className="brick folio-item">

                                <div className="folio-item__thumb">
                                    <a className="folio-item__thumb-link"  href="#intro"  Title="Minimalismo" data-size="1050x700">
                                        <img src={Image4}  alt=""/>
                                    </a>
                                </div>
                                <div className="folio-item__info">
                                    <div className="folio-item__cat">Construction</div>
                                    <h4 className="folio-item__title">Safricon&Sagrico</h4>
                                </div>
                                <a href="#intro" title="Project Link" className="folio-item__project-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)",transform:"",msFilter:""}}><path d="M4.222 19.778a4.983 4.983 0 0 0 3.535 1.462 4.986 4.986 0 0 0 3.536-1.462l2.828-2.829-1.414-1.414-2.828 2.829a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.829-2.828-1.414-1.414-2.829 2.828a5.006 5.006 0 0 0 0 7.071zm15.556-8.485a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0L9.879 7.051l1.414 1.414 2.828-2.829a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.829 2.828 1.414 1.414 2.829-2.828z"></path><path d="m8.464 16.95-1.415-1.414 8.487-8.486 1.414 1.415z"></path></svg>
                                </a>
                                <div className="folio-item__caption">
                                    <p>Join us on this transformative journey toward a greener, more resilient world. Together, we build, energize, consult, and nurture a better tomorrow.</p>
                                </div>

                            </div> 
                            <div className="brick folio-item">

                                <div className="folio-item__thumb">
                                    <a className="folio-item__thumb-link" href="#intro" Title="Skaterboy" data-size="1050x700">
                                        <img src={Image5} alt=""/>
                                    </a>
                                </div>
                                <div className="folio-item__info">
                                    <div className="folio-item__cat">Construction</div>
                                    <h4 className="folio-item__title">Safricon&Sagrico</h4>
                                </div>
                                <a href="#intro" title="Project Link" className="folio-item__project-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)",transform:"",msFilter:""}}><path d="M4.222 19.778a4.983 4.983 0 0 0 3.535 1.462 4.986 4.986 0 0 0 3.536-1.462l2.828-2.829-1.414-1.414-2.828 2.829a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.829-2.828-1.414-1.414-2.829 2.828a5.006 5.006 0 0 0 0 7.071zm15.556-8.485a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0L9.879 7.051l1.414 1.414 2.828-2.829a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.829 2.828 1.414 1.414 2.829-2.828z"></path><path d="m8.464 16.95-1.415-1.414 8.487-8.486 1.414 1.415z"></path></svg>
                                </a>
                                <div className="folio-item__caption">
                                    <p>Join us on this transformative journey toward a greener, more resilient world. Together, we build, energize, consult, and nurture a better tomorrow.</p>
                                </div>

                            </div> 

                            <div className="brick folio-item">

                                <div className="folio-item__thumb">
                                    <a className="folio-item__thumb-link" href="#intro" Title="Salad" data-size="1050x700">
                                        <img src={Image2} alt=""/>
                                    </a>
                                </div>
                                <div className="folio-item__info">
                                    <div className="folio-item__cat">Construction</div>
                                    <h4 className="folio-item__title">Safricon&Sagrico</h4>
                                </div>
                                <a href="#intro" title="Project Link" className="folio-item__project-link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)",transform:"",msFilter:""}}><path d="M4.222 19.778a4.983 4.983 0 0 0 3.535 1.462 4.986 4.986 0 0 0 3.536-1.462l2.828-2.829-1.414-1.414-2.828 2.829a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.829-2.828-1.414-1.414-2.829 2.828a5.006 5.006 0 0 0 0 7.071zm15.556-8.485a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0L9.879 7.051l1.414 1.414 2.828-2.829a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.829 2.828 1.414 1.414 2.829-2.828z"></path><path d="m8.464 16.95-1.415-1.414 8.487-8.486 1.414 1.415z"></path></svg>
                                </a>
                                <div className="folio-item__caption">
                                    <p>Join us on this transformative journey toward a greener, more resilient world. Together, we build, energize, consult, and nurture a better tomorrow.</p>
                                </div>

                            </div> 

                        </div> 

                    </div> 
                </div> 

                {children}

            </section>
            </Fade>
    )
}

export default ProjectSection;
