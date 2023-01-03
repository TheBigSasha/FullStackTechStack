import styled from "styled-components";

export const MessageBubble = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: min(100%, 500px);
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
  padding: 1rem;
  box-sizing: border-box;
  margin-bottom: 1rem;
  overflow: auto;
  position: relative;
`;

export const MessageTimestamp = styled.div`
  font-size: 0.8rem;
  color: #999;
  margin-top: 0.5rem;
  text-align: right;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
`;
