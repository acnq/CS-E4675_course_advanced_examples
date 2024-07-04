import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query RepoFullName {
  repositories {
    edges {
      node {
        fullName
      }
    }
  }
}
`;