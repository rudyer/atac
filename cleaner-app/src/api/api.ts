import axios from "axios";
import { User, UserRegisterScheme } from "../models/models";

export async function fetchUsers(): Promise<User[]> {
    const response = await fetch('http://localhost:3030/users/');
    const data = await response.json();
    return data;
}

export async function fetchUsersRoute(): Promise<User[]> {
    const response = await fetch('http://localhost:3030/users/route');
    const data = await response.json();
    return data;
}

export async function registerUser(user: UserRegisterScheme): Promise<boolean> {
    try {
        const response = await axios.post('http://localhost:3030/users/addUser', user);
        return true;
    } catch (error) {
        return false;
    }

}
