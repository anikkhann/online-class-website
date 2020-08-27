import React from 'react';
import './Information.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


const Information = (props) => {
    const {name, img, price, id, teacher, email} = props.course;
    return (
        <div className="information-container">
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
                <img src={img} alt=""/>
            </div>

            <div className="information">
                <h5>Course Name: {name}</h5>
                <h6>Course Id: {id}</h6>
                <h6>Price: {price}</h6>
                <h6>Course Taken By: {teacher}</h6>
                <h6>Teacher Email: {email}</h6>
                <button className="btn btn-success" onClick={(() => props.handleAddCart(props.course))}><FontAwesomeIcon icon={faCartPlus} /> Enroll Now</button>
            </div>
        </div>
    );
};

export default Information;