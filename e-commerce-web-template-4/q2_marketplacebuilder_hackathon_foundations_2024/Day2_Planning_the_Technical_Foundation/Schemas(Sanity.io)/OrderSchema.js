export default {
    name: 'order',
    type: 'document',
    fields: [
      { name: 'orderId', type: 'string', title: 'Order ID' },
      { name: 'customer', type: 'reference', to: [{ type: 'customer' }], title: 'Customer' },
      { name: 'products', type: 'array', of: [{ type: 'reference', to: [{ type: 'product' }] }], title: 'Products' },
      { name: 'totalPrice', type: 'number', title: 'Total Price' },
      { name: 'status', type: 'string', title: 'Order Status' },
      { name: 'timestamp', type: 'datetime', title: 'Order Time' }
    ]
  };