import { useMutation, useQuery } from "@apollo/client";
import { LIST_MESSAGES } from "../graphql/queries";
import React, { useEffect } from "react";
import { SEND_MESSAGE } from "../graphql/mutations";
import { Message } from "../graphql/types";
import { MessageBubble } from "./MessageBubble";
import {Button, Text, TextInput} from "react-native";
import styled from "styled-components/native";

const StylishInput = styled(TextInput)`
    border: 1px solid;
`

export const Messages: React.FC<{}> = () => {
  const {
    data: messageListData,
    loading: messageListLoading,
    error: messageListError,
    startPolling,
    stopPolling,
  } = useQuery(LIST_MESSAGES);

  const [
    sendMessage,
    {
      loading: sendMessageLoading,
      error: sendMessageError,
    },
  ] = useMutation(SEND_MESSAGE);

  const [message, setMessage] = React.useState("");

  useEffect(() => {
    startPolling(1000);
    return () => {
      stopPolling();
    };
  }, [startPolling, stopPolling, sendMessageLoading]);

  if (messageListLoading) return <Text>Loading...</Text>;

  if (messageListError) return <Text style={{color: "#ff0000"}}>Error! {messageListError.message}</Text>;

  return (
    <>
      <Text >Messages (persistent)</Text>
      {messageListData &&
        messageListData.listMessages.map((message: Message) => (
          <MessageBubble key={message.id} message={message.text} timestamp={message.timestamp}/>
        ))}
      <StylishInput
        value={message}
        onChangeText={(e) => setMessage(e)}
      />
      {sendMessageLoading && <Text>Sending...</Text>}
      {sendMessageError && <Text>Error: {sendMessageError.message}</Text>}
      <Button
        onPress={() => sendMessage({ variables: { input: message } })}
        disabled={sendMessageLoading}
        title={"Send"}
      />
    </>
  );
};
