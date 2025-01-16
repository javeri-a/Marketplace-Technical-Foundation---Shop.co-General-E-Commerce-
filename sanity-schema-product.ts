export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Product Name'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'category',
            type: 'string',
            title: 'Category'
        },
        {
            name: 'stock',
            type: 'number',
            title: 'Stock Quantity'
        },
        {
            name: 'isFeatured',
            type: 'boolean',
            title: 'Featured Product'
        },
    ],
};
