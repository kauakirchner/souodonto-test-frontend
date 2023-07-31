const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const ProductService = {
    async create(payload) {
        try {
            const response = await fetch(`${BASE_URL}/products/create`, {
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

    async getProducts() {
        try {
            const response = await fetch(`${BASE_URL}/products`, {
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