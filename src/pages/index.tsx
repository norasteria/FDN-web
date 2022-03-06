import type { NextPage } from "next";
import Image from "next/image";
import { useCallback } from "react";

import AdsBox from "_components/compounds/Ads";
import Navbar from "_components/compounds/Navbar";
import ContentWrapper from "_components/containers/Content";
import Banner from "_components/compounds/Banner";
import type { MenuData } from "_components/compounds/Navbar";
import Section from "_components/compounds/Section";
import EditorCard from "_components/compounds/EditorCard";
import ArticleThumbnail from "_components/compounds/ArticleThumnail";
import type { ProductCardProps } from "_components/compounds/ProductCard";
import ProductCard from "_components/compounds/ProductCard";
import ReviewCard from "_components/compounds/ReviewCard";
import Head from "_components/containers/Head";
import HomeHeader from "_components/compounds/Header";
import style from "_pages/index.module.css";
import Footer from "_components/compounds/Footer";
import store from "_services/store";
import { getDashboardDataAsyncType } from "_services/app/type";
import { DashboardDataState } from "_services/app/reducers";
import Carousel from "_components/compounds/Carousel";
import { LatestReview } from "_services/app/dto";
import { grouppedArray } from "_helpers/array";
import personIcon from "_icons/person.png";
import chatIcon from "_icons/chat.png";
import otherMenuIcon from "_icons/other-menu.png";

// BRANDS
import niveaImg from "_images/nivea.png";
import theOrdinaryImg from "_images/the-ordinary.png";
import theBodyShopImg from "_images/the-body-shop.png";
import skIIImg from "_images/sk-ii.png";
import maybellineImg from "_images/maybelline.png";
import innisfreeImg from "_images/innisfree.png";
import dummyAvatar from "_images/dummy-avatar.png";
import { POPULAR_GROUPS_DATA, PRODUCT_DATA } from "_constants/mock";

// VIDEO THUMBNAILS
import thumbnail1Img from "_images/videoThumbnail/thumbnail-1.png";
import thumbnail2Img from "_images/videoThumbnail/thumbnail-2.png";
import thumbnail3Img from "_images/videoThumbnail/thumbnail-3.png";

const HOME_MENUS: MenuData[] = [
  { text: "SKINCARE" },
  { text: "MAKE UP" },
  { text: "BODY" },
  { text: "HAIR" },
  { text: "FRAGRANCE" },
  { text: "NAILS" },
  { text: "TOOLS" },
  { text: "BRANDS" },
];

const TOP_BRAND_DATA: StaticImageData[] = [
  niveaImg,
  theOrdinaryImg,
  theBodyShopImg,
  skIIImg,
  maybellineImg,
  innisfreeImg,
];

export interface HomePageProps {
  dashboard: DashboardDataState;
}

