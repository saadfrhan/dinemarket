import {
    defineArrayMember as arrayMember,
    defineField as field,
    defineType as type
} from 'sanity';

export default type({
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        field({
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [
                arrayMember({
                    type: 'image'
                })
            ]
        },),
        field({
            name: 'name',
            title: 'Name',
            type: 'string'
        }),
        field({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: "Female", value: "Female" },
                    { title: "Male", value: "Male" },
                    { title: "Kids", value: "Kids" }
                ]
            }
        }),
        field({
            name: "tags",
            title: "Tags",
            type: "string",
            options: {
                list: [
                    { title: "Sweater", value: "Sweater" },
                    { title: "Dress", value: "Dress" },
                    { title: "T Shirts", value: "T Shirts" },
                    { title: "Pants", value: "Pants" },
                    { title: "Jackets", value: "Jackets" }
                ]
            }
        }),
        field({
            name: 'slug',
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 90
            }
        }),
        field({
            name: "price",
            title: "Price",
            type: "number"
        }),
        field({
            name: "details",
            title: "Details",
            type: "array",
            of: [arrayMember({
                type: 'block'
            })]
        }),
        field({
            name: 'care',
            title: 'Care',
            type: 'array',
            of: [arrayMember({
                type: 'block'
            })]
        })
    ]
})