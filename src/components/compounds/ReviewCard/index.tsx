import Image from "next/image";

import RatingStar from "_components/compounds/RatingStar";
import styles from "_components/compounds/ReviewCard/ReviewCard.module.css";

const TOTAL_REVIEW = 5;
const DUMMY_TIME_TEXT = "2 hours ago";

export interface ReviewCardProps {
  productImage: string;
  productDesc: string;
  productName: string;
  rating: number;
  username: string;
  comment: string;
  userProfile: string;
  userAvatar: StaticImageData | string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  productImage,
  productDesc,
  productName,
  rating,
  username,
  comment,
  userProfile,
  userAvatar,
}) => {
  return (
    <div className={styles["review-container"]}>
      <div className={styles["card-wrapper"]}>
        <div className={styles["title-wrapper"]}>
          <div className={styles["image"]}>
            <Image
              src={productImage}
              alt="review card"
              objectFit="contain"
              layout="fill"
            />
          </div>
          <div className={styles["title"]}>
            <p>{productName}</p>
            <span>{productDesc}</span>
          </div>
        </div>

        <div className={styles["review-rate"]}>
          <RatingStar total={TOTAL_REVIEW} rate={rating} />
          <span>{DUMMY_TIME_TEXT}</span>
        </div>

        <p className={styles.comment}>{comment}</p>
      </div>

      <div className={styles["profile-container"]}>
        <div className={styles["profile-avatar-wrapper"]}>
          <Image
            src={userAvatar}
            alt="reviewer's avatar"
            objectFit="contain"
            layout="fill"
          />
        </div>
        <p>{username}</p>
        <span>{userProfile}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
