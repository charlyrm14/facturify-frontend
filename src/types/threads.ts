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
