import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bakeryCategory',
  title: 'Bakery Categories',
  type: 'document',
  icon: () => '🥖',
  fields: [
    defineField({
      name: 'title',
      title: 'Category Title',
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
      name: 'priority',
      title: 'Priority (Sort Order)',
      type: 'number',
      description: 'Lower number = appears first',
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
})
