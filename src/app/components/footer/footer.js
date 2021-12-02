import React from 'react';
import './style.css';
import googlePlay from '../../assets/images/googlePlay.png';
import appStore from '../../assets/images/appStore.png';
import socialIcons from '../../assets/images/socialIcons.png';
import footerText from '../../assets/images/footerText.png';

function Footer() {

    return (
        <div className={'footer'}>
                <div className="footerFirstPart">
                    <div className="footerColumn">
                        <div className="footColTitle">Company</div>
                        <div className="footColTitlePart">About Us</div>
                        <div className="footColTitlePart">Careers</div>
                        <div className="footColTitlePart">Contact Us</div>
                    </div>
                    <div className="footerColumn">
                        <div className="footColTitle">Support</div>
                        <div className="footColTitlePart">Help Center</div>
                        <div className="footColTitlePart">Safety Center</div>
                    </div>
                    <div className="footerColumn">
                        <div className="footColTitle">Legal</div>
                        <div className="footColTitlePart">Cookies Policy</div>
                        <div className="footColTitlePart">Privacy Policy</div>
                        <div className="footColTitlePart">Terms Of Service</div>
                        <div className="footColTitlePart">Dispute resolution</div>
                    </div>
                    <div className="footerColumn">
                        <div className="footColTitle">Install App</div>
                        <div className="googleAppIcon">
                            <img src={googlePlay} alt="googlePlay"/>
                        </div>
                        <div className="googleAppIcon">
                            <img src={appStore} alt="appStore"/>
                        </div>
                    </div>
                </div>
                <hr/>
                    <div className="footerSecondPart">
                        <div className="footerTxt">
                            <img src={footerText} alt="rightsReserved"/>
                        </div>
                        <div className="socialIcons">
                            <img src={socialIcons} alt="socialIc"/>
                        </div>
                </div>
            </div>
                )
}

export default Footer;