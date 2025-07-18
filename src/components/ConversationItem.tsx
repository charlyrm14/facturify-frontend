import ChatImage from '@/assets/blank.png'

type ConversationItemProps = {
    name: string
    created_at: string
}

export default function ConversationItem({ name, created_at }: ConversationItemProps){
    return (
        <div className='mb-2'>
            <div className='flex items-center gap-x-3 cursor-pointer hover:bg-gray-200 hover:dark:bg-gray-600 p-2 rounded-lg'>
                <img 
                    src={ChatImage} 
                    alt="Chat image"
                    className='w-14 rounded-full'/>
                <div>
                    <p className='dark:text-white font-light'> { name } </p>
                    <p className='text-pink-500 text-xs'> { created_at } </p>
                </div>
            </div>
            <div className='border-b border-gray-200 dark:border-slate-800 mt-2'></div>
        </div>
    )
}