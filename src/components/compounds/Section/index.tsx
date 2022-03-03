import Image from "next/image";

import Button from "_components/atoms/Button";
import chevronRightPrimaryIcon from "_icons/chevron-right-primary.png";
import styles from "_components/compounds/Section/Section.module.css";

export interface SectionProps {
  title: string;
  subtitle: string;
  id?: string;
  more?: boolean;
  moreTitle?: string;
}

const Section: React.VFC<SectionProps> = ({
  title,
  subtitle,
  more,
  moreTitle,
  id,
}) => {
  return (
    <div className={styles["section-wrapper"]} id={id}>
      <span className={styles["section-title"]}>{title}</span>
      <div className={styles["section-subtitle-wrapper"]}>
        <span className={styles["section-subtitle"]}>{subtitle}</span>
        {more && (
          <Button variant="primary-text">
            {moreTitle}
            <div className={styles["section-more-icon"]}>
              <Image
                src={chevronRightPrimaryIcon}
                alt="more button icon"
                width={6}
                height={10}
              />
            </div>
          </Button>
        )}
      </div>
    </div>
  );
};

Section.defaultProps = {
  moreTitle: "See more",
};

export default Section;
