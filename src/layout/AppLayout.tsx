import ConversationDetail from "@/components/ConversationDetail"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import { useState } from "react"
import ModalNewConversation from "@/components/ModalNewConversation"

export default function AppLayout() {

    const [showModal, setShowModal] = useState(false)

    return(
        <>
            <Header/>
            <div className="p-4 md:p-12 mt-10">
                <div className="flex flex-col md:flex-row h-screen gap-y-4 gap-x-6">
                    <Sidebar
                        onOpenModal={() => setShowModal(true)}/>
                    <ConversationDetail/>                    
                </div>
            </div>
            { showModal && (
                <ModalNewConversation
                    onCloseModal={setShowModal}/>
            )}
        </>
    )
}