export interface ReplyMessagePayload {
    content: string;
    sender_id: number;
    parent_message_id: number | null;
}

export interface ConversationInfo {
    id: number;
    conversation_type_id: number;
    name: string;
    user_id: number;
    created_at: string;
}

export interface MessageUser {
    id: number;
    name: string;
    last_name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}

export interface RepliedMessage {
    id: number;
    content: string;
    conversation_id: number;
    sender_id: number;
    parent_message_id: number | null;
    created_at: string;
    updated_at: string;
    conversation: ConversationInfo;
    user: MessageUser;
    parent_message: null | RepliedMessage;
}

export interface ReplyMessageResponse {
    data: RepliedMessage;
}
