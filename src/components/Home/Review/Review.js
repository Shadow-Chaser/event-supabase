import React from 'react';
import './Review.css'

const Review = (props) => {
    const { name, address, image, review } = props.review;
    return (
        <div class="review">
            <div class="review-body">
                <p className='review-text'> <sup>❝</sup> {review} <sup>❞</sup></p> <br />

            </div>
            <div class="review-footer">
                {/* <img src={`data:image/png;base64,${props.review.image.img}`} className='rounded-circle' alt="user" /> */}
                <img src={image} className='rounded-circle' alt="user" />

                <h3>{name}</h3>
                <h4>{address}</h4>
            </div>
        </div>

    );
};

export default Review;