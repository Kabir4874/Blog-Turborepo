import UpsertPostForm from "./_components/upsertPostForm";

const CreatePostPage = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-6 max-w-2xl">
      <h2 className="text-lg text-center font-bold text-slate-700">
        Create a New Post
      </h2>
      <UpsertPostForm />
    </div>
  );
};

export default CreatePostPage;
