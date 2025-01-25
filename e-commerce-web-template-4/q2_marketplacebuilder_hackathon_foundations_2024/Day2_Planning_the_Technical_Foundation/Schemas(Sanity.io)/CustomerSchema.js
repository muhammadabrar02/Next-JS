export default {
    name: 'customer',
    type: 'document',
    fields: [
      { name: 'customerId', type: 'string', title: 'Customer ID' },
      { name: 'name', type: 'string', title: 'Full Name' },
      { name: 'email', type: 'string', title: 'Email Address' },
      { name: 'phone', type: 'string', title: 'Phone Number' },
      { name: 'address', type: 'string', title: 'Address' }
    ]
  };