import React, { useMemo } from "react";
import Image from "next/image";
import styles from "_components/compounds/SearchBar/SearchBar.module.css";

export interface SarchBarProps extends React.HTMLProps<HTMLInputElement> {
  append?: string | React.ReactNode;
  className?: string;
}

const SearchBar: React.VFC<SarchBarProps> = ({ append, ...props }) => {
  const appendItem = useMemo(() => {
    if (!append) return null;

    return React.isValidElement(append) ? (
      append
    ) : (
      <Image src={append as string} alt="input icon" width={23} height={21} />
    );
  }, [append]);

  return (
    <div className={styles["search-wrapper"]}>
      {appendItem}
      <input {...props} className={styles["search-input"]} />
    </div>
  );
};

export default SearchBar;
