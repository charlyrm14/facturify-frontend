import Search from "@/components/Search"
import ConversationItem from "@/components/ConversationItem"
import ButtonNewConversation from "@/components/ButtonNewConversation"
import { useEffect, useState } from "react"
import { getThreads } from "../api/Threads"

export default function Sidebar({ onOpenModal }: { onOpenModal: () => void }) {

    const [threads, setThreads] = useState([])

    useEffect(() => {
        const fetchThreads = async () => {
            const { data, status } = await getThreads();

            if (status === 200) {
                setThreads(data);
            }
            
            if(status === 401 || status === 404) {
                setThreads([]);
            }
        };

        fetchThreads();
    }, [])

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
                        <ConversationItem key={thread.id} thread={thread} />
                    ))
                )}
            </div>  
        </aside>
    )
}