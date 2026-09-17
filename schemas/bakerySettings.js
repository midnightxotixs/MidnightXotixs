import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bakerySettings',
  title: '1. Front Bakery Settings',
  type: 'document',
  icon: () => '🥐',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      description: 'e.g. Midnight Treats',
      initialValue: 'Midnight Treats',
    }),
    defineField({
      name: 'logo',
      title: 'Bakery Logo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main heading on the landing page (supports HTML)',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 3,
      description: 'Sub-heading beneath the main title',
    }),
    defineField({
      name: 'heroSliderImages',
      title: 'Hero Carousel Food Images',
      type: 'array',
      description: 'Upload multiple appetizing images to slide in the hero section',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    }),
  ],
})
