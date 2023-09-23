import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="menu">
            <div className="menu-container">
                <div className="menu-logo">
                    <Link to="/">
                        <img src="tym.png" alt="Logo" />
                    </Link>
                </div>
                <div className={`menu-list ${isMenuOpen ? 'active' : ''}`}>

                    <li><Link to="/aboutus">HAKKIMIZDA</Link></li>
                    <li>
                        <Link to="/">PROJELER</Link>
                        <ul className="submenu">
                            <li><Link to="/">Mimari Projelerimiz</Link></li>
                            <li><Link to="/">3D Gorsellestirme</Link></li>
                            <li><Link to="/">Cephe Tasarim</Link></li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/">UYGULAMALAR</Link>
                        <ul className="submenu">
                            <li><Link to="/">Puskurtme Granit</Link></li>
                            <li><Link to="/">Izolasyon</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/">GALERI</Link></li>
                    <li><Link to="/">ILETISIM</Link></li>

                </div>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMenuOpen ? 'open' : ''}`}></div>
                </div>
            </div>
        </div>
    );
};

export default Menu;