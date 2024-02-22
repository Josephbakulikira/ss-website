import React from 'react'

function TestimonialsSection() {
    return (
        <>
           <div className="row testimonials">
                    <div className="column lg-12" >

                        <h2 className="text-pretitle">What They Say About Us</h2>
        
                        <div className="swiper-container testimonial-slider">
        
                            <div className="swiper-wrapper">
    
                                <div className="testimonial-slider__slide swiper-slide">
                                    <p>
                                    Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. 
                                    Explicabo a quaerat sint autem dolore ducimus ut consequatur neque. Nisi dolores quaerat fuga rem nihil nostrum.
                                    Laudantium quia consequatur molestias.
                                    </p>
                                    <div className="testimonial-slider__author">
                                        <img src="images/avatars/user-02.jpg" alt="Author image" className="testimonial-slider__avatar"/>
                                        <cite className="testimonial-slider__cite">
                                            <strong>Tim Cook</strong>
                                            <span>CEO, Apple</span>
                                        </cite>
                                    </div>
                                </div>
                
                                <div className="testimonial-slider__slide swiper-slide">
                                    <p>
                                    Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
                                    Nisi eaque consequatur. Voluptatem dignissimos ut ducimus accusantium perspiciatis.
                                    Quasi voluptas eius distinctio. Atque eos maxime.
                                    </p>
                                    <div className="testimonial-slider__author">
                                        <img src="images/avatars/user-03.jpg" alt="Author image" className="testimonial-slider__avatar"/>
                                        <cite className="testimonial-slider__cite">
                                            <strong>Sundar Pichai</strong>
                                            <span>CEO, Google</span>
                                        </cite>
                                    </div>
                                </div>
                
                                <div className="testimonial-slider__slide swiper-slide">
                                    <p>
                                    Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.  
                                    Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.
                                    Voluptatem dignissimos ut.
                                    </p>
                                    <div className="testimonial-slider__author">
                                        <img src="images/avatars/user-01.jpg" alt="Author image" className="testimonial-slider__avatar"/>
                                        <cite className="testimonial-slider__cite">
                                            <strong>Satya Nadella</strong>
                                            <span>CEO, Microsoft</span>
                                        </cite>
                                    </div>
                                </div>
        
                                <div className="testimonial-slider__slide swiper-slide">
                                    <p>
                                    Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc ac augue. Fusce vel dui. In ac felis 
                                    quis tortor malesuada pretium. Curabitur vestibulum aliquam leo. Qui sed at corrupti expedita voluptas odit. 
                                    Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                                    </p>
                                    <div className="testimonial-slider__author">
                                        <img src="images/avatars/user-06.jpg" alt="Author image" className="testimonial-slider__avatar"/>
                                        <cite className="testimonial-slider__cite">
                                            <strong>Jeff Bezos</strong>
                                            <span>CEO, Amazon</span>
                                        </cite>
                                    </div>
                                </div>
                            </div> 
        
                            <div className="swiper-pagination"></div>
        
                        </div> 
        
                    </div> 
                </div> 

                <div className="clients-block">
                    <div className="row">
                        <div className="column lg-12">
        
                            <div className="swiper-container clients">
                                <div className="swiper-wrapper clients__content">
                                    <a href="#0" title="" className="swiper-slide clients__slide"><img src="images/icons/clients/dropbox.svg" /></a>
                                    <a href="#0" title="" className="swiper-slide clients__slide"><img src="images/icons/clients/atom.svg" /></a>
                                    <a href="#0" title="" className="swiper-slide clients__slide"><img src="images/icons/clients/github.svg" /></a>
                                    <a href="#0" title="" className="swiper-slide clients__slide"><img src="images/icons/clients/redhat.svg" /></a>
                                    <a href="#0" title="" className="swiper-slide clients__slide"><img src="images/icons/clients/medium.svg" /></a>
                                    <a href="#0" title="" className="swiper-slide clients__slide"><img src="images/icons/clients/messenger.svg" /></a>
                                    <a href="#0" title="" className="swiper-slide clients__slide"><img src="images/icons/clients/steam.svg" /></a>
                                    <a href="#0" title="" className="swiper-slide clients__slide"><img src="images/icons/clients/spotify.svg" /></a>
                                </div>
        
                                <div className="swiper-pagination"></div>
                            </div>
        
                        </div> 
                    </div> 
                </div>  
        </>
    )
}

export default TestimonialsSection
