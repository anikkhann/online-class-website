import React from 'react';
import Illustration from '../../images/Illustration.png'; //import image from images folder
import './Header.css';

const Header = () => { //This is a Header Component 
    return (

        <div className="header">
            <img src={Illustration} alt=""/>
            <h2>Online Class Website</h2>
            <br/>
            <nav className="bg-dark d-flex justify-content-end"> {/*here bootstrap class used for showing nav at the end*/}
                <a href="/books">Books</a>
                <a href="/courses">Courses</a>
                <a href="/Others">Others</a>
                <a href="/sign">Sign in</a>
            </nav>
        </div>
    );
};

export default Header;