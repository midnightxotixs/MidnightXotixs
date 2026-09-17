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
      validation: (Rule) => Rule.required(),
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
      type: 'string',
      options: {
        list: [
          {title: 'NICK Division (Red)', value: 'nick'},
          {title: 'PENS Hardware (Blue)', value: 'pens'},
          {title: 'TREATS Infusions (Green)', value: 'treats'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
})
