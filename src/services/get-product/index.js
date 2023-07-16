const BASE_URL = "https://souodonto-test-backend.vercel.app";

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