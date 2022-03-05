export type EditorChoise = {
  editor: string;
  role: string;
  product: {
    name: string;
    rating: number;
    description: string;
    image: string;
  };
};

export type LatestArticles = {
  title: string;
  author: string;
  image: string;
  published_at: string;
};

export type LatestReview = {
  user: string;
  profile: string[];
  product: {
    image: string;
    name: string;
    desc: string;
  };
  star: number;
  comment: string;
};

export interface DashboardDataResponseDTO {
  "editor's choice": EditorChoise[];
  "latest articles": LatestArticles[];
  "latest review": LatestReview[];
}
