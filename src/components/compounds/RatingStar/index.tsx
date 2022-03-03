import Image from "next/image";

import ratingStarActive from "_icons/rating-star-active.png";
import ratingStarInactive from "_icons/rating-star-inactive.png";

export interface RatingStarProps {
  total: number;
  rate: number;
}

const RatingStar: React.FC<RatingStarProps> = ({ total, rate }) => {
  const roundedUpRate = Math.floor(rate);

  return (
    <div>
      {[...new Array(total)].map((_, index) => (
        <Image
          alt="rating"
          key={index}
          height={15}
          width={15}
          src={
            index + 1 <= roundedUpRate ? ratingStarActive : ratingStarInactive
          }
        />
      ))}
    </div>
  );
};

export default RatingStar;
