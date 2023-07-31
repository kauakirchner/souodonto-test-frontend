const BASE_URL = import.meta.env.BACKEND_BASE_URL

export const UserService = {
    async create(payload) {
        try {
            const response = await fetch(`${BASE_URL}/users/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                    "Authorization": "Bearer *"
                },
                body: JSON.stringify(payload)
            })
            return response;
        }
        catch(error) {
            console.log({ error });
        }
    },

    async getUsers() {
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
        }
    }
}