import type { ProductCardProps } from "_components/compounds/ProductCard";

// POPULAR GROUPS
import group1Img from "_images/popularGroup/group-1.png";
import group2Img from "_images/popularGroup/group-2.png";
import group3Img from "_images/popularGroup/group-3.png";
import group4Img from "_images/popularGroup/group-4.png";

// PDODUCS
import skinceuticalsSerum from "_images/products/skinceuticals-serum.png";
import juiceBeautySerum from "_images/products/juiceBeauty-serum.png";
import juiceBeautyBlush from "_images/products/juiceBeauty-blush.png";
import valByValerieBlush from "_images/products/valByValerie-blush.png";

export const POPULAR_GROUPS_DATA: StaticImageData[] = [
  group1Img,
  group2Img,
  group3Img,
  group4Img,
];

const sampleProductData: ProductCardProps[] = [
  {
    name: "SKINCEUTICALS",
    description: "C E Ferulic",
    rating: 4.9,
    image: skinceuticalsSerum,
  },
  {
    name: "JUICE BEAUTY",
    description: "Phyto-Pigments",
    rating: 4.9,
    image: juiceBeautySerum,
  },
  {
    name: "JUICE BEAUTY",
    description: "Pure Pressed Blush",
    rating: 4.9,
    image: juiceBeautyBlush,
  },
  {
    name: "VAL BY VALERIE THOMAS",
    description: "Pure Pressed Blush",
    rating: 4.9,
    image: valByValerieBlush,
  },
];

export const PRODUCT_DATA = [...sampleProductData, ...sampleProductData];
