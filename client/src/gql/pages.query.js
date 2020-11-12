import { gql } from "apollo-boost";

export const pagesQuery = gql`
query pages {
  getObjects(
    bucket_slug: "stefandebruin-portfolio",
    input: { 
      type:"pages",
      read_key: "Q6ghfLG2ggzTfLRUeircNrZ0jAlP87ccRZh0qUu7jIOIAvYcGP"
    }
  ) {
     objects {
       title
      content
      created_at
    }
  }
}
`;