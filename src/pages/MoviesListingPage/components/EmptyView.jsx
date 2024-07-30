import React, { useState } from "react";
import footer_img from '../../../assets/images/footer_img.png';
import './styles.scss';

const EmptyViewPage = () => {
    const createMovie = () => {
        console.log("here");
    };

    return (
        <div className="empty-view-container">
            <div className="empty-view-heading">Your movie list is empty</div>
            <button onClick={createMovie} className="add-movie-btn">Add n new movie</button>
            <img src={footer_img} alt="Footer" className="footer-img" />
        </div>
    )
}

export default EmptyViewPage;
