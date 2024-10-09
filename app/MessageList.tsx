// MessageList.js
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import MessageItem from './MessageItem';
import Message from './Message';

const initialMessages: Message[] = [
    // Sample messages for initialization
    new Message('Hello', true),
    new Message('Hi there!', false)
];

const MessageList: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>(initialMessages); // Set the type of state to an array of Message

    return (
        <div style={styles.flatList}>
            {messages.map((message, index) => (
                <MessageItem key={index} message={message} />
            ))}
        </div>
    );
};

const styles = StyleSheet.create({
    flatList: {
        backgroundColor: '#E3E3E3',
        padding: 10,
    },
});

export default MessageList;
