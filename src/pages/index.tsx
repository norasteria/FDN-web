import type { NextPage } from "next";
import Image from "next/image";

import AdsBox from "_components/compounds/Ads";
import Navbar from "_components/compounds/Navbar";
import ConntentWrapper from "_components/containers/Content";
import type { MenuData } from "_components/compounds/Navbar";
import Section from "_components/compounds/Section";
import bannerImage from "_images/banner.png";
import HomeWrapper from "_pages/partials/home/wrapper";
import HomeHeader from "_pages/partials/home/header";
import style from "_pages/index.module.css";
import Footer from "_pages/partials/home/footer";
import store from "_services/store";
import { getDashboardDataAsyncType } from "_services/app/type";
import { DashboardDataState } from "_services/app/reducers";
import EditorCard from "_components/compounds/EditorCard";

// BRANDS
import niveaImg from "_images/nivea.png";
import theOrdinaryImg from "_images/the-ordinary.png";
import theBodyShopImg from "_images/the-body-shop.png";
import skIIImg from "_images/sk-ii.png";
import maybellineImg from "_images/maybelline.png";
import innisfreeImg from "_images/innisfree.png";

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

export interface HomePagePorps {
  dashboard: DashboardDataState;
}

const Home: NextPage<HomePagePorps> = ({ dashboard }) => {
  const { editorChoise, latestArticles, latestReview } = dashboard;

  return (
    <HomeWrapper>
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
      <ConntentWrapper>
        <Section title="Editor's Choise" subtitle="Curated with love" />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {editorChoise?.map((data, index) => (
            <EditorCard
              key={index}
              editorName={data.editor}
              role={data.role}
              product={data.product}
            />
          ))}
        </div>
      </ConntentWrapper>
      <Image src={bannerImage} alt="female daily ads banner" />
      <AdsBox
        text="Horizontal 970x250"
        description="(Internal campaign only)"
        width={970}
        height={250}
        style={{ marginBottom: 30, marginTop: 60 }}
      />

      <ConntentWrapper>
        <Section
          title="Latest Articles"
          subtitle="So you can make better pruchase decision"
          more
        />
        {/* Latest Articles DATA */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <div className={style["latest-review-wrapper"]}>
            <Section
              title="Latest Reviews"
              subtitle="So you can make better pruchase decision"
              more
            />
            {/* Latest Articles DATA */}
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
        {/* local data */}
        <Section
          title="Latest Videos"
          subtitle="Watch and learn, ladies"
          more
        />
        {/* local data */}
        <Section
          title="Trending This Week"
          subtitle="See our weekly mots reviewed products"
          more
        />
        {/* local data */}
        <Section title="Top Brands" subtitle="We all know and love" more />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 75,
          }}
        >
          {TOP_BRAND_DATA.map((source, index) => (
            <Image
              key={index}
              src={source}
              alt={"top brands images"}
              height={60}
              objectFit="contain"
            />
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
      </ConntentWrapper>
      <Footer />
    </HomeWrapper>
  );
};

export async function getServerSideProps() {
  await store.dispatch(getDashboardDataAsyncType());

  return { props: { dashboard: store.getState().dashboard } };
}

export default Home;
