import Image from "next/image";

import RatingStar from "_components/compounds/RatingStar";
import styles from "_components/compounds/ProductCard/ProductCard.module.css";

export interface ProductCardProps {
  name: string;
  rating: number;
  description: string;
  image: string | StaticImageData;
}

const TOTAL_RATING = 5;
const TOTAL_VOTERS = 7;

const ProductCard: React.VFC<ProductCardProps> = ({
  image,
  rating,
  description,
  name,
}) => {
  return (
    <div>
      <div className={styles["product-image"]}>
        <Image src={image} layout="fill" objectFit="cover" alt="product" />
      </div>

      <div className={styles["editor-rating"]}>
        <b>{rating} &nbsp;</b>
        <RatingStar total={TOTAL_RATING} rate={rating} />
        <span>&nbsp;({TOTAL_VOTERS})</span>
      </div>

      <b>{name}</b>
      <p>{description}</p>
    </div>
  );
};

export default ProductCard;
