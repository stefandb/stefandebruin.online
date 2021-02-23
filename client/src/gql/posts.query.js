import { gql } from "apollo-boost";

export const postsQuery = gql`
query blogPost($bucketSlug: String!, $readKey: String!, $skip: Int!){
  getObjects(bucket_slug: $bucketSlug, input: {
    limit: 8,
    skip: $skip
    read_key: $readKey,
    type: "posts",
    sort: created_at_dec,
    status: published
  }) {
    objects {
      title
      slug
      content
      metadata
      modified_at
      published_at
    },
    total,
    limit
  }
}
`;