import React from 'react';
import '../Assets/Styles/Header.css';
import Like from '../Assets/Images/like.svg';
import Shopping from '../Assets/Images/shopping.svg';
import DigiStyle from '../Assets/Images/digistyle.svg';
import Search from '../Assets/Images/Search.svg';

const Header = () => {
    
    
    return(
        <div>
            <div className="header-wrapper">
                <div className="input-container">
                <input type="text" placeholder="جستجو در میان 409 برند معتبر" className="search-header"/>
                <img src={Search} className="input-img"/>
                </div>
            <ul className="row">
                <li className="column"><img className="icon" src={Shopping}/></li>
                <li className="column"><img className="icon" src={Like}/></li>
                <li className="column">وارد شوید</li>
            </ul>
            </div>
            <ul className="menu" >
                <li>مردانه</li>
                <li>زنانه</li>
                <li>بچه گانه</li>
                <li>برندها</li>
                <li>کارت هدیه</li>
            </ul>
        </div>
    )
}

export default Header;