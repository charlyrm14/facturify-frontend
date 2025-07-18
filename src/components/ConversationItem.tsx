import ChatImage from '@/assets/blank.png'
import type { ThreadsPayload } from '../types/threads';

interface Props {
    thread: ThreadsPayload;
    onClick: (id: number) => void;
}

export default function ConversationItem({ thread, onClick }):React.FC<Props>{

    const { id, name, conversation_type_id } = thread;
    
    return (
        <div
            onClick={() => onClick(id)}
            className='mb-2'>
            <div className='flex items-center gap-x-3 cursor-pointer hover:bg-gray-200 hover:dark:bg-gray-600 p-2 rounded-lg'>
                <img 
                    src={ChatImage} 
                    alt={name}
                    className='w-14 rounded-full'/>
                <div>
                    <p className='dark:text-white font-light'> { name } </p>
                    <p className='text-pink-500 text-xs'>
                        { conversation_type_id === 1 ? 'Privado' : 'Grupo'}
                    </p>
                </div>
            </div>
            <div className='border-b border-gray-200 dark:border-slate-800 mt-2'></div>
        </div>
    )
}