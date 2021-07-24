export interface IUserRequest {
    username: string;
    email: string;
    password: string;
    admin?: boolean;
}