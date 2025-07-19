import { useEffect, useState } from "react";
import type { Message, ThreadDetail } from "../../types/threads";
import ConversationHeader from "./ConversationHeader";
import MessageItem from "./MessageItem";
import ReplyMessage from "./ReplyMessage";
import { replyToMessage } from "../../api/Message";
import type { UserResponse } from "../../types/auth";

interface Props {
    thread: ThreadDetail | null;
    user: UserResponse;
    onAddMessage: (message: Message) => void;
}

export default function ConversationDetail({ thread, user, onAddMessage }: Props) {

    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        setMessages(thread?.messages || []);
    }, [thread]);

    const handleReply = async (content: string) => {

        const replyData = {
            content,
            sender_id: user.id,
            parent_message_id: null,
        };

        const { data, status } = await replyToMessage(thread.id, replyData);
        
        if (status === 201 && data) {
            setMessages((prev) => [...prev, data as Message]);
            onAddMessage(data as Message);
        }
    };

    return (
        <main className="w-full md:w-4/5 h-full overflow-y-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-900  rounded-lg shadow">
            {!thread ? (
                <div className="flex items-center justify-center h-full p-8">
                    <p className="text-pink-500 text-center text-2xl font-light">
                        Selecciona una conversación para ver los mensajes.
                    </p>
                </div>
            ) : (
                <>
                    <ConversationHeader/>
                    { messages.length === 0 ? (
                            <h2 className="text-pink-500 p-4 m-8 text-center text-2xl font-light"> No hay mensajes, se el primero en escribir un mensaje </h2>
                        ) : (
                        messages.map((message) => (
                            <MessageItem
                                key={message.id} 
                                message={message}/>
                        ))
                    )}
                    <ReplyMessage
                        onReply={handleReply}/>
                </>
            )}
        </main>
    );
}