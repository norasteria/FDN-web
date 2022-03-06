import Image from "next/image";
import FDLogo from "_images/fd-logo.png";
import styles from "_pages/partials/home/footer.module.css";
import AdsBox from "_components/compounds/Ads";
import googlePlayImg from "_images/google-play.png";
import appStoreImg from "_images/app-store.png";
import facebookImg from "_icons/facebook.png";
import twitterImg from "_icons/twitter.png";
import instagramImg from "_icons/instagram.png";
import youtubeImg from "_icons/youtube.png";

const FOOTER_MENUS: string[] = [
  "About Us",
  "Feedback",
  "Contanct",
  "Terms & Condition",
  "Privacy Policy",
  "Help",
  "Awards",
  "Newsletter",
];

const SOCIAL_MEDIA: StaticImageData[] = [
  facebookImg,
  twitterImg,
  instagramImg,
  youtubeImg,
];

const Footer: React.FC = () => {
  return (
    <div className={styles["footer-wrapper"]}>
      <div className={styles["footer-content-wrapper"]}>
        <div className={styles["footer-menus-wrapper"]}>
          <ul className={styles["footer-menus"]}>
            {FOOTER_MENUS.map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
          <div>
            <p>Download Our Mobile App</p>
            <Image src={appStoreImg} width={135} height={40} alt="app store" />
            <div style={{ marginLeft: 25, display: "inline-block" }}>
              <Image
                src={googlePlayImg}
                width={135}
                height={40}
                alt="google playstore"
              />
            </div>
          </div>
        </div>

        <div className={styles["footer-social-media-wrapper"]}>
          <div>
            <Image
              src={FDLogo}
              alt="Female Daily Logo"
              width={150}
              height={30}
            />
            <p className={styles.copyright}>
              Copyright &#169; 2015 - 2017 Female Daily Network &bull; All
              rights reserved
            </p>
          </div>
          <div className={styles["footer-social-media"]}>
            {SOCIAL_MEDIA.map((socmed, index) => (
              <div className="social-media-img" key={index}>
                <Image src={socmed} height={30} width={30} alt="social media" />
              </div>
            ))}
          </div>
        </div>
        <AdsBox
          text="Bottom Frame 970x50, 468x60, 320x50"
          width={970}
          height={50}
          style={{ marginTop: 60 }}
        />
      </div>
    </div>
  );
};

export default Footer;
