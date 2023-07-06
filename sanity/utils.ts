// const neededData = `{
//     name,
//     tags,
//     price,
//     image,
//     slug
//   }`
//   const _category = category === "female" ? "Female" : "Male";
//   const allProducts = `*[_type == "product"]${neededData}`
//   const query = category === "all" ? allProducts : `*[category == "${_category}"]${neededData}`;

import { ProductCardI } from "@/types";
import { client } from "./lib/client";
import { groq } from "next-sanity";

const neededDataForProducts = `{
    name,
    tags,
    price,
    image,
    "slug": slug.current
}`

export async function getProducts(category: "male" | "female" | "all"): Promise<ProductCardI[]> {
    if (category === "all") {
        return client.fetch(
            groq`*[_type == "product"]${neededDataForProducts}`
        )
    } else {
        const _category = {
            "male": "Male",
            "female": "Female"
        }
        return client.fetch(
            groq`*[category == "${_category[category]}"]${neededDataForProducts}`
        )
    }
}

