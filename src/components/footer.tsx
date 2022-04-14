import React from 'react';
import './style.css'
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LogoSmall from './img/CW-Logo-small.png';


function footer (){
    const infoPages = ["Trade Accounts", "Shipping & Returns", "Track your order", "How credit works", "Terms & Conditions", "Privacy Policy", "Cookie Policy"];
    const aboutPages = ["Collections", "Products", "Bespoke", "Our Story", "Case studies", "Journal", "FAQs"]

    return(
        <div className="footer">
            <div className="footer__top">

                <p>NEWSLETTER</p>
                <h4>Subscribe for more offers & inspiration</h4>
                <div className="footer__top__cta">
                    <input type="text" className="footer__top__cta__input" placeholder="Email address" />
                    <Button className="footer__top__cta__btn" variant="outlined">SUBSCRIBE</Button>
                </div>
            </div>
            <div className="footer__bottom">
                <h3 className="footer__bottom__cta">Get in touch.</h3>
                <p className="footer__bottom__pride">We pride ourselves on helping our customers so don't hesitate to get in contact</p>
                <div className="footer__bottom__socials">
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <GoogleIcon />
                    <PinterestIcon />
                </div>
                <p className="footer__bottom__customer">CUSTOMER SERVICE</p>
                <a href="tel:+447777777777" className="footer__bottom__phone">Call: +44 (0)1506821910</a>
                <a href="mailto:support@customerworks.com" className="footer__bottom__email">Email: support@customerworks.com</a>
                <p className="footer__bottom__infoTitle">INFORMATION</p>
                <div className="footer__bottom__infoPages">
                    {
                        infoPages.map(page => {
                            let current:string = page.replace(/\s/g, "")
                            current = current.toLowerCase()
                            return(
                                <a href="" className="footer__bottom__info__link">{page}</a>
                            )
                        })
                    }
                </div>
                <p className="footer__bottom__aboutTitle">ABOUT CUSTOM WORKS</p>
                <div className="footer__bottom__aboutPages">
                {
                        aboutPages.map(page => {
                            let current:string = page.replace(/\s/g, "")
                            current = current.toLowerCase()
                            return(
                                <a href="" className="footer__bottom__info__link">{page}</a>
                            )
                        })
                    }
                </div>
                <div className="footer__bottom__logo">
                    <img src={LogoSmall} alt="logo" />
                    <p>&copy; 2021 Custom Works</p>
                </div>
            </div>
        </div>
    )
}

export default footer