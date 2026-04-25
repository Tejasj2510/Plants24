import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './src/sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Plants24',

  projectId: 'moml86tt',
  dataset: 'production',

  plugins: [structureTool()], // ✅ THIS IS REQUIRED

  schema: {
    types: schemaTypes
  },
})