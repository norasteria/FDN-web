import type { NextPage } from "next";
import Image from "next/image";

import HomeWrapper from "_pages/partials/home/wrapper";
import HomeHeader from "_pages/partials/home/header";
import ConntentWrapper from "_components/containers/Content";
import AdsBox from "_components/compounds/Ads";
import type { MenuData } from "_components/compounds/Navbar";
import Navbar from "_components/compounds/Navbar";
import Section from "_components/compounds/Section";
import bannerImage from "_images/banner.png";
import style from "_pages/index.module.css";

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

const Home: NextPage = () => {
  return (
    <HomeWrapper>
      <HomeHeader />
      <Navbar menus={HOME_MENUS} />
      <AdsBox
        text="Top Frame"
        width={970}
        height={50}
        style={{ marginBottom: 25 }}
      />
      <AdsBox
        text="Billboard"
        width={970}
        height={250}
        style={{ marginBottom: 30 }}
      />
      <ConntentWrapper>
        <Section title="Editor's Choise" subtitle="Curated with love" />
        {/* EDITOR'S CHOISE DATA */}
      </ConntentWrapper>
      <Image src={bannerImage} alt="female daily ads banner" />
      <AdsBox
        text="Horizontal"
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
        <div className={style["latest-review-wrapper"]}>
          <Section
            title="Latest Reviews"
            subtitle="So you can make better pruchase decision"
            more
          />
          {/* Latest Articles DATA */}
        </div>
        <AdsBox text="MR 2" width={300} height={250} />
      </ConntentWrapper>
    </HomeWrapper>
  );
};

export default Home;
