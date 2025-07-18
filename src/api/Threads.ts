import type { ThreadsPayload, ThreadsResult } from "../types/threads";

const url = import.meta.env.VITE_API_URL

export async function getThreads(): Promise<ThreadsResult> {
    try {

        const token = localStorage.getItem('token')

        if (!token) {
            return {
                data: null,
                status: 401, // sin token, no autorizado
            };
        }

        const response = await fetch(`${url}/api/threads`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
            },
        });

        const result: ThreadsPayload[] = await response.json();

        return {
            data: response.ok ? result.data.data : null,
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

export async function getThreadById(id: number): Promise<{ data: ThreadsPayload | null; status: number }> {
    try {

        const token = localStorage.getItem('token')

        if (!token) {
            return {
                data: null,
                status: 401,
            };
        }

        const response = await fetch(`${url}/api/threads/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
            },
        });

        const data: ThreadsPayload = await response.json();

        return {
            data: response.ok ? data.data : null,
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