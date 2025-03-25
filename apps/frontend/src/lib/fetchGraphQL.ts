import axios from "axios";
import { BACKEND_URL } from "./constants";

export const fetchGraphQL = async (query: string, variables = {}) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/graphql`,
      {
        query,
        variables,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = response.data;

    if (result.errors) {
      console.error("GraphQL errors: ", result.errors);
      throw new Error("Failed to fetch the data from GraphQL");
    }

    return result.data;
  } catch (error) {
    console.error("Error in GraphQL request:", error);
    throw new Error("Failed to fetch data");
  }
};
