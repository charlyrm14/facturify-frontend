import Search from "@/components/Search"
import ConversationItem from "@/components/ConversationItem"
import ButtonNewConversation from "@/components/ButtonNewConversation"
import type { ThreadsPayload } from "../types/threads"

interface Props {
    onOpenModal: () => void;
    threads: ThreadsPayload[];
    onSelectThread: (id: number) => void;
    activeFilter: "all" | "private" | "group";
    setActiveFilter: React.Dispatch<React.SetStateAction<"all" | "private" | "group">>;
    
}

export default function Sidebar({ onOpenModal, threads, onSelectThread, activeFilter, setActiveFilter, searchText, setSearchText }: Props) {

    return (
        <aside className="w-full md:w-1/4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-900 rounded-lg shadow">
            <div className="p-4">
                <ButtonNewConversation
                    onOpenModal={onOpenModal}/>
                <Search
                    setActiveFilter={setActiveFilter}
                    activeFilter={activeFilter}
                    searchText={searchText}
                    setSearchText={setSearchText}/>
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