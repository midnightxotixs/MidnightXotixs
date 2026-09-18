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
      initialValue: 'Artisanal Pastries & Fine Confections',
    }),
    defineField({
      name: 'logo',
      title: 'Brand Logo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'footerBio',
      title: 'Footer Bakery Bio / Description',
      type: 'text',
      description: 'Short description displayed below the brand name in the footer',
      rows: 3,
      initialValue: 'Artisanal bakery and patisserie crafted daily with European heritage techniques and natural slow fermentation.',
    }),
    defineField({
      name: 'phone',
      title: 'Support Phone Number',
      type: 'string',
      description: 'e.g. +1 (800) 555-0199',
      initialValue: '+1 (800) 555-0199',
    }),
    defineField({
      name: 'directChatUrl',
      title: 'Direct Customer Chat Link',
      type: 'string',
      description: 'WhatsApp or Telegram link for direct chat',
      initialValue: 'https://wa.me/18005550199',
    }),
    defineField({
      name: 'directChatLabel',
      title: 'Direct Customer Chat Label',
      type: 'string',
      initialValue: 'Direct Customer Chat',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email Address',
      type: 'string',
      description: 'e.g. contact@midnightxotixs.com',
      initialValue: 'contact@midnightxotixs.com',
    }),
    defineField({
      name: 'openingHours',
      title: 'Bakery Opening Hours',
      type: 'string',
      initialValue: 'Mon - Sun: 7:00 AM - 9:00 PM',
    }),
    defineField({
      name: 'flashSaleTitle',
      title: 'Flash Sale Section Title',
      type: 'string',
      initialValue: 'Flash Sale Products',
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
              initialValue: 'Explore Menu',
            },
          ],
        },
      ],
    }),
  ],
})
