import { gql } from "apollo-boost";

export const postsQuery = gql`
{
  getObjects(bucket_slug: "stefandebruin-portfolio", input: {
    read_key: "Q6ghfLG2ggzTfLRUeircNrZ0jAlP87ccRZh0qUu7jIOIAvYcGP",
    type: "posts"
    sort: published_at_dec
    status: published
  }) {
    objects {
      title
      content
      metadata
      modified_at
      published_at
    }
  }
}
`;