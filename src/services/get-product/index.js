const BASE_URL = "http://localhost:3000";

export const getProducts = async () => {
    try {
        const response = await fetch(`${BASE_URL}/products/get-products`, {
            method: "GET",
            headers: {
                "Content-type": "Application/json",
                "Authorization": "Bearer *"
            }
        })

        const data = await response.json();
        return data;
    }
    catch(error) {
        console.log({ error });
    }
}