import React from 'react';

function FooterSection() {
    return (
        <footer id="colophon" className="s-footer">
            <div className="row">
                <div className="column lg-12 ss-copyright">
                    <span>© Copyright Safricon&Sagrico 2022</span>
                    {/* <span>Design by <a href="https://www.styleshout.com/">StyleShout</a></span> */}
                </div>
            </div>

            <div className="ss-go-top">
                <a className="smoothscroll" title="Back to Top" href="#top">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)", transform: "", msFilter:""}}><path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z"></path></svg>
                </a>
            </div>
        </footer> 
    )
}

export default FooterSection
