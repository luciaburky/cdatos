
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/cdatos/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/cdatos"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 497, hash: '5a4e649d86ea76df44d99bfa35f4e8aba62bace2fdc6b5a9b95323f2f9686868', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1010, hash: '200837130942bab94d54a4708857fa91e1756e8b2306611b19383fb6b855478c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1658, hash: 'b2b7e4a3c9466973c96cb844b35719b27435521154af870ef13c0419547a5fc9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
