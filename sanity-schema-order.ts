export default {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
        {
            name: 'orderId',
            type: 'string',
            title: 'Order ID'
        },
        {
            name: 'customer',
            type: 'string',
            title: 'Customer Name'
        },
        {
            name: 'products',
            type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }],
            title: 'Products'
        },
        {
            name: 'total',
            type: 'number',
            title: 'Total Amount'
        },
        {
            name: 'status',
            type: 'string',
            title: 'Order Status', options: { list: ['Pending', 'Shipped', 'Out for Delivery', 'Delivered'] }
        },
        {
            name: 'shippingDetails',
            type: 'text',
            title: 'Shipping Details'
        },
    ],
};
