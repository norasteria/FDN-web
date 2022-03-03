import Image from "next/image";
import type { ImageProps } from "next/image";

export interface ImageSpritesProps extends Omit<ImageProps, "src"> {
  source: StaticImageData;
  positionX?: number;
  positionY?: number;
}

const ImageSprites: React.VFC<ImageSpritesProps> = ({ source, ...props }) => {
  return <Image {...props} src={source} alt={props.alt ?? "image-sprites"} />;
};

export default ImageSprites;
