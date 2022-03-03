import styles from "_components/compounds/Navbar/Navbar.module.css";

export type MenuData = {
  text: string;
};

export interface NavbarProps {
  menus: MenuData[];
}

const Navbar: React.FC<NavbarProps> = ({ menus }) => {
  return (
    <nav className={styles["navbar-container"]}>
      {menus.map(({ text }, index) => (
        <div className={styles["navbar-item"]} key={index}>
          {text}
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
