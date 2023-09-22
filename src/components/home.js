import React from 'react';
import Carousel from './Carousel';
import Menu from './menu';
import Footer from './footer';

const images = [
    './home-slide/1-cephetasarim.jpg',
    './home-slide/2-gridstone.jpg',
    './home-slide/3-izolasyon.jpeg',
    './home-slide/4-mimariproje.jpg'
];
function Home() {

    return (
        <div className="home">
            <Menu />
            <Carousel images={images} />
            <Footer />
        </div>
    );
}

export default Home;