import React from 'react';
import { NavLink } from 'react-router-dom';


const Menu = () => {
    return (
        <div>
            <div className='navbar'>
                <div className="logo-box">
                    <NavLink to="/"><img src="https://media.geeksforgeeks.org/wp-content/uploads/geek.png" alt="" /></NavLink>
                </div>
                <div className='right-side'>
                    <ul>
                        <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/">Home</NavLink></li>
                        <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/product/10/hasan">Product</NavLink></li>
                        <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/profile/Mehedi/Nayeem">Profile</NavLink></li>
                        <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/about">About</NavLink></li>
                        <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/team">Team</NavLink></li>
                        <li><NavLink className={({isActive})=>isActive?"active-item":"pending-item"} to="/contact">Contact</NavLink></li>
                    </ul>
                    <ul>
                        <li><NavLink>
                                <div className="search-box">
                                    <input type="search" name="" className='search-input' /> 
                                    <button type='search' className='search-btn'>
                                        <img src="/src/assets/images/search.png" alt="" />
                                    </button>
                                </div>
                            </NavLink>
                        </li>
                        <li><NavLink>
                            <div className="author-box">
                                <img src="/src/assets/images/men.png" alt="" />
                            </div>
                            </NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menu;