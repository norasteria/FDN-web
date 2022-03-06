import Image from "next/image";
import RatingStar from "_components/compounds/RatingStar";
import styles from "_components/compounds/EditorCard/EditorCard.module.css";

const TOTAL_RATING = 5;
const TOTAL_VOTERS = 7;

export interface Product {
  name: string;
  rating: number;
  description: string;
  image: string;
}

export interface EditorCard {
  avatarSrc?: StaticImageData | string;
  editorName: string;
  role: string;
  product: Product;
}

const EditorCard: React.VFC<EditorCard> = ({
  avatarSrc,
  editorName,
  role,
  product,
  ...props
}) => {
  return (
    <div className={styles["editor-card-wrapper"]} {...props}>
      <div className={styles["editor-profile"]}>
        {avatarSrc && (
          <div className={styles["editor-avatar"]}>
            <Image
              src={avatarSrc}
              alt="editor-avatar"
              objectFit="cover"
              height={60}
              width={60}
              priority
            />
          </div>
        )}

        <div className={styles["editor-name"]}>
          <b>{editorName}</b>
          <br />
          <span>{role}</span>
        </div>
      </div>

      <div className={styles["editor-product"]}>
        <div className={styles["editor-prodict-img"]}>
          <Image
            src={product.image}
            layout="fill"
            objectFit="cover"
            alt="product"
          />
        </div>

        <div className={styles["editor-rating"]}>
          <b>{product.rating} &nbsp;</b>
          <RatingStar total={TOTAL_RATING} rate={product.rating} />
          <span>&nbsp;({TOTAL_VOTERS})</span>
        </div>

        <b>{product.name}</b>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default EditorCard;
