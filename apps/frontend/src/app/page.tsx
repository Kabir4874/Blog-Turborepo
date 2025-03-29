import Hero from "@/components/hero";
import Posts from "@/components/posts";
import { fetchPosts } from "@/lib/actions/postActions";
import { DEFAULT_PAGE_SIZE } from "@/lib/constants";
import { getSession } from "@/lib/session";
type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export default async function Home({ searchParams }: Props) {
  const { page } = await searchParams;
  const { posts, totalPosts } = await fetchPosts({
    page: page ? +page : undefined,
  });
  const session = await getSession();

  return (
    <main>
      <Hero />
      <Posts
        posts={posts}
        totalPages={Math.ceil(totalPosts / DEFAULT_PAGE_SIZE)}
        currentPage={page ? +page : 1}
      />
    </main>
  );
}
