import Image from "next/image";
import styles from "_components/compounds/EditorCard/EditorCard.module.css";
import ProductCard from "_components/compounds/ProductCard";

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
        <ProductCard
          image={product.image}
          rating={product.rating}
          name={product.name}
          description={product.description}
        />
      </div>
    </div>
  );
};

export default EditorCard;
