import Image from "next/image";
import Button from "_components/atoms/Button";

import ProductCard from "_components/compounds/ProductCard";
import { BANNER_PRODUCT } from "_constants/mock";
import style from "_components/compounds/Banner/Banner.module.css";
import bannerIllustrationImg from "_images/banner-illustration.jpg";

const Banner: React.VFC = () => {
  return (
    <div className={style.banner}>
      <div className={style["banner-illustration"]}>
        <Image
          src={bannerIllustrationImg}
          objectFit="contain"
          height={405}
          layout="fill"
          alt="banner illustration"
        />
      </div>

      <div className={style["banner-content"]}>
        <p className={style["highlight"]}>
          Looking for products that are just simplify perfect for you?
        </p>
        <p>
          Here are some products that we believe match your skin, hair, and
          body! Have we mentioned that solve your concenr too?
        </p>
        <Button className={style["banner-button"]} variant="primary">
          See My Matches
        </Button>
      </div>

      <div className={style["banner-product"]}>
        {BANNER_PRODUCT.map((data, index) => (
          <ProductCard
            key={index}
            className={style["product"]}
            name={data.name}
            rating={data.rating}
            description={data.description}
            image={data.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
