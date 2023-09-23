import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (

        <div className="social-media-icons">
            <a href="#">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="#">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.linkedin.com/company/tym-yap%C4%B1-i%CC%87n%C5%9Faat-san-tic-ltd-%C5%9Fti/">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
        </div>

    );
}

export default Footer;