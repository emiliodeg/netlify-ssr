export interface ISignin {
    email: string;
    password: string;
}

export interface ISignup {
    name: string;
    email: string;
    password: string;
}


export interface User {
    id: string;
    email: string;
    name?: string;
    role?: string;
}