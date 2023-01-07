import { useMutation } from "@apollo/client";
import { ECHO } from "../graphql/mutations";
import React from 'react';
import {Button, Text, TextInput} from 'react-native';

export const Echo: React.FC<{}> = () => {
  const [echo, { data, loading, error }] = useMutation(ECHO);
  const [message, setMessage] = React.useState("");

  if (loading) return <Text>Loading...</Text>;

  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <>
      {data && <code>From Server: {data.echo}</code>}
      <TextInput
        value={message}
        onChangeText={(text) => {setMessage(text)}}
      />
      <Button onPress={() => echo({ variables: { input: message } })}  title={"Echo"}/>
    </>
  );
};
