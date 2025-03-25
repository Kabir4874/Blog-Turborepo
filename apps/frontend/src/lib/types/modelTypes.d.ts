export type Post = {
  id: number;
  title: string;
  slug: string;
  author: User;
  content: string;
  thumbnail: string | null;
  published: boolean;
  authorId: number;
  tags?: Tag[];
  createdAt: Date;
  updatedAt: Date;
};

export type User = {
  name: string;
  id: number;
  email: string;
  bio: string | null;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Tag = {
  id: number;
  name: string;
};

export type Comment = {
  id: number;
  content: string;
  post: Post;
  author: User;
  createdAt: Date;
  updatedAt: Date;
};
