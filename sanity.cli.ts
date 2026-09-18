import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '9qdzkhb5',
    dataset: 'production'
  },
  project: {
    basePath: '/studio'
  }
})
