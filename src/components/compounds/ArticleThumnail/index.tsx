import Image from "next/image";

import styles from "_components/compounds/ArticleThumnail/ArticleThumbnail.module.css";

export interface ArticleThumbnail {
  author: string;
  thumbnail: string;
  time: string;
  title: string;
}

const ArticleThumbnail: React.VFC<ArticleThumbnail> = ({
  thumbnail,
  author,
  time,
  title,
  ...props
}) => {
  return (
    <div className={styles.container} {...props}>
      <div className={styles["thumbnail-wrapper"]}>
        <Image
          src={thumbnail}
          alt="article thumbnail"
          height={180}
          width={350}
        />
      </div>
      <div className={styles["title"]}>{title}</div>
      <div className={styles.info}>
        <span>
          {author} | <span className={styles["time"]}>{time}</span>
        </span>
      </div>
    </div>
  );
};

export default ArticleThumbnail;
