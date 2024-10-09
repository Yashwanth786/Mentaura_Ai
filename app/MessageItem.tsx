import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Message from './Message'; // Import your Message class

interface MessageItemProps {
    message: Message; // Define the message type
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
    if (message.isTyping) {
        return (
            <View style={styles.typingContainer}>
                <Text style={styles.typingText}>Typing...</Text>
            </View>
        );
    }

    return (
        <View
            style={[
                styles.messageContainer,
                message.isUser ? styles.userMessage : styles.aiMessage
            ]}
        >
            <View style={styles.textBubble}>
                <Text
                    style={[
                        styles.messageText,
                        message.isUser ? styles.userTextColor : styles.botTextColor
                    ]}
                >
                    {message.text}
                </Text>
            </View>
            <Text style={styles.timestamp}>{message.formatTimestamp()}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    messageContainer: {
        padding: 8,
        marginBottom: 8,
    },
    textBubble: {
        padding: 10,
        borderRadius: 8,
    },
    userMessage: {
        alignItems: 'flex-end',
    },
    aiMessage: {
        alignItems: 'flex-start',
    },
    userTextColor: {
        color: '#000000',
    },
    botTextColor: {
        color: '#ffffff',
    },
    messageText: {
        fontSize: 16,
        fontFamily: 'Roboto',
    },
    typingContainer: {
        alignItems: 'flex-start',
        padding: 8,
    },
    typingText: {
        backgroundColor: '#003366',
        padding: 10,
        borderRadius: 8,
        color: '#ffffff',
        fontFamily: 'Roboto',
        fontSize: 16,
    },
    timestamp: {
        fontSize: 10,
        marginTop: 4,
        color: '#666666',
    },
});

export default MessageItem;
