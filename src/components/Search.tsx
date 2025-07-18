export default function Search() {
    return (
        <div>
            <input 
                type="text"
                placeholder="Buscar..."
                className="bg-gray-200 dark:bg-gray-700 dark:text-white border border-gray-200 dark:border-slate-800 px-4 py-3 w-full rounded-4xl"/>
            <div className="mt-4">
                <div className="flex justify-start gap-x-2 overflow-x-auto whitespace-nowrap">
                    <button
                        className="bg-green-200 px-3 py-1 rounded-4xl text-green-600 cursor-pointer hover:opacity-75">
                            Todos
                    </button>
                    <button
                        className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-4xl cursor-pointer hover:opacity-75">
                            Privados
                    </button>
                    <button
                        className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-4xl cursor-pointer hover:opacity-75">
                            Grupos
                    </button>
                </div>
            </div>
        </div>
    )
}