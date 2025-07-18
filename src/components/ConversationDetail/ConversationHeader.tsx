import ChatImage from '@/assets/blank.png'

export default function ConversationHeader() {
    return (
        <div className="flex justify-between items-center border-b border-gray-200 dark:border-slate-800 p-4">
            <div className='flex items-center gap-x-3'>
                <img 
                    src={ChatImage} 
                    alt="Chat image"
                    className='w-14 rounded-full cursor-pointer hover:opacity-75'/>
                <div>
                    <p className='dark:text-gray-400 text-xs'> Creado por </p>
                    <p className='dark:text-white'> Carlos I. </p>
                </div>
            </div>
        </div>
    )
}