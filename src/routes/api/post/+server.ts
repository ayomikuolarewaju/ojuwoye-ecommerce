import { json } from "@sveltejs/kit";
import {products} from "$lib/components/products.json"

export const GET = async () => {
    const data =  products
    return json(data);
};