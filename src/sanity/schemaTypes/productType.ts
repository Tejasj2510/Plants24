export default {
  name: 'product',
  type: 'document',
  title: 'Products',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'name' } },
    { name: 'price', type: 'number' },
    {
      name: 'category',
      type: 'string',
      options: {
        list: [
          { title: 'Indoor', value: 'indoor' },
          { title: 'Outdoor', value: 'outdoor' }
        ]
      }
    },
    { name: 'description', type: 'text' },
    {
      name: 'images',
      type: 'array',
      of: [{ type: 'image' }]
    }
  ]
};