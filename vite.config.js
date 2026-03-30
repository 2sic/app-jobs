import { defineConfig } from 'vite';
import { resolve } from 'path';
import * as sass from 'sass';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';

// Get the style from environment variable (bs3, bs4, or bs5)
const style = process.env.STYLE || 'bs5';

export default defineConfig({
  root: '.',
  
  build: {
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: false,
    
    rollupOptions: {
      input: {
        scripts: resolve(process.cwd(), 'src/ts/index.ts'),
      },
      output: {
        entryFileNames: '[name].min.js',
        chunkFileNames: '[name].min.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return `${style}.min.css`;
          }
          return 'images/[name][extname]';
        },
      },
    },
    
    minify: 'esbuild',
    target: 'es2015',
    cssCodeSplit: false,
  },
  
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
    postcss: {
      plugins: [
        require('autoprefixer')(),
      ],
    },
  },
  
  resolve: {
    extensions: ['.ts', '.js', '.scss', '.css'],
  },
  
  server: {
    watch: {
      usePolling: true,
    },
  },
  
  plugins: [
    {
      name: 'compile-scss-to-css',
      async generateBundle(options, bundle) {
        const scssPath = resolve(process.cwd(), `src/styles/${style}.scss`);
        
        try {
          // Compile SCSS to CSS
          const result = sass.compile(scssPath, {
            sourceMap: true,
            style: 'compressed',
          });
          
          // Apply PostCSS (autoprefixer)
          const postcssResult = await postcss([autoprefixer()]).process(result.css, {
            from: scssPath,
            to: `${style}.min.css`,
            map: { 
              inline: false, 
              annotation: true,
              prev: result.sourceMap ? JSON.stringify(result.sourceMap) : false,
            },
          });
          
          // Add the CSS file to the bundle
          this.emitFile({
            type: 'asset',
            fileName: `${style}.min.css`,
            source: postcssResult.css,
          });
          
          // Add the source map
          if (postcssResult.map) {
            this.emitFile({
              type: 'asset',
              fileName: `${style}.min.css.map`,
              source: postcssResult.map.toString(),
            });
          }
          
          console.log(`✓ CSS compiled: ${style}.min.css`);
        } catch (error) {
          console.error('Error compiling SCSS:', error);
          throw error;
        }
      },
    },
    {
      name: 'build-progress',
      buildStart() {
        console.log(`\nBuilding ${style}...`);
      },
      buildEnd() {
        console.log(`✓ Build complete for ${style}\n`);
      },
    },
  ],
  
  optimizeDeps: {
    include: ['typescript'],
  },
});