const Home: NextPage<HomePageProps> = ({ dashboard }) => {
  const { editorChoise, latestArticles, latestReview } = dashboard;

  const renderLatestReviewCarouselItem = useCallback(
    (reviewData: LatestReview[]) => {
      return (
        <div className={style["latest-review-carousel-item"]}>
          {reviewData.map((data, index) => (
            <ReviewCard
              key={index}
              comment={data.comment}
              productDesc={data.product.desc}
              productImage={data.product.image}
              productName={data.product.name}
              rating={data.star}
              userProfile={data.profile.join(", ")}
              username={data.user}
              userAvatar={dummyAvatar}
            />
          ))}
        </div>
      );
    },
    []
  );

  const renderProductCarouselItem = useCallback(
    (product: ProductCardProps[]) => {
      return (
        <div className={style["product-carousel-item-wrapper"]}>
          {product.map((data, index) => (
            <div key={index} className={style["product-carousel-item"]}>
              <ProductCard
                name={data.name}
                description={data.description}
                image={data.image}
                rating={data.rating}
              />
            </div>
          ))}
        </div>
      );
    },
    []
  );

  return (
    <Head>
      <HomeHeader />
      <Navbar menus={HOME_MENUS} />
      <AdsBox
        text="Top Frame 970x50"
        width={970}
        height={50}
        style={{ marginBottom: 25 }}
      />
      <AdsBox
        text="Billboard 970x250"
        width={970}
        height={250}
        style={{ marginBottom: 30 }}
      />
      <ContentWrapper>
        <Section title="Editor's Choise" subtitle="Curated with love" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {editorChoise?.map((data, index) => (
            <EditorCard
              key={index}
              editorName={data.editor}
              role={data.role}
              product={data.product}
              avatarSrc={dummyAvatar}
            />
          ))}
        </div>
      </ContentWrapper>

      <Banner />

      <AdsBox
        text="Horizontal 970x250"
        description="(Internal campaign only)"
        width={970}
        height={250}
        style={{ marginBottom: 30, marginTop: 60 }}
      />

      <ContentWrapper>
        <Section
          title="Latest Articles"
          subtitle="So you can make better pruchase decision"
          more
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {latestArticles.map((data, index) => (
            <ArticleThumbnail
              key={index}
              author={data.author}
              title={data.title}
              thumbnail={data.image}
              time={data.published_at}
            />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className={style["latest-review-wrapper"]}>
            <Section
              title="Latest Reviews"
              subtitle="So you can make better pruchase decision"
              more
            />
            <Carousel<LatestReview[]>
              data={grouppedArray(latestReview, 2)}
              renderItem={renderLatestReviewCarouselItem}
            />
          </div>
          <AdsBox
            text="MR 2 300x250"
            width={300}
            height={250}
            style={{ margin: 0 }}
          />
        </div>

        <Section
          title="Popular Groups"
          subtitle="Where the beauty TALK are"
          more
        />

        <div className={style["popular-group-card-container"]}>
          {POPULAR_GROUPS_DATA.map((image, index) => (
            <div key={index} className={style["popular-group-card"]}>
              <div className={style["popular-group-img"]}>
                <Image
                  src={image}
                  alt="popular group"
                  objectFit="contain"
                  layout="fill"
                />
              </div>
              <div className={style["popular-group-card-title"]}>
                <span>Embrace the Curl</span>
              </div>

              <div className={style["popular-group-menu"]}>
                <div className={style["popular-group-menu-item"]}>
                  <Image
                    src={personIcon}
                    objectFit="contain"
                    layout="fill"
                    alt="menu item"
                  />
                </div>
                <div className={style["popular-group-menu-item"]}>
                  <Image
                    src={otherMenuIcon}
                    objectFit="contain"
                    layout="fill"
                    alt="menu item"
                  />
                </div>
                <div className={style["popular-group-menu-item"]}>
                  <Image
                    src={chatIcon}
                    objectFit="contain"
                    layout="fill"
                    alt="menu item"
                  />
                </div>
              </div>

              <p className={style["popular-group-description"]}>
                May our curls pop and never stop!
              </p>
            </div>
          ))}
        </div>

        <Section
          title="Latest Videos"
          subtitle="Watch and learn, ladies"
          more
        />
        <div className={style["latest-video-row"]}>
          <div className={style["thumbnail"]}>
            <Image src={thumbnail1Img} alt="video thumbnail" />
          </div>
          <div className={style["thumbnail"]}>
            <Image src={thumbnail2Img} alt="video thumbnail" />
          </div>
          <div className={style["thumbnail"]}>
            <Image src={thumbnail3Img} alt="video thumbnail" />
          </div>
        </div>

        <Section
          title="Trending This Week"
          subtitle="See our weekly mots reviewed products"
          more
        />

        <Carousel<ProductCardProps[]>
          data={grouppedArray(PRODUCT_DATA, 6)}
          renderItem={renderProductCarouselItem}
        />

        <Section title="Top Brands" subtitle="We all know and love" more />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 75,
          }}
        >
          {TOP_BRAND_DATA.map((source, index) => (
            <div className={style["top-brand-img-wrapper"]} key={index}>
              <Image
                src={source}
                alt="top brands images"
                objectFit="contain"
                layout="fill"
              />
            </div>
          ))}
        </div>

        <span style={{ fontWeight: 600 }}>
          Female Daily - Find everything you want to know about beauty on Female
          Daily
        </span>
        <p style={{ marginTop: 10 }}>
          Products Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty
          Tutorials, Decisions, Beatuy Workshop, anything!
          <br /> We are here to be your friendly solution to all things beauty,
          inside and out !
        </p>
      </ContentWrapper>
      <Footer />
    </Head>
  );
};

export const getServerSideProps = async () => {
  await store.dispatch(getDashboardDataAsyncType());

  return { props: { dashboard: store.getState().dashboard } };
};

export default Home;
