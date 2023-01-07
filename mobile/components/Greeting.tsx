import React from "react";
import { useQuery } from "@apollo/client";
import { GREETING } from "../graphql/queries";
import { Text} from 'react-native';


export const Greeting: React.FC<{}> = () => {
  const { data, loading, error } = useQuery(GREETING);

  if (loading) return <Text>Loading...</Text>;

  if (error) return <Text>Error: {error.message}</Text>;

  return <Text>{data.greeting}</Text>;
};
