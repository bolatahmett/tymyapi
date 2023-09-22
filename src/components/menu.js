import React, { useState } from 'react';

const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="menu">
            <div className="menu-container">
                <div className="menu-logo">
                    <img src="tym.png" alt="Logo" />
                </div>
                <div className={`menu-list ${isMenuOpen ? 'active' : ''}`}>

                    <li><a href="#">HAKKIMIZDA</a></li>
                    <li><a href="#">PROJELER</a></li>
                    <li><a href="#">UYGULAMALAR</a></li>
                    <li><a href="#">GALERI</a></li>
                    <li><a href="#">ILETISIM</a></li>

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

// import React from 'react';

// function Menu() {
//     return (
//         <nav className="menu">
//             <div className="menu-container">
//                 <div className="menu-logo">
//                     <img src="tym.png" alt="Logo" />
//                 </div>
//                 <ul className="menu-list">
//                     <li><a href="#">HAKKIMIZDA</a></li>
//                     <li><a href="#">PROJELER</a></li>
//                     <li><a href="#">UYGULAMALAR</a></li>
//                     <li><a href="#">GALERI</a></li>
//                     <li><a href="#">ILETISIM</a></li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }

// export default Menu;