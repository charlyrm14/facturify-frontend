import Search from "@/components/Search"
import ConversationItem from "@/components/ConversationItem"
import ButtonNewConversation from "@/components/ButtonNewConversation"
import type { ThreadsPayload } from "../types/threads"

interface Props {
    onOpenModal: () => void;
    threads: ThreadsPayload[];
    onSelectThread: (id: number) => void;
}

export default function Sidebar({ onOpenModal, threads, onSelectThread }): React.FC<Props> {

    return (
        <aside className="w-full md:w-1/4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-900 rounded-lg shadow">
            <div className="p-4">
                <ButtonNewConversation
                    onOpenModal={onOpenModal}/>
                <Search/>
            </div>
            <div className="mt-4 p-2">
                { threads.length === 0 ? (
                        <p className="text-pink-500"> No hay conversaciones </p>
                    ) : (
                    threads.map((thread) => (
                        <ConversationItem 
                            key={thread.id} 
                            thread={thread}
                            onClick={onSelectThread}/>
                    ))
                )}
            </div>  
        </aside>
    )
}