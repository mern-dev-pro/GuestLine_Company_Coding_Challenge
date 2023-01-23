import React from 'react';
import StarRatings from 'react-star-ratings';

type RatingProps = {
  rating: number;
  changeRating?: React.Dispatch<React.SetStateAction<number>>;
};

const Rating: React.FC<RatingProps> = ({ rating, changeRating }) => {
  return (
    <div>
      <StarRatings
        rating={rating}
        changeRating={changeRating}
        starDimension={'30px'}
        starSpacing={'3px'}
        starRatedColor="#ff3300"
        starHoverColor="#ff3300"
        numberOfStars={5}
        name="rating"
      />
    </div>
  );
};

export default Rating;
