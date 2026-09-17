import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Product Category',
  type: 'document',
  icon: () => '🏷️',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'accentColor',
      title: 'Accent Color',
      type: 'string',
      options: {
        list: [
          {title: 'Neon Red',     value: 'red'},
          {title: 'Cyber Blue',   value: 'blue'},
          {title: 'Toxic Green',  value: 'green'},
          {title: 'Purple Velvet',value: 'purple'},
          {title: 'Amber Gold',   value: 'amber'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'priority',
      title: 'Priority (Sort Order)',
      type: 'number',
      description: 'Lower number = appears first',
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
})
