import type { LoginPayload, LoginResponse, LoginResult, UserResponse } from "../types/auth";

const url = import.meta.env.VITE_API_URL

export async function login(data: LoginPayload): Promise<LoginResult> {
    try {

        const response = await fetch(`${url}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }, 
            body: JSON.stringify(data)
        })

        const result: LoginResponse = await response.json();

        return {
            data: response.ok ? result : null,
            status: response.status
        }

    } catch (error) {
        console.error(error);
        return {
            data: null,
            status: 500,
        };
    }
}

export async function getAuthenticatedUser(): Promise<{ data: UserResponse | null; status: number }> {
    try {

        const token = localStorage.getItem('token');

        if (!token) {
            return { 
                data: null, 
                status: 401 
            };
        }

        const response = await fetch(`${url}/api/user`, {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
            },
        });

        const data: UserResponse = await response.json();

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