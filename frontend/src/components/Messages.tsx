import { useMutation, useQuery } from "@apollo/client";
import { LIST_MESSAGES } from "../graphql/queries";
import React, { useEffect } from "react";
import { SEND_MESSAGE } from "../graphql/mutations";
import { Message } from "../graphql/types";
import { MessageBubble, MessageTimestamp } from "./MessageBubble";

export const Messages: React.FC<{}> = () => {
  const {
    data: messageListData,
    loading: messageListLoading,
    error: messageListError,
    refetch,
    startPolling,
    stopPolling,
  } = useQuery(LIST_MESSAGES);

  const [
    sendMessage,
    {
      data: sendMessageData,
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

  if (messageListLoading) return <p>Loading...</p>;

  if (messageListError) return <p>Error: {messageListError.message}</p>;

  return (
    <>
      <h2>Messages (persistent)</h2>
      {messageListData &&
        messageListData.listMessages.map((message: Message) => (
          <MessageBubble key={message.id}>
            {message.text}{" "}
            <MessageTimestamp>{message.timestamp}</MessageTimestamp>
          </MessageBubble>
        ))}
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {sendMessageLoading && <p>Sending...</p>}
      {sendMessageError && <p>Error: {sendMessageError.message}</p>}
      <button
        onClick={() => sendMessage({ variables: { input: message } })}
        disabled={sendMessageLoading}
      >
        Send
      </button>
    </>
  );
};
