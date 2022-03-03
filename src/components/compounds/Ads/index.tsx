import styles from "_components/compounds/Ads/Ads.module.css";

export interface AdsBoxProps extends React.HTMLProps<HTMLDivElement> {
  height: number;
  width: number;
  text: string;
  description?: string;
}

const AdsBox: React.VFC<AdsBoxProps> = ({
  height,
  width,
  text,
  description,
  style,
  ...props
}) => {
  return (
    <div {...props} className={styles.ads} style={{ ...style, height, width }}>
      <div className={styles["ads-content"]}>
        <span>{text + ` ${width}x${height}`}</span>
        <span>{description}</span>
      </div>
    </div>
  );
};

export default AdsBox;
