import React, {useRef, useState} from 'react'
import emailjs from 'emailjs-com';
import {toast} from 'react-toastify'
import LoadingAnimation from './loadingAnimation';
import Slide from 'react-reveal/Slide'

function GetInTouchSection() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const form = useRef();

    const HandleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        
        emailjs.sendForm('service_fqgz5v1', 'template_9ja0936', form.current, 'HyJNVEb3b_y2zdlB0')
        .then((result) => {
            setLoading(false)
            toast.success("Message envoyé", {theme: "dark"})
            setEmail("")
            setName("")
            setMessage("")
            setNumber("")
        }).catch((err) => {
            // console.log(err)
            setLoading(false)
            console.log(err);
            toast.error("error ! Message not sent, try again later");
      });
    }

    return (
        <Slide bottom>
        <section id="contact" className="s-contact target-section">

                {loading && <LoadingAnimation/>}

                <div className="row section-header section-header--dark">
                    <div className="column lg-12">
                        
                        <h3 className="text-pretitle">Get In Touch</h3>
                        <h1 className="text-display-title">
                            Have an idea or an epic project in mind? Talk to us. 
                            Let’s work together and make something great. 
                            Drop us a line at <a href="mailto:#0">Safricon.Sagrico@gmail.com</a>.
                        </h1>
                        <br/>
                        <form ref={form} onSubmit={HandleSubmit}>
                            <input value={name} name="from_name" onChange={(e) => setName(e.target.value)} className='u-fullwidth text-center' style={{backgroundColor: "white"}} placeholder='Full name' type='text' required/>
                            <input value={email} name="from_email"  onChange={(e) => setEmail(e.target.value)} className='u-fullwidth text-center' style={{backgroundColor: "white"}} placeholder='Email' type='email' required/>
                            <input value={number} name="from_number"  onChange={(e) => setNumber(e.target.value)} className='u-fullwidth text-center' style={{backgroundColor: "white"}} placeholder='Phone number' type='number'/>
                            <textarea value={message} name="message"  onChange={(e) => setMessage(e.target.value)} className='u-fullwidth text-center' style={{backgroundColor: "white"}} placeholder='Message'>

                            </textarea>
                            <button disabled={loading} type='submit btn--primary btn'>Send Message</button>
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
            </Slide>

        
    )
}

export default GetInTouchSection
