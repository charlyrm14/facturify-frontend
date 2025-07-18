export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginResponse {
    access_token: string;
    token_type: string;
}

export interface LoginResult {
    data: LoginResponse | null;
    status: number;
}

export interface UserResponse {
    id: number,
    name: string,
    last_name: string,
    email: string,
    email_verified_at: string | null,
    created_at: string,
    updated_at: string
}