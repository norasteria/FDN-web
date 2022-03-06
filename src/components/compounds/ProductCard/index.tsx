import Image from "next/image";
import classNames from "classnames";

import RatingStar from "_components/compounds/RatingStar";
import styles from "_components/compounds/ProductCard/ProductCard.module.css";

export interface ProductCardProps {
  className?: string;
  name: string;
  rating: number;
  description: string;
  image: string | StaticImageData;
}

const TOTAL_RATING = 5;
const TOTAL_VOTERS = 7;

const ProductCard: React.VFC<ProductCardProps> = ({
  className,
  image,
  rating,
  description,
  name,
}) => {
  return (
    <div className={classNames(className, styles["product-card-container"])}>
      <div className={styles["product-image"]}>
        <Image src={image} layout="fill" objectFit="cover" alt="product" />
      </div>

      <div className={styles["product-rating"]}>
        <b>{rating} &nbsp;</b>
        <RatingStar total={TOTAL_RATING} rate={rating} />
        <span>&nbsp;({TOTAL_VOTERS})</span>
      </div>

      <div className={styles["product-description"]}>
        <b>{name}</b>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
