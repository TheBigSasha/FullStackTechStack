import styled from "styled-components/native";
import React from "react";
import {View, Text} from "react-native";

 const MessageBox = styled(View)`
    position: relative;
    width: 90%;
    height: 50px;
    padding: 10px;
    border-radius: 10px;
    margin: 15px;
    elevation: 1;
    border: 1px solid;
`;

 const MessageTimestamp = styled(Text)`
  font-weight: light;
  position: absolute;
  right: 0;
  bottom: 0;
`;

 interface MessageBubbleProps {
    message: string;
    timestamp: string;
 }

    export const MessageBubble: React.FC<MessageBubbleProps> = ({
    message,
    timestamp,
    }
) => {
    return (
        <MessageBox>
            <Text>{message}</Text>
            <MessageTimestamp>{timestamp}</MessageTimestamp>
        </MessageBox>
    );
    }
