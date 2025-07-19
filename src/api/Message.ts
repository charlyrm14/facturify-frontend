import type { ReplyMessagePayload, ReplyMessageResponse } from "../types/messages";

const url = import.meta.env.VITE_API_URL;

export async function replyToMessage(conversationId: number, payload: ReplyMessagePayload): Promise<{ data: ReplyMessageResponse['data'] | null; status: number }> {
    try {
        const token = localStorage.getItem('token');

        if (!token) {
            return { 
                data: null, 
                status: 401 
            };
        }

        const response = await fetch(`${url}/api/threads/${conversationId}/messages`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(payload),
        });

        const result = await response.json();

        return {
            data: response.ok ? result.data : null,
            status: response.status,
        };
    } catch (error) {
        console.error(error);
        return {
            data: null,
            status: 500,
        };
    }
}