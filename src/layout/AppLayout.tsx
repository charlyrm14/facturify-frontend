import ConversationDetail from "@/components/ConversationDetail"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import { useEffect, useState } from "react"
import ModalNewConversation from "@/components/ModalNewConversation"
import { getThreadById, getThreads } from "../api/Threads"
import type { ThreadDetail, ThreadsPayload } from "../types/threads"


interface AppLayoutProps {
    onLogout: () => void;
}

export default function AppLayout({ onLogout }: AppLayoutProps) {

    const [showModal, setShowModal] = useState(false)

    const [threads, setThreads] = useState<ThreadsPayload[]>([]);
    const [selectedThread, setSelectedThread] = useState<ThreadDetail | null>(null);
    
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

    const handleSelectThread = async (id: number) => {
        const { data } = await getThreadById(id);
        setSelectedThread(data);
    };

    return(
        <>
            <Header
                onLogout={onLogout}/>
            <div className="p-4 md:p-12 mt-10">
                <div className="flex flex-col md:flex-row h-screen gap-y-4 gap-x-6">
                    <Sidebar
                        onOpenModal={() => setShowModal(true)}
                        threads={threads} 
                        onSelectThread={handleSelectThread}/>
                    <ConversationDetail
                        thread={selectedThread}/>                    
                </div>
            </div>
            { showModal && (
                <ModalNewConversation
                    onCloseModal={setShowModal}/>
            )}
        </>
    )
}