import React from 'react'

function GetInTouchSection() {
    return (
        <section id="contact" className="s-contact target-section">

                <div className="row section-header section-header--dark">
                    <div className="column lg-12">
                        
                        <h3 className="text-pretitle">Get In Touch</h3>
                        <h1 className="text-display-title">
                            Have an idea or an epic project in mind? Talk to us. 
                            Let’s work together and make something great. 
                            Drop us a line at <a href="mailto:#0">Safricon.Sagrico@gmail.com</a>.
                        </h1>
                        <br/>
                        <form>
                            <input className='u-fullwidth text-center' style={{backgroundColor: "white"}} placeholder='Full name' type='text' required/>
                            <input className='u-fullwidth text-center' style={{backgroundColor: "white"}} placeholder='Email' type='email' required/>
                            <input className='u-fullwidth text-center' style={{backgroundColor: "white"}} placeholder='Phone number' type='number'/>
                            <textarea className='u-fullwidth text-center' style={{backgroundColor: "white"}} placeholder='Message'>

                            </textarea>
                            <button type='submit btn--primary btn'>Send Message</button>
                        </form>
                    </div>
                </div>

                <div className="row s-contact__infos">

                    <div className="column lg-5 md-6 stack-on-900 s-contact__block-address">
                        <h5 className="with-top-line">Where to Find Us</h5>
        
                        <p>
                        St Anthoniusstraat 31, 5341 LC/Oss. Netherlands <br/>
                        Av.P.E Lumumba N°014 commune d'Ibanda / SK-bkv , DRCongo<br/>
                        </p>
                    </div>
        
                    <div className="column lg-3 md-6 stack-on-900 s-contact__block-social">
                        <h5 className="with-top-line">Follow Us</h5>
        
                        <ul className="s-contact__list">
                            <li><a href="#0">Facebook</a></li>
                            <li><a href="#0">Twitter</a></li>
                            <li><a href="#0">Instagram</a></li>
                        </ul>
                    </div>
        
                    <div className="column lg-4 md-12 stack-on-900 s-contact__block-number">
                        <h5 className="with-top-line">Contact Us</h5>
        
                        <ul className="s-contact__list">
                            <li><a href="mailto:#0">chris123mush@gmail.com, safricon.sarl@.com</a></li>
                            <li><a href="tel:197-543-2345">+31 6 135 904 23</a></li>
                            <li><a href="tel:197-123-9876">+243 970 417 538</a></li>
                        </ul>
                    </div>
        
                </div>

                {/* <div className="row s-contact__bottom">
    
                    <div className="column lg-5 tab-12 s-contact__mail-block">
                        <a href="mailto:#0" className="btn btn--stroke btn--mail">
                            Let's Talk 
                        </a>
                    </div>
        
                    <div className="column lg-7 tab-12 s-contact__subscribe">
                        <h5>Subscribe</h5>
        
                        <div className="subscribe-form">
                            <form id="mc-form" className="mc-form" novalidate="true">
                                <input type="email" name="EMAIL" id="mce-EMAIL" className="u-fullwidth text-center" style={{backgroundColor: "white"}} placeholder="Your Email Address" title="The domain portion of the email address is invalid (the portion after the @)." pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$" required=""/>
                                <input type="submit" name="subscribe" value="Subscribe" className="btn btn--primary u-fullwidth"/>
                                <div className="mc-status"></div>
                            </form>
                        </div>
                    </div>

                </div> */}


            </section>

        
    )
}

export default GetInTouchSection
