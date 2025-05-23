import { fetchPostById } from "@/lib/actions/postActions";
import { getSession } from "@/lib/session";
import Image from "next/image";
import Comments from "./_components/comments";
import Like from "./_components/like";
import SanitizedContent from "./_components/sanitizedContent";
type Props = {
  params: {
    id: string;
  };
};

const PostPage = async ({ params }: Props) => {
  const postId = (await params).id;
  const post = await fetchPostById(+postId);
  const session = await getSession();
  return (
    <main className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-4xl font-bold mb-4 text-slate-700">{post.title}</h1>
      <p className="text-slate-500 text-sm mb-4">
        By {post.author.name}| {new Date(post.createdAt).toLocaleString()}
      </p>

      <div className="relative w-80 h-60">
        <Image
          src={post.thumbnail ?? "/no-image.png"}
          alt={post.title}
          fill
          className="rounded-md object-cover"
        />
      </div>

      <SanitizedContent content={post.content} />
      <Like user={session?.user} postId={post.id} />
      <Comments postId={post.id} user={session?.user} />
    </main>
  );
};

export default PostPage;
