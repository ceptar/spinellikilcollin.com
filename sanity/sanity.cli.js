// sanity.cli.js
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'yu09j7lk',
    dataset: 'development',
  },
  graphql: [
    {
      id: 'development',
      workspace: 'development-workspace',
      playground: true,
    },
    // {
    //   id: 'staging',
    //   workspace: 'staging-workspace',
    // },
    // {
    //   playground: true,
    //   workspace: 'migration-workspace',
    //   id: 'migration',
    // },
  ],
})
