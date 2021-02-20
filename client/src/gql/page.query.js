import { gql } from "apollo-boost";

export const pageQuery = gql`
query page($bucketSlug: String!, $readKey: String!, $slug: String!){
    getObject(bucket_slug: $bucketSlug, input: {
    slug: $slug,
    read_key: $readKey,
    status: published
  }) {
    title
    content
    metadata
  }
}
`;

/**
 * {
  getObject(bucket_slug: "stefandebruin-lokaal", input: {
    slug: "about",
    read_key: "CfEse940Md1Gc6Kv10IsTxvuP6lTL5qHlMNPuPVJp9z6RvgvH3"
  }) {
    title
    content
    metadata
  }
}
 */