import React from 'react';
import Slider from './slider';
import Menu from './menu';
import Footer from './footer';
import Aboutus from './aboutus';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";

function Home() {

    return (
        <div className="home">
            <Menu />

            <Routes>
                <Route path='/' element={<Slider />} />
                <Route path='/aboutus' element={<Aboutus />} />
            </Routes>

            <Footer />
        </div>
    );
}

export default Home;