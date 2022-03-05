import type { NextPage } from "next";
import Image from "next/image";
import { useSelector } from "react-redux";

import HomeWrapper from "_pages/partials/home/wrapper";
import HomeHeader from "_pages/partials/home/header";
import ConntentWrapper from "_components/containers/Content";
import AdsBox from "_components/compounds/Ads";
import type { MenuData } from "_components/compounds/Navbar";
import Navbar from "_components/compounds/Navbar";
import Section from "_components/compounds/Section";
import bannerImage from "_images/banner.png";
import style from "_pages/index.module.css";
import Footer from "_pages/partials/home/footer";
import store from "_services/store";
import { getDashboardDataAsyncType } from "_services/app/type";

// BRANDS
import niveaImg from "_images/nivea.png";
import theOrdinaryImg from "_images/the-ordinary.png";
import theBodyShopImg from "_images/the-body-shop.png";
import skIIImg from "_images/sk-ii.png";
import maybellineImg from "_images/maybelline.png";
import innisfreeImg from "_images/innisfree.png";
import { RootState } from "_services/rootReducers";

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

const Home: NextPage = () => {
  const { test } = useSelector((state: RootState) => state.dashboard);
  console.log({ test });

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
          {/* editor's card */}
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
            // <div key={index} style={{ maxWidth: 60, position: "relative" }}>
            <Image
              key={index}
              src={source}
              alt={"top brands images"}
              height={60}
              // width={60}
              objectFit="contain"
              // layout="fill"
            />
            // {/* </div> */}
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
  store.dispatch(getDashboardDataAsyncType());

  return {
    props: {},
  };
}

export default Home;
