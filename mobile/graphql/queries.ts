import { gql } from "@apollo/client";

export const GREETING = gql`
  query greeting {
    greeting
  }
`;

export const GREETING_OAUTH = gql`
  query oAuthGreeting {
    oAuthGreeting
  }
`;

export const LIST_MESSAGES = gql`
  query listMessages {
    listMessages {
      id
      text
      timestamp
    }
  }
`;
