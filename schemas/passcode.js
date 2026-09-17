import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'passcode',
  title: 'Access Passcodes',
  type: 'document',
  fields: [
    defineField({
      name: 'code',
      title: 'Passcode / Invitation Code',
      type: 'string',
      validation: (Rule) => Rule.required().error('Passcode is required'),
    }),
    defineField({
      name: 'isUsed',
      title: 'Is Used',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
