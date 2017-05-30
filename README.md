# Simple Webpack Demo

This is an example for how to set up ES6 and SCSS with a flat HTML file using webpack.

In addition to setting up ES6 and SCSS this example includes webpack bundle analyzer which will give you useful information about the generated webpack bundle. This example also demonstrates how to separate app code from vendor code(node_modules) so that the vendor bundle can remain cached if dependencies haven't updated.

## Getting Started

After cloning you can run the following npm scripts:

* `npm run dev` - will run webpack with the `--watch` command.
* `npm run prod` - will run webpack in production which will minify all of the output and include hashes in the filenames for caching

In both cases your webpacked bundle will be available in `/dist`. Just open `/dist/index.html` in your browser.
You can view stats about your bundle in `/dist/stats.html`.
