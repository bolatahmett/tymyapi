import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedIn,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer>
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
                {/* <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a> */}
            </div>
            <p>&copy; 2023 Pama Software</p>
        </footer>
    );
}

export default Footer;