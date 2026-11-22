import { defineConfig } from 'astro/config';

// Site pré-généré : chaque page sort en HTML statique dans dist/.
export default defineConfig({
  site: 'https://elite-nuisibles-idf.fr',
  trailingSlash: 'always',
  build: { format: 'directory' },
  compressHTML: true,
});
