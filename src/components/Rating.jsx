import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ value, text }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (value >= i) {
      stars.push(<FaStar key={i} color="#1d9974 " />);
    } else if (value >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} color="#1d9974 " />);
    } else {
      stars.push(<FaRegStar key={i} color="#1d9974" />);
    }
  }
  return (
    <div className="rating">
      {stars} <span className="ms-1">{text && text}</span>
    </div>
  );
};

export default Rating;