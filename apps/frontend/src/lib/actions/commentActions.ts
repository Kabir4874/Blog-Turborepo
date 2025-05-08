"use server";

import { print } from "graphql";
import { fetchGraphQL } from "../fetchGraphQL";
import { GET_POST_COMMENTS } from "../gqlQueries";
import { Comment } from "../types/modelTypes";
export async function getPostComments({
  postId,
  skip,
  take,
}: {
  postId: number;
  skip: number;
  take: number;
}) {
  const data = fetchGraphQL(print(GET_POST_COMMENTS), {
    postId,
    take,
    skip,
  });
  return {
    comments: data.getPostComments as Comment[],
    count: data.postCommentCount as number,
  };
}
