import React from 'react';
import '../Assets/Styles/Header.css';
import Like from '../Assets/Images/like.svg';
import Shopping from '../Assets/Images/shopping.svg';
import DigiStyle from '../Assets/Images/digistyle.svg';
import Search from '../Assets/Images/Search.svg';
import Collapsible from 'react-collapsible';
import { FaCaretDown,FaCartArrowDown,FaRegHeart,FaSistrix } from 'react-icons/fa';

class Header extends React.Component{
    SearchInpurHandler =(event)=>{
        console.log(event.target.value)
    }
    
     render(){
        return(
            <div>
                <div className="header-wrapper">
                    <div className="input-container">
                    <div className="input-search">
                    <input type="text" placeholder="جستجو در میان 409 برند معتبر" className="search-header" 
                    onChange={this.SearchInpurHandler}/>
                    </div>
                    <div className="fa-search"><FaSistrix/></div>
                    </div>
                    
                <ul className="row">
                    <li className="column"><FaCartArrowDown/></li>
                    <li className="column"><FaRegHeart/>
                    </li>
                    {/* <Collapsible trigger="click" className="collapsible__trigger">
                        <p>click here</p></Collapsible> */}
                    <li className="column" className="login-in-header">وارد شوید<FaCaretDown/></li>
                </ul>
                
                </div>
                <div className="wrapper-menu">
                <ul className="menu" >
                    <li>مردانه</li>
                    <li>زنانه</li>
                    <li>بچه گانه</li>
                    <li>برندها</li>
                    <li>کارت هدیه</li>
                </ul>
                </div>
            </div>
        )
     }
}

export default Header;