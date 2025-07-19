export interface Message {
    id: number;
    subject?: string;
    content: string;
    conversation_id: number;
    sender_id: number;
    parent_message_id: number | null;
    read_at?: string | null;
    created_at?: string;
    updated_at?: string;
}

export interface ConversationType {
    id: number;
    name: string;
    description: string;
}

export interface User {
    id: number;
    name: string;
    last_name: string;
}

export interface ThreadsPayload {
    id: number;
    conversation_type_id: number;
    name: string;
    user_id: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    conversation_type: ConversationType;
    user: User;
}

export interface ThreadsResult {
    data: ThreadsPayload[] | null;
    status: number;
}

export interface ThreadDetail {
    id: number;
    conversation_type_id: number;
    name: string;
    user_id: number;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
    conversation_type: ConversationType;
    user: User;
    messages: Message[];
}

export interface NewThreadResponse {
    conversation_type_id: number;
    name: string;
    user_id: number;
    updated_at: string;
    created_at: string;
    id: number;
    message: {
        conversation_id: number;
        sender_id: number;
        subject: string;
        content: string;
        updated_at: string;
        created_at: string;
        id: number;
    };
}