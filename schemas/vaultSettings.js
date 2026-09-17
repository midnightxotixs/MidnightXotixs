import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'vaultSettings',
  title: '2. VIP Vault Settings',
  type: 'document',
  icon: () => '⚡',
  fields: [
    defineField({
      name: 'vaultTitle',
      title: 'Vault Name',
      type: 'string',
      description: 'e.g. Midnight Xotixs',
      initialValue: 'Midnight Xotixs',
    }),
    defineField({
      name: 'orderChatUrl',
      title: 'WhatsApp / Telegram Order URL',
      type: 'string',
      description: 'e.g. https://wa.me/XXXXXXXXXX or https://t.me/yourbot',
    }),
  ],
})
