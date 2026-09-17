import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bakerySettings',
  title: '1. Front Bakery Settings',
  type: 'document',
  icon: () => '🥐',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Store / Brand Name',
      type: 'string',
      initialValue: 'Midnight Xotixs',
    }),
    defineField({
      name: 'siteSubtitle',
      title: 'Brand Subtitle / Tagline',
      type: 'string',
      initialValue: 'Pastelería & Repostería fina',
    }),
    defineField({
      name: 'hotlinePhone',
      title: 'Hotline Phone',
      type: 'string',
      description: 'e.g. +52 (55) 8432-9011',
      initialValue: '+52 (55) 8432-9011',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      description: 'e.g. contacto@midnightxotixs.com',
      initialValue: 'contacto@midnightxotixs.com',
    }),
    defineField({
      name: 'headOfficeAddress',
      title: 'Head Office Address',
      type: 'string',
      description: 'e.g. Av. Insurgentes Sur 1458, Col. Del Valle, CDMX, México',
      initialValue: 'Av. Insurgentes Sur, CDMX, México',
    }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'string',
      initialValue: 'Lun - Dom: 7:00 AM - 9:00 PM',
    }),
    defineField({
      name: 'flashSaleTitle',
      title: 'Flash Sale Section Title',
      type: 'string',
      initialValue: 'FLASH SALE PRODUCT',
    }),
    defineField({
      name: 'heroSlider',
      title: 'Hero Banner Slider',
      type: 'array',
      description: 'Hero promotional slides with imagery and curated headlines',
      of: [
        {
          type: 'object',
          name: 'heroSlide',
          title: 'Slide',
          fields: [
            {
              name: 'title',
              title: 'Slide Heading / Title',
              type: 'string',
            },
            {
              name: 'subtitle',
              title: 'Slide Subtitle',
              type: 'text',
              rows: 2,
            },
            {
              name: 'image',
              title: 'Slide Background Image',
              type: 'image',
              options: {hotspot: true},
            },
            {
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              initialValue: 'Explorar Catálogo',
            },
          ],
        },
      ],
    }),
  ],
})
