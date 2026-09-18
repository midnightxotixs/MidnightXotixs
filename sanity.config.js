import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Midnight Xotixs',
  projectId: '9qdzkhb5',
  dataset: 'production',
  basePath: '/studio',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
})
