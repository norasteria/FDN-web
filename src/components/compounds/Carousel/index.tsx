import classNames from "classnames";
import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  LegacyRef,
} from "react";

import styles from "_components/compounds/Carousel/Carousel.module.css";

export interface CarouselProps<TData> {
  renderItem: (data: TData) => React.ReactNode;
  data: TData[];
}

const Carousel = <TData,>({
  data,
  renderItem,
}: CarouselProps<TData>): React.ReactElement => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [position, setPosition] = useState(0);
  const carouselItemRef = useRef<LegacyRef<HTMLDivElement>>(null);

  const changePage = useCallback(
    (page: number) => {
      const resultPage = currentPage + page;

      if (resultPage < 0 || resultPage >= data.length) {
        return;
      }

      setCurrentPage(resultPage);
    },
    [currentPage, data.length]
  );

  useEffect(() => {
    if (!carouselItemRef.current) return;

    const itemOffset = carouselItemRef.current?.offsetLeft;
    setPosition(-itemOffset * currentPage);
  }, [currentPage]);

  return (
    <div className={styles["carousel-container"]}>
      <div
        className={styles["carousel-wrapper"]}
        style={{ transform: `translateX(${position}px)` }}
      >
        {data.map((item, index) => (
          <div
            ref={carouselItemRef}
            className={styles["carousel-item"]}
            key={index}
          >
            {renderItem(item)}
          </div>
        ))}
      </div>
      <div className={styles["carousel-pagination-wrapper"]}>
        <div
          className={classNames(
            styles["carousel-pagination-arrow"],
            styles["prev"],
            { [styles["active"]]: currentPage !== 0 }
          )}
          onClick={() => changePage(-1)}
        />
        <div className={styles["carousel-pagination-bullet-wrapper"]}>
          {[...Array(data.length)].map((_, index) => (
            <div
              key={index}
              className={classNames(styles["carousel-pagination-bullet"], {
                [styles["active"]]: index === currentPage,
              })}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>
        <div
          className={classNames(
            styles["carousel-pagination-arrow"],
            styles["next"],
            { [styles["active"]]: currentPage !== data.length - 1 }
          )}
          onClick={() => changePage(1)}
        />
      </div>
    </div>
  );
};

export default Carousel;
