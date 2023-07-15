const BASE_URL = "http://localhost:3000";

export const createProduct = async (payload) => {
    try {
        const response = await fetch(`${BASE_URL}/products/create`, {
            method: "POST",
            headers: {
                "Content-type": "Application/json",
                "Access-Control-Allow-Origin": "Bearer *"
            },
            body: JSON.stringify(payload)
        })
        return response;
    }
    catch(error) {
        console.log({ error });
    }
}
