export type FormState = {
  message: string;
  errors: {
    email?: string[];
    password?: string[];
  };
};

export type Book = {
  _id: string;
  title: string;
  author: string;
  imageUrl: string;
  totalPages: number;
  recommend: boolean;
};

export type SearchDataOptions = {
  page: number;
  limit?: number;
  author?: string;
  title?: string;
};
