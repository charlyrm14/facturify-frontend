interface Props {
    setActiveFilter: React.Dispatch<React.SetStateAction<"all" | "private" | "group">>;
    activeFilter: "all" | "private" | "group";
}

export default function Search({ setActiveFilter, activeFilter, searchText, setSearchText }: Props) {
    return (
        <div>
            <input 
                type="text"
                placeholder="Buscar..."
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
                className="bg-gray-200 dark:bg-gray-700 dark:text-white border border-gray-200 dark:border-slate-800 px-4 py-3 w-full rounded-4xl"/>
            <div className="mt-4">
                <div className="flex justify-start gap-x-2 overflow-x-auto whitespace-nowrap">
                    <button
                        onClick={() => setActiveFilter("all")}
                        className={`px-2 py-1 rounded ${activeFilter === "all" ? "bg-green-200 text-green-600 px-3 py-1 rounded-4xl cursor-pointer hover:opacity-75" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-4xl cursor-pointer hover:opacity-75"}`}>
                            Todos
                    </button>
                    <button
                        onClick={() => setActiveFilter("private")}
                        className={`px-2 py-1 rounded ${activeFilter === "private" ? "bg-pink-500 text-white px-3 py-1 rounded-4xl cursor-pointer hover:opacity-75" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-4xl cursor-pointer hover:opacity-75"}`}>
                            Privados
                    </button>
                    <button
                        onClick={() => setActiveFilter("group")}
                        className={`px-2 py-1 rounded ${activeFilter === "group" ? "bg-purple-500 text-white px-3 py-1 rounded-4xl cursor-pointer hover:opacity-75" : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-4xl cursor-pointer hover:opacity-75"}`}>
                            Grupos
                    </button>
                </div>
            </div>
        </div>
    )
}