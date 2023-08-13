import { User } from "../../utils/types/types";
const BASE_URL = import.meta.env.BACKEND_BASE_URL

export const UserService = {
    async create(payload: User): Promise<User | undefined>{
        try {
            const response = await fetch(`${BASE_URL}/users/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": "Bearer *"
                },
                body: JSON.stringify(payload)
            })
            if (response.ok) {
                const data = await response.json();
                return data;
            }

            console.error("Request failed with status: ", response.status);
            return undefined;
        }
        catch(error) {
            console.log({ error });
            return undefined
        }
    },

    async getUsers(): Promise<User[] | undefined> {
        try {
            const response = await fetch(`${BASE_URL}/users`, {
                method: "GET",
                headers: {
                    "Content-Type": "Application/json",
                    "Access-Control-Allow-Origin": "Bearer *"
                }
            })
    
            const data = await response.json();
            return data;
        }
        catch(error) {
            console.log({ error });
            return undefined;
        }
    }
}