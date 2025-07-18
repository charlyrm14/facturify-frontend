import Search from "@/components/Search"
import ConversationItem from "@/components/ConversationItem"
import ButtonNewConversation from "@/components/ButtonNewConversation"

export default function Sidebar({ onOpenModal }: { onOpenModal: () => void }) {
    return (
        <aside className="w-full md:w-1/4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-900 rounded-lg shadow">
            <div className="p-4">
                <ButtonNewConversation
                    onOpenModal={onOpenModal}/>
                <Search/>
            </div>
            <div className="mt-4 p-2">
                <ConversationItem
                    name="Equipo desarrollo"
                    created_at="2025-07-17"/>
                <ConversationItem
                    name="Equipo diseño"
                    created_at="2025-07-15"/>
            </div>  
        </aside>
    )
}