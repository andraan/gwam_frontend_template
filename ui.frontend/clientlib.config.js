const path = require('path');

const BUILD_DIR = path.join(__dirname, 'dist');
const CLIENTLIB_DIR = path.join(
  __dirname,
  '..',
  'ui.apps',
  'src',
  'main',
  'content',
  'jcr_root',
  'apps',
  'gwam-aem-frontend-template',
  'clientlibs'
);

// Config for `aem-clientlib-generator`
module.exports = {
  context: BUILD_DIR,
  clientLibRoot: CLIENTLIB_DIR,
  libs: {
    name: 'clientlib-gwam-aem-frontend-template',
    allowProxy: true,
    categories: ['gwam-aem-frontend-template.react'],
    // embed: ["granite.csrf.standalone"], -> Disabled until code is updated to use the new CSRF API
    serializationFormat: 'xml',
    cssProcessor: ['default:none', 'min:none'],
    jsProcessor: ['default:none', 'min:none'],
    customProperties: ['esModule'],
    esModule: true,
    assets: {
      js: {
        cwd: 'clientlib-gwam-aem-frontend-template/resources/js',
        files: ['**/index.js'],
        flatten: false
      },
      css: {
        cwd: 'clientlib-gwam-aem-frontend-template/resources/css',
        files: ['**/index.css'],
        flatten: false
      },
      resources: {
        files: [
          {
            src: 'clientlib-gwam-aem-frontend-template/resources/static/*',
            dest: 'static'
          },
          {
            src: 'clientlib-gwam-aem-frontend-template/resources/chunks/*',
            dest: 'chunks',
           },
        ]
      }
    }
  }
};
