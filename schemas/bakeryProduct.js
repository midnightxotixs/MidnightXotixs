import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'bakeryProduct',
  title: 'Bakery Products',
  type: 'document',
  icon: () => '🥐',
  fields: [
    defineField({
      name: 'title',
      title: 'Product Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'bakeryCategory'}],
      description: 'Select bakery category (e.g. Pan Dulce, Pasteles, Galletas)',
    }),
    defineField({
      name: 'subCategoryText',
      title: 'Sub-Category / Portion Text',
      type: 'string',
      description: 'e.g. "Porción individual", "Caja 6 pzas", "Para 8-10 personas"',
    }),
    defineField({
      name: 'price',
      title: 'Regular Price ($)',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'e.g. "$4.50" or "4.50"',
    }),
    defineField({
      name: 'salePrice',
      title: 'Sale Price ($) [Optional]',
      type: 'string',
      description: 'Discounted price if on sale (e.g. "$3.50")',
    }),
    defineField({
      name: 'isFlashSale',
      title: 'Flash Sale (Oferta del Día)',
      type: 'boolean',
      initialValue: false,
      description: 'Display in the Flash Sale / Ofertas del Día banner showcase',
    }),
    defineField({
      name: 'isNew',
      title: 'Is New (NUEVO Badge)',
      type: 'boolean',
      initialValue: false,
      description: 'Display "NUEVO" ribbon badge on product card',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'price',
      media: 'image',
    },
  },
})
