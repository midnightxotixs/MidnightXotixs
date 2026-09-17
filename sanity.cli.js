import pkg from 'sanity/cli'
const {defineCliConfig} = pkg

export default defineCliConfig({
  api: {
    projectId: '9qdzkhb5',
    dataset: 'production'
  },
  project: {
    basePath: '/studio'
  },
  vite: (config) => ({
    ...config,
    base: '/studio/'
  })
})
