import React from 'react';
import './Course.css';
import fakeData from '../../fakeData/index'
import { useState } from 'react';
import Information from '../Information/Information';
import Cart from '../Cart/Cart';
const Course = () => {
    const first15 = fakeData; 
    console.log(first15);
    const [courses, setCourses] = useState(first15);
    const [cart, setCart] = useState([]);
    const handleAddCart = (courses) =>{
        const newCart = [...cart, courses];
        setCart(newCart);
    }
        return (
        <div className="course-container">
            <div className="course-data">
            {
                courses.map(course => <Information course={course} handleAddCart={handleAddCart}></Information>)
            }
            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Course;