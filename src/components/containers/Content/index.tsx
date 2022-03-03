import styles from "_components/containers/Content/Content.module.css";

const Container: React.FC = ({ children }) => {
  return <div className={styles["content-container"]}>{children}</div>;
};

export default Container;
