import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'hiddenProduct',
  title: 'Hidden Products (Xotixs)',
  type: 'document',
  icon: () => '⚡',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g. $45.00. Leave empty or enter 0 for pre-orders with unknown future pricing (TBD).',
    }),
    defineField({
      name: 'stockQuantity',
      title: 'Units in Stock',
      type: 'number',
      description: 'Enter 0 if out of stock. Leave empty if you want infinite stock.',
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
      validation: (Rule) => Rule.required(),
    }),
  ],
})
