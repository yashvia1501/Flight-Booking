import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from 'react-icons/ai';

const Star = ({ stars, reviews }) => {
    // Create an array to hold the star elements
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        const number = index + 0.5;
        return (
            <span key={index}>
                {stars >= index + 1 ? (
                    <FaStar style={{color:"rgb(223, 85, 5)"}} />
                ) : stars >= number ? (
                    <FaStarHalfAlt style={{color:"rgb(223, 85, 5)", border:"1px black"}} />
                ) : (
                    <AiOutlineStar style={{color:"rgb(223, 85, 5)"}} />
                )}
            </span>
        );
    });

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            {ratingStar}
            {/* <span style={{ marginLeft: "8px" }}>{reviews}</span> */}
        </div>
    );
};

export default Star;
