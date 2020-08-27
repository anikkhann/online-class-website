import React from 'react';
import './Course.css';
import fakeData from '../../fakeData/index'
import { useState } from 'react';
import Information from '../Information/Information';
import Cart from '../Cart/Cart';
const Course = () => {
    const first15 = fakeData; 
    //console.log(first15);
    const [courses, setCourses] = useState(first15);//here fakeData array(15) stored in courses
    const [cart, setCart] = useState([]);//initially  cart value = empty arry
    const handleAddCart = (courses) =>{
        const newCart = [...cart, courses];//here newcart value is array with full of data
        setCart(newCart);//updated cart value
    }
        return (
        <div className="course-container">
            <div className="course-data">
            {
                courses.map(
                    course => <Information course={course}
                    handleAddCart={handleAddCart}>
                    </Information>)//Information is a child component of Course component.using ma for sending all data to Information component
            }
            </div>
            <div>
                <Cart cart={cart}></Cart>   {/*updated data storedin cart and it send to child component Cart*/}
            </div>
        </div>
    );
};

export default Course;