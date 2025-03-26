import { fetchPostById } from "@/lib/actions/postActions";

type Props = {
  params: {
    id: string;
  };
};

const PostPage = async ({ params }: Props) => {
  const postId = (await params).id;
  const post = await fetchPostById(+postId);
  return (
    <main className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-4xl font-bold mb-4 text-slate-700">{post.id}</h1>
      <p className="text-slate-500 text-sm mb-4">
        By {post.author.name}| {new Date(post.createdAt).toLocaleString()}
      </p>
    </main>
  );
};

export default PostPage;
