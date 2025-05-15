"use client";
import SubmitButton from "@/components/submitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PostFormState } from "@/lib/types/formState";
import Image from "next/image";
import { useState } from "react";
type Props = {
  state: PostFormState;
  formAction: (payload: FormData) => void;
};
const UpsertPostForm = ({ state, formAction }: Props) => {
  const [imageUrl, setImageUrl] = useState("");
  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 [&>div>label]:text-slate-500 [&>div>label]:mb-2 [&>div>input]:transition [&>div>textarea]:transition"
    >
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          name="title"
          placeholder="Enter the title of your post"
          defaultValue={state?.data?.title}
        />
      </div>
      {!!state?.errors?.title && (
        <p className="text-red-500">{state.errors.title}</p>
      )}
      <div>
        <Label htmlFor="content">Content</Label>
        <Textarea
          rows={6}
          name="content"
          placeholder="Write your post content here"
          defaultValue={state?.data?.content}
        />
      </div>
      {!!state?.errors?.content && (
        <p className="text-red-500">{state.errors.content}</p>
      )}
      <div>
        <Label htmlFor="thumbnail">Thumbnail</Label>
        <Input
          type="file"
          name="thumbnail"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files)
              setImageUrl(URL.createObjectURL(e.target.files[0]));
          }}
        />
        {!!state?.errors?.thumbnail && (
          <p className="text-red-500">{state.errors.thumbnail}</p>
        )}
        {!!imageUrl && (
          <Image src={imageUrl} alt="post thumbnail" width={200} height={150} />
        )}
      </div>

      <div>
        <Label htmlFor="tags">Tags (comma-separated)</Label>
        <Input
          name="tags"
          placeholder="Enter tags"
          defaultValue={state?.data?.tags}
        />
      </div>
      {!!state?.errors?.tags && (
        <p className="text-red-500">{state.errors.tags}</p>
      )}
      <div className="flex items-center">
        <input
          type="checkbox"
          name="published"
          className="mx-2 w-4 h-4"
          defaultValue={state?.data?.isPublished}
        />
        <Label htmlFor="published">Published Now</Label>
      </div>
      {!!state?.errors?.isPublished && (
        <p className="text-red-500">{state.errors.isPublished}</p>
      )}
      <SubmitButton>Save</SubmitButton>
    </form>
  );
};

export default UpsertPostForm;
