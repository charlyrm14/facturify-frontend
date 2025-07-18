import type { ThreadDetail } from "../../types/threads";
import ConversationHeader from "./ConversationHeader";
import MessageItem from "./MessageItem";
import ReplyMessage from "./ReplyMessage";

interface Props {
    thread: ThreadDetail | null;
}

export default function ConversationDetail({ thread }: Props) {
    if (!thread) {
        return (
            <main className="w-full md:w-4/5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-900 rounded-lg shadow flex items-center justify-center h-full p-8">
                <p className="text-pink-500 text-center text-2xl font-light">
                    Selecciona una conversación para ver los mensajes.
                </p>
            </main>
        );
    }

    return (
        <main className="w-full md:w-4/5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-900  rounded-lg shadow">
            <ConversationHeader/>
            { thread.messages.length === 0 ? (
                    <h2 className="text-pink-500 p-4 m-8 text-center text-2xl font-light"> No hay mensajes, se el primero en escribir un mensaje </h2>
                ) : (
                thread.messages.map((message) => (
                    <MessageItem
                        key={message.id} 
                        message={message}/>
                ))
            )}
            <ReplyMessage/>
        </main>
    );
}