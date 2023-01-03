import { gql } from "@apollo/client";

export const ECHO = gql`
  mutation echo($input: String!) {
    echo(message: $input)
  }
`;

export const ECHOOAUTH = gql`
  mutation oAuthEcho($input: String!) {
    oAuthEcho(message: $input)
  }
`;

export const SEND_MESSAGE = gql`
  mutation sendMessage($input: String!) {
    sendMessage(message: $input)
  }
`;
