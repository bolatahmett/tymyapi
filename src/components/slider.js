import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {

    return (
        <Carousel showArrows={true} autoPlay>
            <div>
                <img src="./home-slide/1-cephetasarim.jpg" />
                {/* <p className="legend">Cephe Tasarim</p> */}
            </div>
            <div>
                <img src="./home-slide/2-gridstone.jpg" />
                {/* <p className="legend">Grid Stone</p> */}
            </div>
            <div>
                <img src="./home-slide/3-izolasyon.jpeg" />
                {/* <p className="legend">Izolasyon</p> */}
            </div>
            <div>
                <img src="./home-slide/4-mimariproje.jpg" />
                {/* <p className="legend">Mimari Proje</p> */}
            </div>
        </Carousel>
    );
};
export default Slider;