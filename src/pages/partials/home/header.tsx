import Image from "next/image";

import Button from "_components/atoms/Button";
import SearchBar from "_components/compounds/SearchBar";
import menuBurgerIcon from "_icons/menu-burger.png";
import FDLogo from "_images/fd-logo.png";
import searchIcon from "_icons/search.png";
import styles from "_pages/partials/home/header.module.css";

const HomePageHeader: React.FC = () => {
  return (
    <div className={styles["header-wrapper"]}>
      <div className={styles["header-search"]}>
        <Button>
          <Image src={menuBurgerIcon} width={20} height={15} alt="web menu" />
        </Button>
        <div className={styles["header-logo"]}>
          <Image alt="female daily logo" src={FDLogo} width={155} height={30} />
        </div>
        <SearchBar
          append={searchIcon}
          placeholder="Search products, articles, topics, brands, etc"
        />
      </div>
      <Button className={styles["header-login-button"]} variant="primary">
        LOGIN / SIGNUP
      </Button>
    </div>
  );
};

export default HomePageHeader;
