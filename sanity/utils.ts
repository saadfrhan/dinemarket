import { MoreProdInfoI, ProductCardI } from "@/types";
import { client } from "./lib/client";
import { groq } from "next-sanity";

const neededDataForProducts = `{
    _id,
    name,
    tags,
    price,
    image,
    "slug": slug.current
}`

export async function getProducts(category: "male" | "female" | "kids" | "all"): Promise<ProductCardI[]> {
    if (category === "all") {
        return client.fetch(
            groq`*[_type == "product"]${neededDataForProducts}`
        )
    } else {
        const _category = {
            "male": "Male",
            "female": "Female",
            "kids": "Kids"
        }
        return client.fetch(
            groq`*[category == "${_category[category]}"]${neededDataForProducts}`
        )
    }
}

export async function getProduct(slug: string): Promise<ProductCardI & MoreProdInfoI> {
    const query = groq`*[_type == "product" && slug.current == '${slug}'][0]`;
    const product = await client.fetch(query);
    return product;
} 