import { Product } from "../../utils/types/types";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export const ProductService = {
    async create(payload: Product): Promise<Product | undefined> {
        try {
            const response = await fetch(`${BASE_URL}/products/create`, {
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
            console.error({ error });
            return undefined;
        }
    },

    async getProducts(): Promise<Product[] | undefined> {
        try {
            const response = await fetch(`${BASE_URL}/products`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
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