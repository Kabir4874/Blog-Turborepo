import { fetchPostById } from "@/lib/actions/postActions";
import UpdatePostContainer from "./_components/updatePostContainer";
type Props = {
  params: {
    id: string;
  };
};
const UpdatePostPage = async (props: Props) => {
  const params = props.params;
  const post = await fetchPostById(parseInt(params.id));
  console.log(post);
  return (
    <div className="bg-white shadow-md rounded-md p-6 max-w-2xl w-full">
      <h2 className="text-lg text-center font-bold text-slate-700">
        Update Your Post
      </h2>
      <UpdatePostContainer post={post} />
    </div>
  );
};

export default UpdatePostPage;
