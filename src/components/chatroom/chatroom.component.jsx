import React from 'react'
import Message from '../message/message.component'
import MessageInput from '../message-input/message-input.component'
import {
    ChatRoomContainer,
} from "./chatroom.styles.js";

const ChatRoom = () => {
    return (
        <ChatRoomContainer>
            <h3> This the chat room container.</h3>
            <Message />
            <MessageInput />
        </ChatRoomContainer>
    )
}

export default ChatRoom