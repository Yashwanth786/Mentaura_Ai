import moment from 'moment';

export default class Message {
    text: any;
    isUser: boolean;
    isTyping: boolean;
    timestamp: Date;
    constructor(text: string | null, isUser: boolean, timestamp = new Date(), isTyping = false) {
        this.text = text;
        this.isUser = isUser;
        this.isTyping = isTyping;
        this.timestamp = timestamp;
    }

    formatTimestamp() {
        return moment(this.timestamp).format('hh:mm A');
    }

    static createTypingMessage() {
        return new Message(null, false, new Date(), true);
    }

    static fromJson(json: { text: any; isUser: any; isTyping: any; timestamp: any; }) {
        const { text, isUser, isTyping, timestamp } = json;
        return new Message(
            text,
            isUser,
            new Date(timestamp),
            isTyping
        );
    }

    toJson() {
        return {
            text: this.text,
            isUser: this.isUser,
            isTyping: this.isTyping,
            timestamp: this.timestamp.getTime(),
        };
    }
}
