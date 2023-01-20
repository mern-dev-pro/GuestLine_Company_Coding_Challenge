import React from 'react';
import StarRatings from 'react-star-ratings';

type RatingProps = {
  rating: number;
  changeRating: React.Dispatch<React.SetStateAction<number>>;
};

const Rating: React.FC<RatingProps> = ({ rating, changeRating }) => {
  return (
    <div>
      <StarRatings
        rating={rating}
        changeRating={changeRating}
        starDimension={'30px'}
        starRatedColor="yellow"
        starHoverColor="yellow"
        numberOfStars={5}
        name="rating"
      />
    </div>
  );
};

export default Rating;
