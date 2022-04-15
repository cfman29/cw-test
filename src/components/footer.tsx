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
            <div className="footer__first image__bg" style={{backgroundImage: 'url("http://placekitten.com/800")'}}>
                <div className="footer__first__text">
                    <span></span>
                    <p>NEWSLETTER</p>
                    <h4>Subscribe for more offers & inspiration</h4>
                </div>
                <div className="footer__first__cta">
                    <input type="text" className="footer__first__cta__input" placeholder="Email address" />
                    <Button className="footer__first__cta__btn" variant="outlined">SUBSCRIBE</Button>
                </div>
            </div>
            <div className="footer__second">
                <div className="footer__second__contact">
                    <h3 className="footer__second__contact__cta">Get in touch.</h3>
                    <p className="footer__second__contact__pride">We pride ourselves on helping our customers so don't hesitate to get in contact</p>
                    <div className="footer__second__contact__socials">
                        <FacebookIcon />
                        <TwitterIcon />
                        <InstagramIcon />
                        <GoogleIcon />
                        <PinterestIcon />
                    </div>
                </div>
                <div className="footer__second__info">
                    <div className="footer__second__info__first">
                        <p className="footer__second__info__first__customer">CUSTOMER SERVICE</p>
                        <a href="tel:+447777777777" className="footer__second__info__first__phone">Call: +44 (0)1506821910</a>
                        <a href="mailto:support@customerworks.com" className="footer__second__info__first__email">Email: support@customerworks.com</a>
                    </div>
                    <div className="footer__second__info__second">
                        <p className="footer__second__info__second__title">INFORMATION</p>
                        <div className="footer__second__info__second__page">
                            {
                                infoPages.map(page => {
                                    let current:string = page.replace(/\s/g, "")
                                    current = current.toLowerCase()
                                    return(
                                        <a href="#" className="footer__second__info__second__page__link">{page}</a>
                                        )
                                    })
                                }
                        </div>
                    </div>
                    <div className="footer__second__info__third">
                        <p className="footer__second__info__third__title">ABOUT CUSTOM WORKS</p>
                        <div className="footer__second__info__third__page">
                        {
                            aboutPages.map(page => {
                                let current:string = page.replace(/\s/g, "")
                                current = current.toLowerCase()
                                return(
                                    <a href="" className="footer__second__info__third__page__link">{page}</a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="footer__second__logo">
                    <img src={LogoSmall} alt="logo" />
                    <p>&copy; 2021 Custom Works</p>
                </div>
            </div>
        </div>
    )
}

export default footer