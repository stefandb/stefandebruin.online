import { gql } from "apollo-boost";

export const postsQuery = gql`
query blogPost($bucketSlug: String!, $readKey: String!){
  getObjects(bucket_slug: $bucketSlug, input: {
    limit: 20,
    read_key: $readKey,
    type: "posts",
    sort: published_at_dec,
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