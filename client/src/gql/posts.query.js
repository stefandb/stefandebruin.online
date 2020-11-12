import { gql } from "apollo-boost";

export const postsQuery = gql`
{
    getObjects(bucket_slug: "stefandebruin-portfolio", input: {
      limit: 20,
      read_key: "Q6ghfLG2ggzTfLRUeircNrZ0jAlP87ccRZh0qUu7jIOIAvYcGP",
      type: "posts"
    }) {
      objects {
        title
        content
        published_at
        metadata
      }
    }
  }
`;